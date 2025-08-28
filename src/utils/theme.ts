// Theme utility functions
import { themes, defaultTheme, type Theme } from '~/config/themes';

export const getStoredTheme = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || defaultTheme;
  }
  return defaultTheme;
};

export const setStoredTheme = (theme: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
};

export const getSystemTheme = (): string => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default';
  }
  return defaultTheme;
};

export const getActiveTheme = (): string => {
  const stored = getStoredTheme();
  if (stored === 'system') {
    return getSystemTheme();
  }
  return stored;
};

export const applyTheme = (themeId: string): void => {
  if (typeof document === 'undefined') return;

  // Remove all theme classes
  document.documentElement.classList.remove('dark', 'vhs-theme', 'cyberpunk-theme', 'retro-theme');
  
  // Find the theme
  const theme = themes.find(t => t.id === themeId) || themes.find(t => t.id === defaultTheme);
  
  // Apply the theme class if it exists
  if (theme && theme.class) {
    document.documentElement.classList.add(theme.class);
  }
  
  // Update stored theme
  setStoredTheme(themeId);
};

export const initializeTheme = (): void => {
  const theme = getActiveTheme();
  applyTheme(theme);
};

export const toggleTheme = (): string => {
  const current = getActiveTheme();
  const currentIndex = themes.findIndex(t => t.id === current);
  const nextIndex = (currentIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex].id;
  
  applyTheme(nextTheme);
  return nextTheme;
};

export const getThemeById = (id: string): Theme | undefined => {
  return themes.find(t => t.id === id);
};

export const getAvailableThemes = (): Theme[] => {
  return [...themes];
};