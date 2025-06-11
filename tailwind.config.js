/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1E3A8A', // Deep scientific authority - blue-800
        'primary-50': '#EFF6FF', // Light blue background - blue-50
        'primary-100': '#DBEAFE', // Light blue surface - blue-100
        'primary-500': '#3B82F6', // Medium blue accent - blue-500
        'primary-600': '#2563EB', // Strong blue interactive - blue-600
        'primary-700': '#1D4ED8', // Dark blue hover - blue-700
        
        // Secondary Colors
        'secondary': '#0F766E', // Analytical precision - teal-700
        'secondary-50': '#F0FDFA', // Light teal background - teal-50
        'secondary-100': '#CCFBF1', // Light teal surface - teal-100
        'secondary-500': '#14B8A6', // Medium teal accent - teal-500
        'secondary-600': '#0D9488', // Strong teal interactive - teal-600
        
        // Accent Colors
        'accent': '#F59E0B', // Molecular highlights - amber-500
        'accent-50': '#FFFBEB', // Light amber background - amber-50
        'accent-100': '#FEF3C7', // Light amber surface - amber-100
        'accent-600': '#D97706', // Strong amber interactive - amber-600
        'accent-700': '#B45309', // Dark amber hover - amber-700
        
        // Background Colors
        'background': '#FEFEFE', // Clean laboratory canvas - white
        'surface': '#F8FAFC', // Subtle data organization - slate-50
        'surface-100': '#F1F5F9', // Light surface variation - slate-100
        'surface-200': '#E2E8F0', // Medium surface variation - slate-200
        
        // Text Colors
        'text-primary': '#1F2937', // Extended reading comfort - gray-800
        'text-secondary': '#6B7280', // Clear information hierarchy - gray-500
        'text-tertiary': '#9CA3AF', // Supporting detail guidance - gray-400
        
        // Status Colors
        'success': '#059669', // Positive prediction confirmation - emerald-600
        'success-50': '#ECFDF5', // Light success background - emerald-50
        'success-100': '#D1FAE5', // Light success surface - emerald-100
        
        'warning': '#D97706', // Attention without alarm - amber-600
        'warning-50': '#FFFBEB', // Light warning background - amber-50
        'warning-100': '#FEF3C7', // Light warning surface - amber-100
        
        'error': '#DC2626', // Clear problem identification - red-600
        'error-50': '#FEF2F2', // Light error background - red-50
        'error-100': '#FEE2E2', // Light error surface - red-100
        
        // Border Colors
        'border': '#E5E7EB', // Clean data separation - gray-200
        'border-light': '#F3F4F6', // Subtle separation - gray-100
        'border-dark': '#D1D5DB', // Strong separation - gray-300
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'molecular': '6px',
      },
      boxShadow: {
        'molecular': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'molecular-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'scientific': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'molecular-rotate': 'molecular-rotate 20s linear infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
      keyframes: {
        'molecular-rotate': {
          '0%': { transform: 'rotate3d(1, 1, 0, 0deg)' },
          '100%': { transform: 'rotate3d(1, 1, 0, 360deg)' },
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'scientific': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}