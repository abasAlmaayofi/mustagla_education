/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern": "url('/pattern.png')",
        "background-kuwait-university": "url('/kuwait-university-1.jpg')",
        mostaqilla: "url('/mostaqilla-removed-bg.png')",
        "mostaqilla-stripped": "url('/mostaqilla-stripped.png')",
        "background-welcome": "url('/Welcome.jpg')",
        "background-welcome2": "url('/Welcome2.jpeg')",
        WelcomeBackground: "url('/WelcomeBackground.jpg')",
        ScreenLogo: "url('/ScreenLogo.jpg')",
      },
    },
  },
  plugins: [],
};
