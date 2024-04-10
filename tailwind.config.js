/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero_bg.png')",
        'help-pattern': "url('/images/image_2.png')",
        'upgrade-protection-pattern': "url('/images/image_1.png')",
        'summary-pattern': "url('/images/frame.png')",
      },
    },
  },
  plugins: [],
};
