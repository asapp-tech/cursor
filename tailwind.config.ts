import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#001845",
        jade: "#7AE582",
        mint: "#E7F8F1",
        platinum: "#F4F4F6"
      },
      boxShadow: {
        panel: "0 12px 40px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
