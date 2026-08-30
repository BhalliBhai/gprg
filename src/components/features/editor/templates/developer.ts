import { TemplateDefinition } from './types';
import { statsWidget, langsWidget, streakWidget, trophiesWidget, visitorBadge, graphWidget } from './blocks';

export const developerTemplate: TemplateDefinition = {
  id: 'developer',
  label: 'Developer',
  subtitle: 'Balanced profile with strong technical depth',
  render: (ctx) => {
    const { safeName, safeTitle, safeAbout, socialLinks, skillBadges, githubUser, state } = ctx;
    const a = state.analytics;
    let md = '';
    if (safeName) md += `### Hi there, I'm ${safeName} 👋\n\n`;
    if (safeTitle) md += `**${safeTitle}**\n\n`;
    if (safeAbout) md += `${safeAbout}\n\n`;
    if (socialLinks.length) md += `### Connect with me\n\n${socialLinks.join(' ')}\n\n`;
    if (skillBadges.length) md += `### Tech Stack\n\n${skillBadges.join('\n')}\n\n`;
    md += `### 📊 Engineering Metrics\n\n`;
    if (a.showStats) md += `${statsWidget(githubUser, a.theme)}\n`;
    if (a.showLanguages) md += `${langsWidget(githubUser, a.theme)}\n\n`;
    if (a.showStreak) md += `${streakWidget(githubUser, a.theme)}\n\n`;
    if (a.showTrophies) md += `${trophiesWidget(githubUser, a.theme)}\n\n`;
    if (a.showGraph) md += `${graphWidget(githubUser)}\n\n`; // ← add this line
    if (a.showVisitorBadge) md += `${visitorBadge(githubUser)}\n`;

    return md.trim();
  },
};