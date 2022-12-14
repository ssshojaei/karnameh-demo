const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/data/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "DEFAULT": "1rem",
        "sm": "0.5rem",
        "lg": "1rem",
        "xl": "2rem",
        "2xl": "2.5rem",
      },
    },
    borderRadius: {
      "none": "0",
      "DEFAULT": "0.25rem",
      "sm": "0.125rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
      "4xl": "1.5rem",
      "5xl": "1.75rem",
      "6xl": "2rem",
      "full": "100vmax",
    },
    extend: {
      transitionDuration: {
        DEFAULT: "250ms",
      },
      fontFamily: {
        sans: ["var(--font-iranYekan)", ...fontFamily.sans],
      },
      fontWeight: {
        bold: 700,
      },
    },
    colors: {
      ...colors,
      green: {
        ...colors.green,
        DEFAULT: "#27AE60",
      },
      naturals: {
        ...colors.neutral,
        900: "#222222",
      },
      gray: {
        ...colors.gray,
        DEFAULT: "#454545",
        lightest: "#F9F9F9",
        dark: "#777777",
        light: "#9CAEBB",
      },
    },
  },
};
