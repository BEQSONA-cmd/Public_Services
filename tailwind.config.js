/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          foreground: "#111827",
          primary: "#3b82f6", 
          secondary: "#d1d5db",
        },
        dark: {
          background: "#111827", 
          foreground: "#f9fafb",
          primary: "#2563eb",
          secondary: "#4b5563",
        },
        background: "var(--background)", 
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
};