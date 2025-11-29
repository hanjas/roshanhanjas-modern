// Theme Configuration
// Easily switch themes by changing the activeTheme variable

export const themes = {
  crimsonMatrix: {
    name: 'Crimson Matrix',
    colors: {
      primary: '#ef4444',           // Bright red
      secondary: '#f97316',         // Orange
      accent: '#fb923c',            // Coral
      bgDark: '#120505',            // Deep red-black
      bgDarker: '#0a0202',          // Darker red-black
      bgLight: '#1f0808',           // Lighter red-black
      textPrimary: '#fef2f2',       // Soft white
      textSecondary: '#fca5a5',     // Light red
      gridColor: 'rgba(239, 68, 68, 0.08)', // Red grid
    }
  },

  neonCircuit: {
    name: 'Neon Circuit',
    colors: {
      primary: '#00f0ff',           // Bright cyan
      secondary: '#00ff41',         // Matrix green
      accent: '#ff6b35',            // Coral orange
      bgDark: '#0a0e1a',            // Deep navy-black
      bgDarker: '#050810',          // Darker navy
      bgLight: '#131b2e',           // Lighter navy
      textPrimary: '#e0f7fa',       // Ice blue-white
      textSecondary: '#8a95a8',     // Gray
      gridColor: 'rgba(0, 240, 255, 0.08)', // Cyan grid
    }
  },

  oceanDepths: {
    name: 'Ocean Depths',
    colors: {
      primary: '#0ea5e9',           // Sky blue
      secondary: '#06b6d4',         // Bright cyan
      accent: '#14b8a6',            // Teal
      bgDark: '#020617',            // Deep ocean black
      bgDarker: '#010308',          // Darker ocean
      bgLight: '#0c1838',           // Lighter ocean
      textPrimary: '#f0f9ff',       // Bright white
      textSecondary: '#94a3b8',     // Slate
      gridColor: 'rgba(14, 165, 233, 0.08)', // Blue grid
    }
  },

  radioactiveGreen: {
    name: 'Radioactive Green',
    colors: {
      primary: '#84cc16',           // Lime green
      secondary: '#22d3ee',         // Cyan
      accent: '#fde047',            // Yellow
      bgDark: '#0d1117',            // Deep black
      bgDarker: '#060809',          // Darker black
      bgLight: '#1a1f26',           // Lighter black
      textPrimary: '#f7fee7',       // Soft yellow-white
      textSecondary: '#a3e635',     // Bright lime
      gridColor: 'rgba(132, 204, 22, 0.08)', // Green grid
    }
  },

  goldRush: {
    name: 'Gold Rush',
    colors: {
      primary: '#fbbf24',           // Gold
      secondary: '#f59e0b',         // Amber
      accent: '#fb923c',            // Orange
      bgDark: '#18181b',            // Charcoal
      bgDarker: '#0a0a0b',          // Darker charcoal
      bgLight: '#27272a',           // Lighter charcoal
      textPrimary: '#fffbeb',       // Warm cream
      textSecondary: '#fcd34d',     // Light gold
      gridColor: 'rgba(251, 191, 36, 0.08)', // Gold grid
    }
  },
};

// Change this to switch themes
export const activeTheme = themes.neonCircuit;

// Apply theme to CSS variables
export const applyTheme = (theme) => {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', theme.colors.primary);
  root.style.setProperty('--secondary-color', theme.colors.secondary);
  root.style.setProperty('--accent-color', theme.colors.accent);
  root.style.setProperty('--bg-dark', theme.colors.bgDark);
  root.style.setProperty('--bg-darker', theme.colors.bgDarker);
  root.style.setProperty('--bg-light', theme.colors.bgLight);
  root.style.setProperty('--text-primary', theme.colors.textPrimary);
  root.style.setProperty('--text-secondary', theme.colors.textSecondary);
  root.style.setProperty('--grid-color', theme.colors.gridColor);
};
