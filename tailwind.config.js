/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-bg": "#0B0612",
        "card-primary": "#1A1228",
        "card-secondary": "#24183A",
        "text-primary": "#F8F7FF",
        "text-body": "#D8D3EA",
        "text-muted": "#B6ACD6",
        "accent-primary": "#7C5ACF",
        "accent-soft": "#9A7BC4",
        "border-divider": "rgba(124, 90, 207, 0.35)",
        "button-start": "#7C5ACF",
        "button-end": "#6D4C9A",
        "ring-track": "#2A1E44",
        gitpeek: {
          ring: "#08040D",
          low: "#E25555",
          avg: "#E0B84F",
          high: "#4ADE80",
        },
      },
    },
  },
  plugins: [],
}
