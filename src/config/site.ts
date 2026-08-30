export const siteConfig = {
  name: 'GPRG',
  fullName: 'GPRG - GitHub Profile README Generator',
  title: 'GPRG - Free GitHub Profile README Generator/Maker | Create Professional READMEs',
  tagline: 'Level Up Your GitHub Profile',
  url: 'https://gprg.bhalli.dev',
  creatorUrl: 'https://bhalli.dev',
  creatorName: 'Bhalli B',
  repoUrl: 'https://github.com/BhalliBhai/gprg',
  issuesUrl: 'https://github.com/BhalliBhai/gprg/issues/new',
  buyMeACoffeeUrl:
    process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL || 'https://buymeacoffee.com/bhalli',
  description:
    'Create stunning GitHub Profile READMEs in minutes with GPRG - the best, continuously improving, free, no-code AI readme generator. AI-powered profile summaries, 200+ tech icons, dynamic stats & premium templates.',
  navLinks: [
    { href: '/generator', label: 'Generator', icon: 'edit_document' },
    { href: '/guide', label: 'Guide', icon: 'menu_book' },
    { href: '/templates', label: 'Templates', icon: 'style' },
    { href: '/faq', label: 'FAQ', icon: 'quiz' },
    { href: '/blog', label: 'Blog', icon: 'article' },
  ],
  links: {
    browserTestingTool: 'https://github.com/BhalliBhai/Browser-Testing',
  },
} as const;

export type SiteConfig = typeof siteConfig;