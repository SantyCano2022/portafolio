import thumbnailDiane from "../../../assets/images/projects/dashboard-diane/dashboard-diane-0.webp";
import thumbnailCrypto from "../../../assets/images/projects/crypto-dashboard/crypto-dashboard-0.webp";
import thumbnailJobHunter from "../../../assets/images/projects/ai-job-hunter/ai-job-hunter-0.webp";
import thumbnailScraper from "../../../assets/images/projects/price-scraper/price-scraper-0.webp";
import thumbnailFile from "../../../assets/images/projects/file-organizer/file-organizer-0.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Dashboard Tributario DIAN",
    slug: "dashboard-diane",
    thumbnail: thumbnailDiane,
    description: "Motor tributario DIAN + Formularios 300/350 PDF + PWA",
  },
  {
    title: "Crypto Dashboard 2.0",
    slug: "crypto-dashboard",
    thumbnail: thumbnailCrypto,
    description: "Dashboard de criptomonedas en tiempo real con FastAPI + React",
  },
  {
    title: "AI Job Hunter",
    slug: "ai-job-hunter",
    thumbnail: thumbnailJobHunter,
    description: "Bot autónomo n8n + Llama 3.3 que caza ofertas y escribe cartas",
  },
  {
    title: "Price Scraper",
    slug: "price-scraper",
    thumbnail: thumbnailScraper,
    description: "Scraper de precios + dashboard Streamlit + alertas Gmail",
  },
  {
    title: "File Organizer",
    slug: "file-organizer",
    thumbnail: thumbnailFile,
    description: "Automatización de archivos Windows con GUI y bandeja",
  },
] as const satisfies ProjectPreview[];
