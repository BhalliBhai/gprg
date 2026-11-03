# GPRG

GPRG is a Next.js app with an MDX blog, deployed to Cloudflare Workers using OpenNext.

## Getting Started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Blog posts and local images are validated and indexed automatically before the dev server starts.

## Blog content

Add an `.mdx` file under `src/content/blog/` that exports a `metadata` object containing a `title`, `description`, and ISO-formatted `publishDate`; `coverImage` is optional and must point to a file under `public/`. The build-time generator creates `src/generated-blog-posts.ts`, imports each post and its renderer into the Worker, and checks that local cover and Markdown images exist. Do not edit the generated file by hand.

Run `npm run dev`, `npm run build`, or `npm run cf:build` after adding posts; each command regenerates the manifest first. Posts are rendered on the server and included in the static route list and sitemap.

## Cloudflare deployment

The Wrangler configuration targets the `gprg.bhalli.dev` Worker route, serves static assets through the `ASSETS` binding, and enables Cloudflare's `IMAGES` binding for responsive AVIF/WebP image transformations. Authenticate Wrangler with the Cloudflare account that owns the `bhalli.dev` zone before previewing or deploying.

Set the `GEMINI_API_KEY` Worker secret before deploying if AI bio generation should be enabled:

```bash
npx wrangler secret put GEMINI_API_KEY
```

The app falls back to `gemini-2.5-flash`; configure `GEMINI_MODEL` as a Wrangler variable only if you need a different model.

```bash
npm ci
npm run cf:build
npm run preview
npm run deploy
```

`npm run preview` builds and runs the Worker locally in Wrangler. `npm run deploy` builds and deploys to Cloudflare while preserving configured dashboard variables. The Worker route is set in `wrangler.jsonc`; the canonical site origin is set in `src/config/site.ts`. Update both when deploying to a different domain. The production image optimizer requires the `IMAGES` binding declared in `wrangler.jsonc`; without it, OpenNext serves original images without transformations.
...
