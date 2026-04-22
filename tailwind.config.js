// tailwind.config.js - Tailwind CSS ↔ CSS Variables Mapping
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border-default)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "brand-primary": "var(--color-brand-primary)",
        "brand-secondary": "var(--color-brand-secondary)",
      },
      fontFamily: {
        base: ["var(--font-family-base)", "sans-serif"],
      },
      fontSize: {
        14: "var(--font-size-14)",
        16: "var(--font-size-16)",
        38: "var(--font-size-38)",
      },
      lineHeight: {
        20: "var(--line-height-20)",
        24: "var(--line-height-24)",
        38: "var(--line-height-38)",
      },
      spacing: {
        "2px": "var(--spacing-2)",
        "4px": "var(--spacing-4)",
        "6px": "var(--spacing-6)",
        "10px": "var(--spacing-10)",
        "12px": "var(--spacing-12)",
        "14px": "var(--spacing-14)",
        "16px": "var(--spacing-16)",
        "20px": "var(--spacing-20)",
        "32px": "var(--spacing-32)",
        "80px": "var(--spacing-80)",
        "260px": "var(--spacing-260)",
      },
      borderRadius: {
        4: "var(--radius-4)",
        12: "var(--radius-12)",
        16: "var(--radius-16)",
        full: "var(--radius-full)",
      },
    },
  },
  plugins: [],
};
