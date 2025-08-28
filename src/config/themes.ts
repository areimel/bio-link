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
    id: 'electric-surge',
    name: 'Electric Surge',
    class: 'electric-surge-theme',
    colors: {
      primary: '#39FF14',     // Neon Green
      secondary: '#000000',   // Pure Black
      background: '#1a1a1a',  // Near Black
      text: '#39FF14',        // Neon Green on dark
    },
  },
  {
    id: 'cyber-rebellion',
    name: 'Cyber Rebellion',
    class: 'cyber-rebellion-theme',
    colors: {
      primary: '#FF1493',     // Deep Pink
      secondary: '#00BFFF',   // Deep Sky Blue
      background: '#0a0a0a',  // Deep Black
      text: '#FFFFFF',        // Pure White
    },
  },
  {
    id: 'voltage-yellow',
    name: 'Voltage Yellow',
    class: 'voltage-yellow-theme',
    colors: {
      primary: '#FFD700',     // Electric Gold
      secondary: '#FF4500',   // Orange Red
      background: '#2F2F2F',  // Charcoal
      text: '#000000',        // Black (for yellow backgrounds)
    },
  },
  {
    id: 'neon-noir',
    name: 'Neon Noir',
    class: 'neon-noir-theme',
    colors: {
      primary: '#FF00FF',     // Pure Magenta
      secondary: '#8A2BE2',   // Blue Violet
      background: '#0D0D0D',  // Almost Black
      text: '#FFFFFF',        // Pure White
    },
  },
  {
    id: 'industrial-heat',
    name: 'Industrial Heat',
    class: 'industrial-heat-theme',
    colors: {
      primary: '#FF4500',     // Orange Red
      secondary: '#32CD32',   // Lime Green
      background: '#1C1C1C',  // Dark Grey
      text: '#FFFFFF',        // Pure White
    },
  },
  {
    id: 'arctic-pulse',
    name: 'Arctic Pulse',
    class: 'arctic-pulse-theme',
    colors: {
      primary: '#00FFFF',     // Pure Cyan
      secondary: '#FF69B4',   // Hot Pink
      background: '#F0F0F0',  // Light Grey
      text: '#000000',        // Pure Black
    },
  },
];

export const defaultTheme = 'electric-surge';