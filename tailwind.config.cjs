/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        TMBlue: "#000427",
        TMPurple: "#0C0027",
        "supa-green": "#46CF8E",
        "supa-white": "#F0F0F0",
      },
      animation: {
        rainbow: "rainbow-road 100000s infinite",
      },
      keyframes: {
        "rainbow-road": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "2147483647vw 0%",
          },
        },
      },
    },
  },
  plugins: [],
};
