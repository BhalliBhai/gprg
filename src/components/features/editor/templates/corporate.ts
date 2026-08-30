import { TemplateDefinition } from './types';
import { statsWidget, capsuleBanner, langsWidget, streakWidget, graphWidget, trophiesWidget, visitorBadge } from './blocks';
import { AVAILABLE_SKILLS } from '../data/skills';

export const corporateTemplate: TemplateDefinition = {
  id: 'corporate',
  label: 'Corporate',
  subtitle: 'Structured, resume-style layout for recruiter-facing profiles',
  render: (ctx) => {
    const { safeName, safeTitle, safeAbout, socialLinks, githubUser, state } = ctx;
    let md = '';
    if (safeName) md += `${capsuleBanner(safeName.replace(/<[^>]+>/g, ''), { type: 'rect', height: 120 })}\n\n`;
    if (safeTitle) md += `<h3 align="center">${safeTitle}</h3>\n\n`;
    if (socialLinks.length) md += `<p align="center">${socialLinks.join(' ')}</p>\n\n<hr/>\n\n`;
    if (safeAbout) md += `## Summary\n\n${safeAbout}\n\n`;

    if (state.skills.length) {
      const byCategory = new Map<string, string[]>();
      for (const skill of AVAILABLE_SKILLS) {
        if (!state.skills.includes(skill.id)) continue;
        const list = byCategory.get(skill.category) ?? [];
        list.push(skill.name);
        byCategory.set(skill.category, list);
      }
      md += `## Skills\n\n| Category | Technologies |\n|---|---|\n`;
      for (const [category, names] of byCategory) {
        md += `| **${category}** | ${names.join(', ')} |\n`;
      }
      md += '\n';
    }

    if (state.analytics.showStats) {
      md += `## GitHub Activity\n\n<p align="center">\n  ${statsWidget(githubUser, state.analytics.theme)}\n</p>`;
    }

    const widgetSections: string[] = [];
    if (state.analytics.showStats) widgetSections.push(statsWidget(githubUser, state.analytics.theme));
    if (state.analytics.showLanguages) widgetSections.push(langsWidget(githubUser, state.analytics.theme));
    if (state.analytics.showStreak) widgetSections.push(streakWidget(githubUser, state.analytics.theme));
    if (state.analytics.showGraph) widgetSections.push(graphWidget(githubUser));
    if (state.analytics.showTrophies) widgetSections.push(trophiesWidget(githubUser, state.analytics.theme));

    if (widgetSections.length) {
      md += `## GitHub Activity\n\n<p align="center">\n${widgetSections.map((w) => `  ${w}`).join('\n')}\n</p>\n\n`;
    }
    if (state.analytics.showVisitorBadge) md += `<p align="center">${visitorBadge(githubUser)}</p>`;
    return md.trim();
  },
};
