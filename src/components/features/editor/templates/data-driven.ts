import { TemplateDefinition } from './types';
import { statsWidget, langsWidget, streakWidget, graphWidget, trophiesWidget, visitorBadge } from './blocks';

export const dataDrivenTemplate: TemplateDefinition = {
  id: 'data-driven',
  label: 'Data-Driven',
  subtitle: 'Metrics-first profile for engineering impact',
  render: (ctx) => {
    const { safeName, safeTitle, safeAbout, socialLinks, skillBadges, githubUser, state } = ctx;
    const a = state.analytics;
    let md = '';
    if (safeName) md += `<h1 align="center">📈 ${safeName}</h1>\n`;
    if (safeTitle) md += `<h4 align="center">${safeTitle}</h4>\n\n`;
    if (socialLinks.length) md += `<p align="center">${socialLinks.join(' ')}</p>\n\n`;
    if (safeAbout) md += `> ${safeAbout.replaceAll('\n', '\n> ')}\n\n`;
    md += `## 📈 Performance & Activity\n\n<p align="center">\n`;
    if (a.showStats) md += `  ${statsWidget(githubUser, a.theme)}\n`;
    if (a.showLanguages) md += `  ${langsWidget(githubUser, a.theme)}\n`;
    md += `</p>\n\n`;
    if (a.showStreak) md += `<p align="center">\n  ${streakWidget(githubUser, a.theme)}\n</p>\n\n`;
    if (a.showGraph) md += `<p align="center">\n  ${graphWidget(githubUser)}\n</p>\n\n`;
    if (a.showTrophies) md += `<p align="center">\n  ${trophiesWidget(githubUser, a.theme)}\n</p>\n\n`;
    if (a.showVisitorBadge) md += `<p align="center">${visitorBadge(githubUser)}</p>\n\n`;
    if (skillBadges.length) md += `## 🧰 Stack\n\n<p align="center">\n${skillBadges.join('\n')}\n</p>`;
    return md.trim();
  },
};