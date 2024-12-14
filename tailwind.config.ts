import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0f1a',
        secondary: '#1a1f2e',
        accent: '#3b82f6',
        cyber: {
          blue: '#0ea5e9',
          purple: '#8b5cf6',
          green: '#10b981',
          red: '#ef4444',
          yellow: '#f59e0b',
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;