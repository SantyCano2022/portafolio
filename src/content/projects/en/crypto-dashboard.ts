import type { ProjectContent } from "../../types";

export default {
  title: "Crypto Dashboard 2.0",
  theme: "dark",
  tags: ["python", "fastapi", "react", "tailwind", "sqlite", "apscheduler", "recharts"],
  videoBorder: true,
  live: "https://crypto-dashboard-2-0.vercel.app",
  source: "https://github.com/SantyCano2022/crypto-dashboard-2.0",
  description:
    "Full-stack crypto dashboard with automated ETL pipeline. FastAPI backend polls CoinGecko every 3 minutes (top 50 coins), persists in SQLite and exposes a REST API. React/Vite/Tailwind frontend with Recharts and automatic polling.<br/><br/>Four views: Markets (rankings + gainers/losers), Detail (per-coin charts with 7/30/90-day history), Compare (normalized multi-coin line chart) and Alerts (CRUD with cross-price checks). Split deploy: Vercel for frontend, Render for backend + scheduler. Binance-inspired design: dark fintech with green/red gradients tracking price movement.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/crypto-dashboard.mp4",
        alt: "Live demo of the Crypto Dashboard",
        caption: "Live demo — full dashboard in action",
      },
    },
  ],
} as const satisfies ProjectContent;
