/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern": "url('/pattern.png')",
        "background-kuwait-university": "url('/kuwait-university-1.png')",
        mostaqilla: "url('/mostaqilla-removed-bg.png')",
        "mostaqilla-stripped": "url('/mostaqilla-stripped.png')",
      },
    },
  },
  plugins: [],
};
