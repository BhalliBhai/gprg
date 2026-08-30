import { MetadataRoute } from 'next';
import { siteConfig } from '../config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // AI search/retrieval + training bots - explicit allow rules here
        // future-proof you: if the wildcard rule above ever gains a
        // disallow, these named agents still win (specific > wildcard).
        userAgent: [
          // OpenAI
          'OAI-SearchBot',
          'ChatGPT-User',
          'GPTBot',

          // Anthropic
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',

          // Perplexity
          'PerplexityBot',
          'Perplexity-User',

          // Google
          'Google-Extended',
          'Googlebot-News',
          'Googlebot-Image',
          'Googlebot-Video',
          'Googlebot',
          'Googlebot smartphone',

          // Meta
          'meta-externalagent',
          'FacebookBot',

          // xAI / Grok
          'GrokBot',
          'xAI-Grok',
          'Grok-DeepSearch',

          // Microsoft
          'Bingbot',

          // Apple
          'Applebot-Extended',

          // Amazon
          'Amazonbot',

          // Other AI answer engines
          'DuckAssistBot',
          'YouBot',
          'MistralAI-User'       // Alexa / Rufus / AI shopping
        ],
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}