import type { ProjectContent } from "../../types";

export default {
  title: "Price Scraper — Alkosto",
  theme: "dark",
  tags: ["python", "streamlit", "pandas", "apscheduler", "docker"],
  videoBorder: true,
  live: "https://price-scraper-for-alkosto.streamlit.app/",
  source: "https://github.com/SantyCano2022/price-scraper",
  description:
    "Automated price pipeline for Alkosto Colombia. The scraper hits Algolia's internal API (no HTML scraping), normalizes products with Pandas, exports to CSV and surfaces everything in an interactive Streamlit dashboard.<br/><br/>APScheduler checks every N hours (configurable) and fires Gmail SMTP alerts when a product drops below the configured discount threshold. Packaged with Docker + docker-compose for reproducible deploys — lives on Streamlit Cloud. Tested with pytest, env vars via python-dotenv, conventional commits.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/price-scraper.mp4",
        alt: "Live demo of the Price Scraper",
        caption: "Live demo — scraper + Streamlit dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
