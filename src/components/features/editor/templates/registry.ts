import { TemplateDefinition } from './types';
import { minimalistTemplate } from './minimalist';
import { dataDrivenTemplate } from './data-driven';
import { developerTemplate } from './developer';
import { creativeTemplate } from './creative';
import { compactTemplate } from './compact';
import { terminalTemplate } from './terminal';
import { corporateTemplate } from './corporate';

export const TEMPLATES: TemplateDefinition[] = [
  minimalistTemplate,
  dataDrivenTemplate,
  developerTemplate,
  creativeTemplate,
  compactTemplate,
  terminalTemplate,
  corporateTemplate,
];

export const getTemplate = (id: string): TemplateDefinition => TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];