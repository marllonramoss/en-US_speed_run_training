import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-1-black": "#09090b",
        "bg-2-lightBlack": "#18181b",
        "window-1-black": "#0A0A0A", // Transparencia 5 50%
        "window-2-lightBlack": "#27272A",
        "button-1-blue": "#1d4ed8",
        "button-1-blue-hover": "#2563eb", // Versão mais clara do azul
        "button-2-green": "#22c55e",
        "button-2-green-hover": "#4ade80", // Versão mais clara do verde
        "button-3-red": "#EF4444",
        "button-3-red-hover": "#f87171", // Versão mais clara do vermelho
        "button-4-black": "#27272A",
        "button-4-black-hover": "#3f3f46", // Versão mais clara do preto
        "border-1-gray": "#a1a1aa", // Transparencia 10%
        "text-1-iceWhite": "#f5f5f5",
        "logo-red": "#EF4444",
      },
    },
  },
  plugins: [],
} satisfies Config;
