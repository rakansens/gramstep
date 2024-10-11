module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0088cc',
        'primary-dark': '#0077b5',
        border: '#e5e7eb',
        background: '#ffffff',
        foreground: '#000000',
      },
    },
  },
  plugins: [],
}