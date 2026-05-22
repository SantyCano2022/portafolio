import type { ProjectContent } from "../../types";

export default {
  title: "Crypto Dashboard 2.0",
  theme: "dark",
  tags: ["python", "fastapi", "react", "tailwind", "sqlite", "apscheduler", "recharts"],
  videoBorder: true,
  live: "https://crypto-dashboard-2-0.vercel.app",
  source: "https://github.com/SantyCano2022/crypto-dashboard-2.0",
  description:
    "Dashboard de criptomonedas full-stack con pipeline ETL automático. Backend FastAPI consulta CoinGecko cada 3 minutos (50 monedas top), persiste en SQLite y expone API REST. Frontend React/Vite/Tailwind con Recharts y polling automático.<br/><br/>Cuatro vistas: Markets (rankings + gainers/losers), Detail (charts por moneda con historial 7/30/90 días), Compare (line chart normalizado multi-coin) y Alerts (CRUD con verificación al cruzar precio). Deploy split: Vercel para frontend, Render para backend + scheduler. Diseño inspirado en Binance: dark fintech con gradientes verde/rojo según movimiento.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/crypto-dashboard.mp4",
        alt: "Demo en vivo del Crypto Dashboard",
        caption: "Demo en vivo — dashboard completo en funcionamiento",
      },
    },
  ],
} as const satisfies ProjectContent;
