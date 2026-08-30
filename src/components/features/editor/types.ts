export interface ProfileState {
  fullName: string;
  title: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  twitter: string;
  discord: string;
  instagram: string;
  threads: string;
  youtube: string;
  twitch: string;
  about: string;
}

export interface AnalyticsState {
  showStats: boolean;
  showLanguages: boolean;
  showStreak: boolean;
  showGraph: boolean;
  showTrophies: boolean;
  showVisitorBadge: boolean;
  theme: string;
}

export interface EditorState {
  currentStep: number;
  templateId: string;
  profile: ProfileState;
  skills: string[];
  analytics: AnalyticsState;
}

export const INITIAL_STATE: EditorState = {
  currentStep: 1,
  templateId: 'minimalist',
  profile: {
    fullName: '',
    title: '',
    email: '',
    about: '',
    github: '',
    twitter: '',
    linkedin: '',
    website: '',
    discord: '',
    instagram: '',
    threads: '',
    youtube: '',
    twitch: ''
  },
  skills: [],
  analytics: {
    showStats: true,
    showLanguages: true,
    showStreak: true,
    showGraph: true,
    showTrophies: false,
    showVisitorBadge: true,
    theme: 'transparent'
  }
};
