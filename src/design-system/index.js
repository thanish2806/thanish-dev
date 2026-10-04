/**
 * Obsidian Photon Design System
 * Programmatic JavaScript Token Export
 */

export const colors = {
  brand: {
    cobalt: '#0016F9',
    violet: '#6D28D9',
    crimson: '#D10D04',
    gradient: 'linear-gradient(135deg, #0016F9 0%, #6D28D9 52%, #D10D04 100%)',
    gradientSubtleDark: 'linear-gradient(135deg, rgba(0, 22, 249, 0.16) 0%, rgba(109, 40, 217, 0.14) 50%, rgba(209, 13, 4, 0.16) 100%)',
    gradientSubtleLight: 'linear-gradient(135deg, rgba(0, 22, 249, 0.08) 0%, rgba(109, 40, 217, 0.08) 50%, rgba(209, 13, 4, 0.08) 100%)'
  },
  dark: {
    canvas: '#0B0C10',
    elevated: '#14161F',
    card: '#1C1D25',
    cardHover: '#232530',
    glass: 'rgba(20, 22, 31, 0.78)',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    accentBlue: '#0016F9',
    accentBlueBright: '#3B82F6',
    accentCrimson: '#D10D04',
    accentCrimsonBright: '#EF4444'
  },
  light: {
    canvas: '#F8FAFC',
    elevated: '#F1F5F9',
    card: '#FFFFFF',
    cardHover: '#F8FAFC',
    glass: 'rgba(255, 255, 255, 0.85)',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#64748B',
    borderSubtle: 'rgba(15, 23, 42, 0.09)',
    borderStrong: 'rgba(15, 23, 42, 0.18)',
    accentBlue: '#0016F9',
    accentBlueBright: '#2563EB',
    accentCrimson: '#D10D04',
    accentCrimsonBright: '#DC2626'
  },
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#22D3EE'
  }
};

export const typography = {
  fonts: {
    display: "'Syne', 'League Spartan', sans-serif",
    body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', monospace"
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  scale: {
    hero: '3.5rem',
    h1: '2.25rem',
    h2: '1.75rem',
    h3: '1.25rem',
    bodyLg: '1.0625rem',
    body: '0.9375rem',
    bodySm: '0.8125rem',
    caption: '0.75rem'
  }
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1.0rem',
  lg: '1.5rem',
  xl: '2.5rem',
  '2xl': '4.0rem'
};

export const radii = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px'
};

export const transitions = {
  snappy: '160ms cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: '350ms cubic-bezier(0.16, 1, 0.3, 1)'
};

export default {
  colors,
  typography,
  spacing,
  radii,
  transitions
};
