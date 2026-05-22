import type { ProjectContent } from "../../types";

export default {
  title: "DIAN Tax Dashboard",
  theme: "dark",
  tags: ["react", "vite", "tailwind", "recharts", "vitest", "pwa", "framermotion"],
  videoBorder: true,
  source: "https://github.com/SantyCano2022/dashboard-diane",
  description:
    "Tax app for Colombian accountants and SMBs that automates DIAN tax calculations — <strong>VAT, withholdings, ReteICA, ReteIVA</strong> — and generates pre-filled Forms 300 and 350 as PDFs. Imports Excel and UBL 2.1 XML (official DIAN electronic invoice).<br/><br/>Tax engine with official 2025 rates (UVT $49,799 COP), sales/purchases/credit notes distinction for real VAT balance, supports common and simplified regimes. Multi-tenant: one accountant manages multiple companies with isolated data. Automatic duplicate detection, smart activity suggestions from concept, official module-11 NIT validator.<br/><br/>Polished UX: Command Palette (Cmd+K), global keyboard shortcuts, onboarding tour, presentation mode, persistent dark mode. Installable PWA + works offline. 94 Vitest tests passing. No backend — runs entirely in-browser with localStorage.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/dashboard-diane.mp4",
        alt: "Live demo of the DIAN Tax Dashboard",
        caption: "Live demo — full tax dashboard in action",
      },
    },
  ],
} as const satisfies ProjectContent;
