import { siteConfig } from "@/config/site";

export function EditorIntro() {
  return (
    <div className="container-app pt-8 pb-6 text-center max-w-3xl">
      <h1 className="heading-xl mb-3">
        Build Your GitHub Profile README
      </h1>
      <p className="subheading leading-relaxed">
        Fill in your details, pick your tech stack from 200+ icons, and choose a template - {siteConfig.name} generates clean,
        ready-to-use markdown for your GitHub profile in real time. No sign-in, no Markdown knowledge required.
      </p>
    </div>
  );
}