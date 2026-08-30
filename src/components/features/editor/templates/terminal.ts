import { TemplateDefinition } from './types';
import { statsWidget, langsWidget, streakWidget, visitorBadge, graphWidget, trophiesWidget } from './blocks';

export const terminalTemplate: TemplateDefinition = {
  id: 'terminal',
  label: 'Terminal',
  subtitle: 'Hacker-style CLI aesthetic for the command-line crowd',
  render: (ctx) => {
    const { safeName, safeTitle, safeAbout, socialLinks, skillBadges, githubUser, state } = ctx;
    const a = state.analytics;
    const plainName = safeName.replace(/<[^>]+>/g, '') || 'developer';
    const plainTitle = safeTitle.replace(/<[^>]+>/g, '');
    let md = '```bash\n';
    md += `$ whoami\n${plainName}\n\n`;
    if (plainTitle) md += `$ cat role.txt\n${plainTitle}\n\n`;
    if (safeAbout) md += `$ cat about.txt\n${safeAbout}\n\n`;
    md += '$ ls ./skills\n```\n\n';
    if (skillBadges.length) md += `${skillBadges.join('\n')}\n\n`;
    if (socialLinks.length) md += `\`\`\`bash\n$ cat contact.txt\n\`\`\`\n\n${socialLinks.join(' ')}\n\n`;
    md += '```bash\n$ ./run-stats.sh\n```\n\n';
    if (a.showStats) md += `${statsWidget(githubUser, a.theme)}\n`;
    if (a.showLanguages) md += `${langsWidget(githubUser, a.theme)}\n\n`;
    if (a.showStreak) md += `${streakWidget(githubUser, a.theme)}\n\n`;
    if (a.showGraph) md += `${graphWidget(githubUser)}\n\n`; // ← add
    if (a.showTrophies) md += '```bash\n$ ./unlock-achievements.sh\n```\n\n' + `${trophiesWidget(githubUser, a.theme)}\n\n`; // ← add
    if (a.showVisitorBadge) md += `${visitorBadge(githubUser)}\n`;
    return md.trim();
  },
};