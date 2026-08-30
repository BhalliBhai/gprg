import { EditorState } from '../types';

export interface TemplateContext {
  state: EditorState;
  githubUser: string;
  safeName: string;
  safeTitle: string;
  safeAbout: string;
  socialLinks: string[];
  skillBadges: string[];
}

export interface TemplateDefinition {
  id: string;
  label: string;
  subtitle: string;
  render: (ctx: TemplateContext) => string;
}