// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        red: {
          light: '#FF7F7F', // Light red
          DEFAULT: '#FF0000', // True red
          dark: '#990000', // Dark red
        },
        orange: {
          light: '#FFA64D', // Light orange
          DEFAULT: '#FF7F00', // True orange
          dark: '#994D00', // Dark orange
        },
        yellow: {
          light: '#FFFF99', // Light yellow
          DEFAULT: '#FFFF00', // True yellow
          dark: '#999900', // Dark yellow
        },
        green: {
          light: '#99FF99', // Light green
          DEFAULT: '#00FF00', // True green
          dark: '#009900', // Dark green
        },
        blue: {
          light: '#99CCFF', // Light blue
          DEFAULT: '#0000FF', // True blue
          dark: '#000099', // Dark blue
        },
        indigo: {
          light: '#CCCCFF', // Light indigo
          DEFAULT: '#4B0082', // True indigo
          dark: '#320062', // Dark indigo
        },
        violet: {
          light: '#E0B3FF', // Light violet
          DEFAULT: '#8B00FF', // True violet
          dark: '#4A007A', // Dark violet
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        black: {
          DEFAULT: '#000000',
        },
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '30%, 70%': { width: '100%' },
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      animation: {
        typing: 'typing 2s steps(30, end) infinite',
        blink: 'blink 1s step-end infinite',
        rotate: 'rotate-loader 1s linear infinite',
      },
      screens: {
        touch: { raw: 'only screen and (pointer: coarse)' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
