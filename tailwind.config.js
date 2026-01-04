/** @type {import('tailwindcss').Config} */
const withOpacity =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgb(var(${variable}) / ${opacityValue})`
      : `rgb(var(${variable}))`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-bg": withOpacity("--color-app-bg"),
        "card-primary": withOpacity("--color-card-primary"),
        "card-secondary": withOpacity("--color-card-secondary"),
        "text-primary": withOpacity("--color-text-primary"),
        "text-body": withOpacity("--color-text-body"),
        "text-muted": withOpacity("--color-text-muted"),
        "accent-primary": withOpacity("--color-accent-primary"),
        "accent-soft": withOpacity("--color-accent-soft"),
        "border-divider": withOpacity("--color-border-divider"),
        "button-start": withOpacity("--color-button-start"),
        "button-end": withOpacity("--color-button-end"),
        "ring-track": withOpacity("--color-ring-track"),
        gitpeek: {
          ring: withOpacity("--color-gitpeek-ring"),
          low: withOpacity("--color-gitpeek-low"),
          avg: withOpacity("--color-gitpeek-avg"),
          high: withOpacity("--color-gitpeek-high"),
        },
      },
    },
  },
  plugins: [],
};
