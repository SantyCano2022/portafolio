import thumbnailDiane from "../../../assets/images/projects/dashboard-diane/dashboard-diane-0.webp";
import thumbnailCrypto from "../../../assets/images/projects/crypto-dashboard/crypto-dashboard-0.webp";
import thumbnailScraper from "../../../assets/images/projects/price-scraper/price-scraper-0.webp";
import thumbnailFile from "../../../assets/images/projects/file-organizer/file-organizer-0.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "DIAN Tax Dashboard",
    slug: "dashboard-diane",
    thumbnail: thumbnailDiane,
    description: "DIAN tax engine + 300/350 PDF forms + PWA",
  },
  {
    title: "Crypto Dashboard 2.0",
    slug: "crypto-dashboard",
    thumbnail: thumbnailCrypto,
    description: "Real-time crypto dashboard with FastAPI + React",
  },
  {
    title: "Price Scraper",
    slug: "price-scraper",
    thumbnail: thumbnailScraper,
    description: "Price scraper + Streamlit dashboard + Gmail alerts",
  },
  {
    title: "File Organizer",
    slug: "file-organizer",
    thumbnail: thumbnailFile,
    description: "Windows file automation with GUI and tray",
  },
] as const satisfies ProjectPreview[];
