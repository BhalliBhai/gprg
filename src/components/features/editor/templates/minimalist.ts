import { TemplateDefinition } from './types';
import { statsWidget, langsWidget, streakWidget, graphWidget, trophiesWidget, visitorBadge } from './blocks';
import { siteConfig } from '../../../../config/site';

export const minimalistTemplate: TemplateDefinition = {
  id: 'minimalist',
  label: 'Minimalist',
  subtitle: 'Clean, recruiter-friendly, zero-noise layout',
  render: (ctx) => {
    const { state, githubUser, safeName, safeTitle, safeAbout, socialLinks, skillBadges } = ctx;
    const a = state.analytics;
    let md = '';
    if (safeName) md += `<h1 align="center">Hi 👋, I'm ${safeName}</h1>\n`;
    if (safeTitle) md += `<h3 align="center">${safeTitle}</h3>\n\n`;
    if (socialLinks.length) md += `<p align="center">\n${socialLinks.join('\n')}\n</p>\n\n<hr/>\n\n`;
    if (a.showVisitorBadge) md += `<p align="left">\n  ${visitorBadge(githubUser)}\n</p>\n\n`;
    if (safeAbout) md += `${safeAbout}\n\n`;
    if (a.showTrophies) md += `## 🏆 GitHub Trophies\n\n<p align="left">\n  ${trophiesWidget(githubUser, a.theme)}\n</p>\n\n`;
    if (skillBadges.length) md += `## 💻 Tech Stack\n\n<p align="left">\n${skillBadges.join('\n')}\n</p>\n\n`;
    const widgets = [a.showStats && statsWidget(githubUser, a.theme), a.showLanguages && langsWidget(githubUser, a.theme), a.showStreak && streakWidget(githubUser, a.theme)].filter(Boolean) as string[];
    if (widgets.length) md += `## 📊 GitHub Analytics\n\n<p align="left">\n${widgets.map((w) => `  ${w}`).join('\n')}\n</p>\n\n`;
    if (a.showGraph) md += `<p align="left">\n  ${graphWidget(githubUser)}\n</p>\n\n`;
    md += `---\nBuilt with [GPRM](${siteConfig.url})`;
    return md.trim();
  },
};