export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string; // Simple Icons slug
  iconColor?: string;
}

// interface Skill {
//   id: string;
//   name: string;
//   category: string;
//   icon: string;
//   iconColor?: string;
// }

// Paste your full existing AVAILABLE_SKILLS array here unchanged - relocated, not rewritten.
export const AVAILABLE_SKILLS: Skill[] = [
    // Frontend
  { id: 'react', name: 'React', category: 'Frontend', icon: 'react' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', icon: 'nextdotjs' },
  { id: 'vuejs', name: 'Vue.js', category: 'Frontend', icon: 'vuedotjs' },
  { id: 'angular', name: 'Angular', category: 'Frontend', icon: 'angular' },
  { id: 'svelte', name: 'Svelte', category: 'Frontend', icon: 'svelte' },
  { id: 'astro', name: 'Astro', category: 'Frontend', icon: 'astro' },
  { id: 'solidjs', name: 'SolidJS', category: 'Frontend', icon: 'solidjs' },
  { id: 'qwik', name: 'Qwik', category: 'Frontend', icon: 'qwik' },
  { id: 'preact', name: 'Preact', category: 'Frontend', icon: 'preact' },
  { id: 'lit', name: 'Lit', category: 'Frontend', icon: 'lit' },
  { id: 'alpinedotjs', name: 'Alpine.js', category: 'Frontend', icon: 'alpinedotjs' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwindcss' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', icon: 'bootstrap' },
  { id: 'sass', name: 'Sass', category: 'Frontend', icon: 'sass' },
  { id: 'vite', name: 'Vite', category: 'Frontend', icon: 'vite' },
  { id: 'webpack', name: 'Webpack', category: 'Frontend', icon: 'webpack' },
  { id: 'babel', name: 'Babel', category: 'Frontend', icon: 'babel' },
  { id: 'webassembly', name: 'WebAssembly', category: 'Frontend', icon: 'webassembly' },
  { id: 'redux', name: 'Redux', category: 'Frontend', icon: 'redux' },
  { id: 'jquery', name: 'jQuery', category: 'Frontend', icon: 'jquery' },
  { id: 'html5', name: 'HTML5', category: 'Frontend', icon: 'html5' },
  { id: 'css3', name: 'CSS3', category: 'Frontend', icon: 'css3' },
  { id: 'nuxtjs', name: 'Nuxt', category: 'Frontend', icon: 'nuxtdotjs' },
  { id: 'remix', name: 'Remix', category: 'Frontend', icon: 'remix' },
  { id: 'gatsby', name: 'Gatsby', category: 'Frontend', icon: 'gatsby' },
  { id: 'mui', name: 'MUI', category: 'Frontend', icon: 'mui' },
  { id: 'chakraui', name: 'Chakra UI', category: 'Frontend', icon: 'chakraui' },
  { id: 'radixui', name: 'Radix UI', category: 'Frontend', icon: 'radixui' },
  { id: 'styledcomponents', name: 'styled-components', category: 'Frontend', icon: 'styledcomponents' },
  { id: 'threejs', name: 'Three.js', category: 'Frontend', icon: 'threedotjs' },
  { id: 'd3js', name: 'D3.js', category: 'Frontend', icon: 'd3dotjs' },
  { id: 'chartjs', name: 'Chart.js', category: 'Frontend', icon: 'chartdotjs' },

  // Languages
  { id: 'javascript', name: 'JavaScript', category: 'Languages', icon: 'javascript' },
  { id: 'typescript', name: 'TypeScript', category: 'Languages', icon: 'typescript' },
  { id: 'python', name: 'Python', category: 'Languages', icon: 'python' },
  { id: 'java', name: 'Java', category: 'Languages', icon: 'java' },
  { id: 'go', name: 'Go', category: 'Languages', icon: 'go' },
  { id: 'rust', name: 'Rust', category: 'Languages', icon: 'rust' },
  { id: 'php', name: 'PHP', category: 'Languages', icon: 'php' },
  { id: 'ruby', name: 'Ruby', category: 'Languages', icon: 'ruby' },
  { id: 'cplusplus', name: 'C++', category: 'Languages', icon: 'cplusplus' },
  { id: 'csharp', name: 'C#', category: 'Languages', icon: 'csharp' },
  { id: 'c', name: 'C', category: 'Languages', icon: 'c' },
  { id: 'zig', name: 'Zig', category: 'Languages', icon: 'zig' },
  { id: 'elixir', name: 'Elixir', category: 'Languages', icon: 'elixir' },
  { id: 'clojure', name: 'Clojure', category: 'Languages', icon: 'clojure' },
  { id: 'haskell', name: 'Haskell', category: 'Languages', icon: 'haskell' },
  { id: 'scala', name: 'Scala', category: 'Languages', icon: 'scala' },
  { id: 'lua', name: 'Lua', category: 'Languages', icon: 'lua' },
  { id: 'solidity', name: 'Solidity', category: 'Languages', icon: 'solidity' },
  { id: 'swift', name: 'Swift', category: 'Languages', icon: 'swift' },
  { id: 'kotlin', name: 'Kotlin', category: 'Languages', icon: 'kotlin' },
  { id: 'dart', name: 'Dart', category: 'Languages', icon: 'dart' },
  { id: 'bash', name: 'Bash', category: 'Languages', icon: 'gnubash' },
  { id: 'fsharp', name: 'F#', category: 'Languages', icon: 'sharp' }, // verify slug
  { id: 'julia', name: 'Julia', category: 'Languages', icon: 'julia' },
  { id: 'r', name: 'R', category: 'Languages', icon: 'r' },
  { id: 'perl', name: 'Perl', category: 'Languages', icon: 'perl' },

  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'Backend', icon: 'nodedotjs' },
  { id: 'express', name: 'Express', category: 'Backend', icon: 'express' },
  { id: 'nestjs', name: 'NestJS', category: 'Backend', icon: 'nestjs' },
  { id: 'django', name: 'Django', category: 'Backend', icon: 'django' },
  { id: 'flask', name: 'Flask', category: 'Backend', icon: 'flask' },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend', icon: 'fastapi' },
  { id: 'fastify', name: 'Fastify', category: 'Backend', icon: 'fastify' },
  { id: 'trpc', name: 'tRPC', category: 'Backend', icon: 'trpc' },
  { id: 'strapi', name: 'Strapi', category: 'Backend', icon: 'strapi' },
  { id: 'bun', name: 'Bun', category: 'Backend', icon: 'bun' },
  { id: 'deno', name: 'Deno', category: 'Backend', icon: 'deno' },
  { id: 'spring', name: 'Spring', category: 'Backend', icon: 'spring' },
  { id: 'laravel', name: 'Laravel', category: 'Backend', icon: 'laravel' },
  { id: 'rails', name: 'Rails', category: 'Backend', icon: 'rubyonrails' },
  { id: 'graphql', name: 'GraphQL', category: 'Backend', icon: 'graphql' },
  { id: 'apollo', name: 'Apollo GraphQL', category: 'Backend', icon: 'apollographql' },
  { id: 'socketio', name: 'Socket.IO', category: 'Backend', icon: 'socketdotio' },

  // Database
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database', icon: 'postgresql' },
  { id: 'mysql', name: 'MySQL', category: 'Database', icon: 'mysql' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', icon: 'mongodb' },
  { id: 'redis', name: 'Redis', category: 'Database', icon: 'redis' },
  { id: 'sqlite', name: 'SQLite', category: 'Database', icon: 'sqlite' },
  { id: 'supabase', name: 'Supabase', category: 'Database', icon: 'supabase' },
  { id: 'firebase', name: 'Firebase', category: 'Database', icon: 'firebase' },
  { id: 'prisma', name: 'Prisma', category: 'Database', icon: 'prisma' },
  { id: 'mariadb', name: 'MariaDB', category: 'Database', icon: 'mariadb' },
  { id: 'dynamodb', name: 'DynamoDB', category: 'Database', icon: 'amazondynamodb' },
  { id: 'cassandra', name: 'Cassandra', category: 'Database', icon: 'apachecassandra' },
  { id: 'neo4j', name: 'Neo4j', category: 'Database', icon: 'neo4j' },
  { id: 'appwrite', name: 'Appwrite', category: 'Database', icon: 'appwrite' },
  { id: 'planetscale', name: 'PlanetScale', category: 'Database', icon: 'planetscale' },
  { id: 'elasticsearch', name: 'Elasticsearch', category: 'Database', icon: 'elasticsearch' },

  // Cloud & DevOps
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps', icon: 'docker' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'kubernetes' },
  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps', icon: 'amazonaws' },
  { id: 'gcp', name: 'Google Cloud', category: 'Cloud & DevOps', icon: 'googlecloud' },
  { id: 'azure', name: 'Azure', category: 'Cloud & DevOps', icon: 'azure' },
  { id: 'terraform', name: 'Terraform', category: 'Cloud & DevOps', icon: 'terraform' },
  { id: 'ansible', name: 'Ansible', category: 'Cloud & DevOps', icon: 'ansible' },
  { id: 'prometheus', name: 'Prometheus', category: 'Cloud & DevOps', icon: 'prometheus' },
  { id: 'grafana', name: 'Grafana', category: 'Cloud & DevOps', icon: 'grafana' },
  { id: 'digitalocean', name: 'DigitalOcean', category: 'Cloud & DevOps', icon: 'digitalocean' },
  { id: 'cloudflare', name: 'Cloudflare', category: 'Cloud & DevOps', icon: 'cloudflare' },
  { id: 'vercel', name: 'Vercel', category: 'Cloud & DevOps', icon: 'vercel' },
  { id: 'netlify', name: 'Netlify', category: 'Cloud & DevOps', icon: 'netlify' },
  { id: 'nginx', name: 'Nginx', category: 'Cloud & DevOps', icon: 'nginx' },
  { id: 'githubactions', name: 'GitHub Actions', category: 'Cloud & DevOps', icon: 'githubactions' },
  { id: 'rabbitmq', name: 'RabbitMQ', category: 'Cloud & DevOps', icon: 'rabbitmq' },
  { id: 'heroku', name: 'Heroku', category: 'Cloud & DevOps', icon: 'heroku' },
  { id: 'render', name: 'Render', category: 'Cloud & DevOps', icon: 'render' }, // verify slug
  { id: 'railway', name: 'Railway', category: 'Cloud & DevOps', icon: 'railway' }, // verify slug
  { id: 'flyio', name: 'Fly.io', category: 'Cloud & DevOps', icon: 'flydotio' },
  { id: 'pulumi', name: 'Pulumi', category: 'Cloud & DevOps', icon: 'pulumi' },
  { id: 'vault', name: 'Vault', category: 'Cloud & DevOps', icon: 'vault' },
  { id: 'podman', name: 'Podman', category: 'Cloud & DevOps', icon: 'podman' },

  // Tools
  { id: 'git', name: 'Git', category: 'Tools', icon: 'git' },
  { id: 'github', name: 'GitHub', category: 'Tools', icon: 'github' },
  { id: 'gitlab', name: 'GitLab', category: 'Tools', icon: 'gitlab' },
  { id: 'linux', name: 'Linux', category: 'Tools', icon: 'linux' },
  { id: 'ubuntu', name: 'Ubuntu', category: 'Tools', icon: 'ubuntu' },
  { id: 'neovim', name: 'Neovim', category: 'Tools', icon: 'neovim' },
  { id: 'vscode', name: 'VS Code', category: 'Tools', icon: 'visualstudiocode' },
  { id: 'webstorm', name: 'WebStorm', category: 'Tools', icon: 'webstorm' },
  { id: 'postman', name: 'Postman', category: 'Tools', icon: 'postman' },
  { id: 'insomnia', name: 'Insomnia', category: 'Tools', icon: 'insomnia' },
  { id: 'notion', name: 'Notion', category: 'Tools', icon: 'notion' },
  { id: 'obsidian', name: 'Obsidian', category: 'Tools', icon: 'obsidian' },
  { id: 'slack', name: 'Slack', category: 'Tools', icon: 'slack' },
  { id: 'discord', name: 'Discord', category: 'Tools', icon: 'discord' },
  { id: 'trello', name: 'Trello', category: 'Tools', icon: 'trello' },
  { id: 'jira', name: 'Jira', category: 'Tools', icon: 'jira' },
  { id: 'pnpm', name: 'pnpm', category: 'Tools', icon: 'pnpm' },
  { id: 'npm', name: 'npm', category: 'Tools', icon: 'npm' },
  { id: 'yarn', name: 'Yarn', category: 'Tools', icon: 'yarn' },

  // Design
  { id: 'figma', name: 'Figma', category: 'Design', icon: 'figma' },
  { id: 'adobexd', name: 'Adobe XD', category: 'Design', icon: 'adobexd' },
  { id: 'photoshop', name: 'Photoshop', category: 'Design', icon: 'adobephotoshop' },
  { id: 'illustrator', name: 'Illustrator', category: 'Design', icon: 'adobeillustrator' },
  { id: 'premierepro', name: 'Premiere Pro', category: 'Design', icon: 'adobepremierepro' },
  { id: 'aftereffects', name: 'After Effects', category: 'Design', icon: 'adobeaftereffects' },
  { id: 'blender', name: 'Blender', category: 'Design', icon: 'blender' },
  { id: 'framer', name: 'Framer', category: 'Design', icon: 'framer' },
  { id: 'canva', name: 'Canva', category: 'Design', icon: 'canva' },

  // Mobile
  { id: 'flutter', name: 'Flutter', category: 'Mobile', icon: 'flutter' },
  { id: 'reactnative', name: 'React Native', category: 'Mobile', icon: 'react' },
  { id: 'android', name: 'Android', category: 'Mobile', icon: 'android' },
  { id: 'ios', name: 'iOS', category: 'Mobile', icon: 'apple' },
  { id: 'xcode', name: 'Xcode', category: 'Mobile', icon: 'xcode' },
  { id: 'xamarin', name: 'Xamarin', category: 'Mobile', icon: 'xamarin' },
  { id: 'ionic', name: 'Ionic', category: 'Mobile', icon: 'ionic' },

  // Testing
  { id: 'jest', name: 'Jest', category: 'Testing', icon: 'jest' },
  { id: 'vitest', name: 'Vitest', category: 'Testing', icon: 'vitest' },
  { id: 'cypress', name: 'Cypress', category: 'Testing', icon: 'cypress' },
  { id: 'playwright', name: 'Playwright', category: 'Testing', icon: 'playwright' },
  { id: 'selenium', name: 'Selenium', category: 'Testing', icon: 'selenium' },
  { id: 'puppeteer', name: 'Puppeteer', category: 'Testing', icon: 'puppeteer' },
  { id: 'testinglibrary', name: 'Testing Library', category: 'Testing', icon: 'testinglibrary' },
  { id: 'mocha', name: 'Mocha', category: 'Testing', icon: 'mocha' },
  { id: 'storybook', name: 'Storybook', category: 'Testing', icon: 'storybook' },

  // AI / Data
  { id: 'pytorch', name: 'PyTorch', category: 'AI / Data', icon: 'pytorch' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI / Data', icon: 'tensorflow' },
  { id: 'scikitlearn', name: 'Scikit-Learn', category: 'AI / Data', icon: 'scikitlearn' },
  { id: 'pandas', name: 'Pandas', category: 'AI / Data', icon: 'pandas' },
  { id: 'numpy', name: 'NumPy', category: 'AI / Data', icon: 'numpy' },
  { id: 'jupyter', name: 'Jupyter', category: 'AI / Data', icon: 'jupyter' },
  { id: 'openai', name: 'OpenAI API', category: 'AI / Data', icon: 'openai' },
  { id: 'anthropic', name: 'Anthropic', category: 'AI / Data', icon: 'anthropic' },
  { id: 'ollama', name: 'Ollama', category: 'AI / Data', icon: 'ollama' },
  { id: 'opencv', name: 'OpenCV', category: 'AI / Data', icon: 'opencv' },
  { id: 'spark', name: 'Apache Spark', category: 'AI / Data', icon: 'apachespark' },
  { id: 'kafka', name: 'Apache Kafka', category: 'AI / Data', icon: 'apachekafka' },
  { id: 'huggingface', name: 'Hugging Face', category: 'AI / Data', icon: 'huggingface' },
  { id: 'langchain', name: 'LangChain', category: 'AI / Data', icon: 'langchain' },
  { id: 'n8n', name: 'n8n', category: 'AI / Data', icon: 'n8n' },
  { id: 'gemini', name: 'Gemini', category: 'AI / Data', icon: 'googlegemini' },
  { id: 'mistralai', name: 'Mistral AI', category: 'AI / Data', icon: 'mistralai' },
  { id: 'databricks', name: 'Databricks', category: 'AI / Data', icon: 'databricks' },
  { id: 'snowflake', name: 'Snowflake', category: 'AI / Data', icon: 'snowflake' },
  { id: 'airflow', name: 'Airflow', category: 'AI / Data', icon: 'apacheairflow' },
  { id: 'streamlit', name: 'Streamlit', category: 'AI / Data', icon: 'streamlit' },
  { id: 'gradio', name: 'Gradio', category: 'AI / Data', icon: 'gradio' },
  { id: 'keras', name: 'Keras', category: 'AI / Data', icon: 'keras' },

  // CMS / Commerce
  { id: 'wordpress', name: 'WordPress', category: 'Tools', icon: 'wordpress' },
  { id: 'sanity', name: 'Sanity', category: 'Tools', icon: 'sanity' },
  { id: 'shopify', name: 'Shopify', category: 'Tools', icon: 'shopify' },
  { id: 'webflow', name: 'Webflow', category: 'Design', icon: 'webflow' },

  // Payments/Fintech
  { id: 'stripe', name: 'Stripe', category: 'Tools', icon: 'stripe' },
  { id: 'paypal', name: 'PayPal', category: 'Tools', icon: 'paypal' },

  // PM/collab
  { id: 'linear', name: 'Linear', category: 'Tools', icon: 'linear' },
  { id: 'clickup', name: 'ClickUp', category: 'Tools', icon: 'clickup' },
  { id: 'airtable', name: 'Airtable', category: 'Tools', icon: 'airtable' },
  { id: 'zapier', name: 'Zapier', category: 'Tools', icon: 'zapier' },
];

export const SKILL_LABELS = AVAILABLE_SKILLS.reduce<Record<string, string>>((acc, skill) => {
  acc[skill.id] = skill.name;
  return acc;
}, {});

export const SKILL_ICONS = AVAILABLE_SKILLS.reduce<Record<string, string>>((acc, skill) => {
  acc[skill.id] = skill.icon;
  return acc;
}, {});

export const CATEGORIES = [
  'All', 'Frontend', 'Backend', 'Languages', 'Database', 'Cloud & DevOps',
  'AI / Data', 'Tools', 'Design', 'Mobile', 'Testing',
];

/**
 * Real brand colors (hex, no '#') for the most common skills, used as the
 * exported badge's background so it visually echoes the picker's full-color
 * icon. Not every skill has a confirmed value here - I only included ones
 * I'm confident are current and correct; unlisted skills fall back to the
 * site's theme green in markdown.ts rather than guess at a wrong hex.
 */
export const SKILL_BRAND_COLORS: Record<string, string> = {
  react: '61DAFB',
  nextjs: '000000',
  vuejs: '4FC08D',
  angular: 'DD0031',
  svelte: 'FF3E00',
  tailwind: '06B6D4',
  javascript: 'F7DF1E',
  typescript: '3178C6',
  python: '3776AB',
  java: 'ED8B00',
  go: '00ADD8',
  rust: '000000',
  php: '777BB4',
  ruby: 'CC342D',
  cplusplus: '00599C',
  csharp: '239120',
  nodejs: '339933',
  express: '000000',
  django: '092E20',
  flask: '000000',
  fastapi: '009688',
  postgresql: '4169E1',
  mysql: '4479A1',
  mongodb: '47A248',
  redis: 'DC382D',
  docker: '2496ED',
  kubernetes: '326CE5',
  aws: '232F3E',
  gcp: '4285F4',
  azure: '0078D4',
  git: 'F05032',
  github: '181717',
  figma: 'F24E1E',
  flutter: '02569B',
  swift: 'FA7343',
  kotlin: '7F52FF',
  pytorch: 'EE4C2C',
  tensorflow: 'FF6F00',
  openai: '412991',
  anthropic: '191919',
  vercel: '000000',
  firebase: 'FFCA28',
  supabase: '3FCF8E',
  graphql: 'E10098',
};