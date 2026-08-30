import { EditorState } from '../components/features/editor/types';
import { buildTemplateContext } from '../components/features/editor/templates/context';
import { getTemplate } from '../components/features/editor/templates/registry';

export const generateMarkdown = (state: EditorState): string => {
  const ctx = buildTemplateContext(state);
  return getTemplate(state.templateId).render(ctx);
};
