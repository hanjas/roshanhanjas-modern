# Theme Customization Guide

## How to Change Themes

All theme colors are centralized in `src/themes.js`. You can easily switch between themes or create new ones.

### Quick Theme Switch

Open `src/themes.js` and change the `activeTheme` variable:

```javascript
// Change from:
export const activeTheme = themes.crimsonMatrix;

// To any other theme:
export const activeTheme = themes.neonCircuit;
export const activeTheme = themes.oceanDepths;
export const activeTheme = themes.radioactiveGreen;
export const activeTheme = themes.goldRush;
```

### Available Themes

1. **Crimson Matrix** (Current)
   - Red, Orange, Coral
   - Intense, powerful, alert

2. **Neon Circuit**
   - Cyan, Matrix Green, Coral Orange
   - Tech, vibrant, high-energy

3. **Ocean Depths**
   - Sky Blue, Cyan, Teal
   - Deep, mysterious, calm

4. **Radioactive Green**
   - Lime Green, Cyan, Yellow
   - Sci-fi, energetic, radioactive

5. **Gold Rush**
   - Gold, Amber, Orange
   - Luxury, premium, sophisticated

### Create a New Theme

Add a new theme object in the `themes` object:

```javascript
export const themes = {
  // ... existing themes ...

  myCustomTheme: {
    name: 'My Custom Theme',
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
      accent: '#YOUR_COLOR',
      bgDark: '#YOUR_COLOR',
      bgDarker: '#YOUR_COLOR',
      bgLight: '#YOUR_COLOR',
      textPrimary: '#YOUR_COLOR',
      textSecondary: '#YOUR_COLOR',
      gridColor: 'rgba(YOUR_RGB, 0.08)',
    }
  },
};

// Then activate it:
export const activeTheme = themes.myCustomTheme;
```

### Color Variables Explained

- **primary**: Main accent color (buttons, highlights, glows)
- **secondary**: Secondary accent (used with primary for variety)
- **accent**: Additional accent (for special elements)
- **bgDark**: Main background color
- **bgDarker**: Darker variant for depth
- **bgLight**: Lighter variant for cards/sections
- **textPrimary**: Main text color
- **textSecondary**: Muted/secondary text
- **gridColor**: Grid overlay color (use rgba with low opacity)

### No Code Restart Needed

After changing `activeTheme` in `themes.js`, just **refresh your browser**. The new theme will apply automatically!

---

## Current Theme: Crimson Matrix 🔴

A bold, intense theme with red and orange tones perfect for making a powerful statement.
