import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const postsDirectory = path.join(projectRoot, "src", "content", "blog");
const outputPath = path.join(projectRoot, "src", "generated-blog-posts.ts");

if (!fs.existsSync(postsDirectory)) {
  throw new Error(`Blog posts directory not found: ${postsDirectory}`);
}

const files = fs
  .readdirSync(postsDirectory)
  .filter((file) => file.endsWith(".mdx"))
  .sort();

if (files.length === 0) {
  throw new Error(`No .mdx blog posts found in ${postsDirectory}`);
}

const imports = [];
const posts = [];

for (const [index, filename] of files.entries()) {
  const filePath = path.join(postsDirectory, filename);
  const source = fs.readFileSync(filePath, "utf8");

  if (!/^export\s+const\s+metadata\s*=\s*\{/m.test(source)) {
    throw new Error(`${filename} must export a metadata object at the start of the file.`);
  }

  const componentName = `BlogPost${index}`;
  const sourceMetadataName = `sourceMetadata${index}`;
  const metadataName = `blogMetadata${index}`;
  const slug = filename.replace(/\.mdx$/, "");
  const content = source
    .replace(/^export\s+const\s+metadata\s*=\s*\{[\s\S]*?^\};\s*/m, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/<\/?.+?>/g, " ");
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const coverImage = source.match(/^\s*coverImage\s*:\s*["']([^"']+)["']/m)?.[1];

  imports.push(
    `import ${componentName}, { metadata as ${sourceMetadataName} } from ${JSON.stringify(`./content/blog/${filename}`)};`,
    `const ${metadataName}: BlogMetadata = ${sourceMetadataName};`,
  );

  if (coverImage?.startsWith("/")) {
    const coverPath = path.join(projectRoot, "public", coverImage.slice(1));
    if (!fs.existsSync(coverPath)) {
      throw new Error(`${filename} references a missing cover image: ${coverImage}`);
    }
  }

  for (const [, imagePath] of source.matchAll(/!\[[^\]]*\]\((\/[^)\s]+)\)/g)) {
    const localImagePath = path.join(projectRoot, "public", imagePath.split("?")[0].slice(1));
    if (!fs.existsSync(localImagePath)) {
      throw new Error(`${filename} references a missing image: ${imagePath}`);
    }
  }

  posts.push(
    `  { slug: ${JSON.stringify(slug)}, metadata: ${metadataName}, component: ${componentName}, wordCount: ${wordCount} },`,
  );
}

const generatedSource = `type BlogMetadata = {
  title: string;
  description: string;
  date?: string;
  publishDate?: string;
  coverImage?: string;
  tags?: string[];
  excerpt?: string;
};

${imports.join("\n")}

export const generatedBlogPosts = [
${posts.join("\n")}
];
`;

if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, "utf8") !== generatedSource) {
  fs.writeFileSync(outputPath, generatedSource);
  console.log(`Generated blog manifest for ${files.length} posts.`);
}
