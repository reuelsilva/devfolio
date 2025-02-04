import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          '01': '#16181d',
          '02': '#0D0E11',
          '03': '#878EA1',
          '04': '#2ECF0E',
          '05': '#292C34',
        },
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      gridTemplateColumns: {
        'mobile': 'repeat(1, minmax(0, 430px))',
        'md': 'repeat(2, minmax(0, 342px))',
      },
      backgroundImage: {
        'home': "url('/background.png')",
        'home-md': "url('/background-md.png')",
      },
      keyframes: {
        'arrowUpAndDown': {
          '0%': { bottom: '16px' },
          '50%': { bottom: '32px' },
          '100%': { bottom: '16px' },
        },
      },
      animation: {
        'arrowUpAndDown': 'arrowUpAndDown 1.5s linear infinite'
      },
    },
  },
  plugins: [],
};

export default config;
