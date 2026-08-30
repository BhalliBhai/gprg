// src/components/features/editor/config/steps.ts
export interface StepConfig {
  id: number;
  label: string;
  title: string;
  nextLabel: string;
}

export const EDITOR_STEPS: StepConfig[] = [
  { id: 1, label: 'Basic Info', title: 'Profile Information', nextLabel: 'Skills & Tech Stack' },
  { id: 2, label: 'Tech Stack', title: 'Tech Stack & Skills', nextLabel: 'Project Stats' },
  { id: 3, label: 'Github Stats', title: 'GitHub Analytics', nextLabel: 'Choose Template' },
  { id: 4, label: 'Template', title: 'Choose Your Template', nextLabel: 'Finalize Export' },
  { id: 5, label: 'Finalize', title: 'Generate & Export', nextLabel: 'Done' },
];