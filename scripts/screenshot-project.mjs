import puppeteer from "puppeteer";
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Usage:
 *   node scripts/screenshot-project.mjs <url> <outDir> <slug> [waitSelector]
 *
 * Strategy: navigate once at desktop viewport, capture multiple scroll
 * positions, then resize to mobile and capture again. Avoids re-goto
 * thrash that breaks Angular HMR.
 */
const [, , url, outDirArg, slug, waitSelector] = process.argv;

if (!url || !outDirArg || !slug) {
  console.error("Usage: node screenshot-project.mjs <url> <outDir> <slug> [waitSelector]");
  process.exit(1);
}

const outDir = path.resolve(__dirname, "..", outDirArg);
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  protocolTimeout: 60000,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

async function shoot(page, name, scroll) {
  try {
    if (scroll > 0) {
      await page.evaluate((s) => window.scrollTo(0, s), scroll);
      await new Promise((r) => setTimeout(r, 1200));
    }
    const png = await page.screenshot({ type: "png", timeout: 30000 });
    const out = path.join(outDir, `${slug}-${name}.webp`);
    await sharp(png).webp({ quality: 85 }).toFile(out);
    console.log(`  → ${out}`);
  } catch (err) {
    console.error(`[${slug}] ${name} FAILED:`, err.message);
  }
}

try {
  const page = await browser.newPage();
  page.on("pageerror", (err) => console.warn("[page error]", err.message));

  // Desktop pass
  await page.setViewport({ width: 1440, height: 900 });
  console.log(`[${slug}] navigating ${url} (desktop)`);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 }).catch((e) => {
    console.warn("goto warning:", e.message);
  });
  if (waitSelector) {
    await page.waitForSelector(waitSelector, { timeout: 5000 }).catch(() => {});
  }
  await new Promise((r) => setTimeout(r, 4000));

  await shoot(page, "0", 0);
  await shoot(page, "1", 800);
  await shoot(page, "2", 1600);

  // Mobile pass — new page to avoid HMR interference
  const mpage = await browser.newPage();
  await mpage.setViewport({ width: 414, height: 896 });
  console.log(`[${slug}] navigating ${url} (mobile)`);
  await mpage.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 }).catch((e) => {
    console.warn("goto warning (mobile):", e.message);
  });
  if (waitSelector) {
    await mpage.waitForSelector(waitSelector, { timeout: 5000 }).catch(() => {});
  }
  await new Promise((r) => setTimeout(r, 4000));
  await shoot(mpage, "3", 0);
} finally {
  await browser.close();
}

console.log(`[${slug}] DONE`);
