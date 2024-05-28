import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          margin: "auto",

          "@screen xl": {
            paddingLeft: "7rem",
            paddingRight: "7rem",
            maxWidth: "1440px",
            margin: "auto",
          },
          "@screen 2xl": {
            // paddingLeft: "7rem",
            // paddingRight: "7rem",
            maxWidth: "1536px",
            margin: "auto",
          },
        },
      })
    },
  ],
};
export default config;
