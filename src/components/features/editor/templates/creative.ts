import { TemplateDefinition } from './types';
import { statsWidget, langsWidget, streakWidget, graphWidget, trophiesWidget, capsuleBanner, typingSvg, visitorBadge } from './blocks';

export const creativeTemplate: TemplateDefinition = {
  id: 'creative',
  label: 'Creative',
  subtitle: 'Animated banner header with bold visual energy',
  render: (ctx) => {
    const { safeName, safeTitle, safeAbout, socialLinks, skillBadges, githubUser, state } = ctx;
    const a = state.analytics;
    let md = '';
    if (safeName) md += `${capsuleBanner(`Hi, I'm ${safeName.replace(/<[^>]+>/g, '')} 👋`)}\n\n`;
    if (safeTitle) md += `<p align="center">${typingSvg([safeTitle.replace(/<[^>]+>/g, ''), 'Always building something new'])}</p>\n\n`;
    if (socialLinks.length) md += `<p align="center">\n${socialLinks.join('\n')}\n</p>\n\n`;
    if (a.showVisitorBadge) md += `<p align="center">${visitorBadge(githubUser)}</p>\n\n`;
    if (safeAbout) md += `<p align="center">${safeAbout}</p>\n\n`;
    if (skillBadges.length) md += `<h3 align="center">✨ My Toolbox ✨</h3>\n<p align="center">\n${skillBadges.join('\n')}\n</p>\n\n`;
    if (a.showTrophies) md += `<p align="center">\n  ${trophiesWidget(githubUser, a.theme)}\n</p>\n\n`;
    const widgets = [a.showStats && statsWidget(githubUser, a.theme), a.showLanguages && langsWidget(githubUser, a.theme)].filter(Boolean) as string[];
    if (widgets.length) md += `<p align="center">\n${widgets.map((w) => `  ${w}`).join('\n')}\n</p>\n\n`;
    if (a.showStreak) md += `<p align="center">\n  ${streakWidget(githubUser, a.theme)}\n</p>\n\n`;
    if (a.showGraph) md += `<p align="center">\n  ${graphWidget(githubUser)}\n</p>\n\n`;
    md += capsuleBanner('Thanks for visiting! ⭐', { type: 'waving', height: 100 });
    return md.trim();
  },
};