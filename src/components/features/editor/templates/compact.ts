import { TemplateDefinition } from './types';
import { statsWidget } from './blocks';

export const compactTemplate: TemplateDefinition = {
  id: 'compact',
  label: 'Compact',
  subtitle: 'Ultra concise format for quick scanning',
  render: (ctx) => {
    const { safeName, safeTitle, safeAbout, socialLinks, skillBadges, githubUser, state } = ctx;
    let md = '';
    if (safeName) md += `## 👋 ${safeName}${safeTitle ? ` - ${safeTitle}` : ''}\n\n`;
    if (safeAbout) md += `${safeAbout}\n\n`;
    if (skillBadges.length) md += `${skillBadges.join(' ')}\n\n`;
    if (socialLinks.length) md += `${socialLinks.join(' ')}\n\n`;
    if (state.analytics.showStats) md += `${statsWidget(githubUser, state.analytics.theme)}`;
    
    return md.trim();
  },
};