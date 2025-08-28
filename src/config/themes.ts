// Theme configuration
export interface Theme {
  id: string;
  name: string;
  class: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default',
    class: '',
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      background: '#ffffff',
      text: '#1f2937',
    },
  },
  {
    id: 'dark',
    name: 'Dark',
    class: 'dark',
    colors: {
      primary: '#60a5fa',
      secondary: '#a78bfa',
      background: '#111827',
      text: '#f9fafb',
    },
  },
  {
    id: 'vhs',
    name: 'VHS',
    class: 'vhs-theme',
    colors: {
      primary: '#e11d48',
      secondary: '#fbbf24',
      background: '#f8fafc',
      text: '#1e293b',
    },
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    class: 'cyberpunk-theme',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      background: '#0f172a',
      text: '#f1f5f9',
    },
  },
  {
    id: 'retro',
    name: 'Retro',
    class: 'retro-theme',
    colors: {
      primary: '#f97316',
      secondary: '#22c55e',
      background: '#f0f9ff',
      text: '#0f172a',
    },
  },
];

export const defaultTheme = 'default';