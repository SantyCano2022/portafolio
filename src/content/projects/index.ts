import type { Locale } from "../../i18n/types";

export const projectIds = [
  "dashboard-diane",
  "crypto-dashboard",
  "ai-job-hunter",
  "price-scraper",
  "file-organizer",
];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

export const projectModules = {
  es: simplifyModules(import.meta.glob("./es/*.ts", { eager: true })),
  en: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
} as const satisfies Record<Locale, Record<string, any>>;
