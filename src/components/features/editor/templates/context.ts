import { EditorState } from '../types';
import { escapeHtml, sanitizeGithubUsername, buildSocialLinks, buildSkillBadges } from './blocks';
import { TemplateContext } from './types';

export const buildTemplateContext = (state: EditorState): TemplateContext => ({
  state,
  githubUser: sanitizeGithubUsername(state.profile.github) || 'anuraghazra',
  safeName: escapeHtml(state.profile.fullName.trim()),
  safeTitle: escapeHtml(state.profile.title.trim()),
  safeAbout: state.profile.about.trim(),
  socialLinks: buildSocialLinks(state),
  skillBadges: buildSkillBadges(state.skills),
});