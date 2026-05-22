import type { ProjectContent } from "../../types";

export default {
  title: "Price Scraper — Alkosto",
  theme: "dark",
  tags: ["python", "streamlit", "pandas", "apscheduler", "docker"],
  videoBorder: true,
  live: "https://price-scraper-for-alkosto.streamlit.app/",
  source: "https://github.com/SantyCano2022/price-scraper",
  description:
    "Pipeline automatizado de precios para Alkosto Colombia. Scraper consulta la API interna de Algolia (no HTML), normaliza productos en Pandas, exporta a CSV y muestra todo en un dashboard Streamlit interactivo.<br/><br/>Scheduler con APScheduler verifica cada N horas (configurable) y dispara alertas por Gmail SMTP cuando un producto cae por debajo del descuento mínimo configurado. Empaquetado en Docker + docker-compose para deploy reproducible — vive en Streamlit Cloud. Tests con pytest, variables vía python-dotenv, commits convencionales.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/price-scraper.mp4",
        alt: "Demo en vivo del Price Scraper",
        caption: "Demo en vivo — scraper y dashboard Streamlit",
      },
    },
  ],
} as const satisfies ProjectContent;
