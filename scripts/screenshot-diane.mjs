import puppeteer from "puppeteer";
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE = process.argv[2] ?? "http://localhost:5173";
const outDir = path.resolve(__dirname, "..", "src/assets/images/projects/dashboard-diane");
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  protocolTimeout: 60000,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

async function shoot(page, name) {
  try {
    const png = await page.screenshot({ type: "png", timeout: 30000 });
    const out = path.join(outDir, `dashboard-diane-${name}.webp`);
    await sharp(png).webp({ quality: 85 }).toFile(out);
    console.log(`  → ${out}`);
  } catch (err) {
    console.error(`shoot ${name} FAILED:`, err.message);
  }
}

try {
  const page = await browser.newPage();
  page.on("pageerror", (err) => console.warn("[page error]", err.message));

  // 1. Landing page (public)
  await page.setViewport({ width: 1440, height: 900 });
  console.log("[diane] landing");
  await page.goto(`${BASE}/`, { waitUntil: "domcontentloaded", timeout: 30000 }).catch((e) => console.warn(e.message));
  await new Promise((r) => setTimeout(r, 4000));
  await shoot(page, "0");

  // 2. Login then dashboard
  console.log("[diane] login");
  await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded", timeout: 30000 }).catch((e) => console.warn(e.message));
  await new Promise((r) => setTimeout(r, 2500));

  // Fill credentials — try common selectors
  try {
    await page.evaluate(() => {
      const inputs = document.querySelectorAll('input');
      let emailInput = null;
      let pwInput = null;
      inputs.forEach(inp => {
        if (inp.type === 'email' || inp.name === 'email' || inp.placeholder?.toLowerCase().includes('email') || inp.placeholder?.toLowerCase().includes('correo')) emailInput = inp;
        if (inp.type === 'password' || inp.name === 'password' || inp.placeholder?.toLowerCase().includes('contrase')) pwInput = inp;
      });
      if (emailInput) {
        emailInput.value = 'demo@dian.co';
        emailInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
      if (pwInput) {
        pwInput.value = 'demo1234';
        pwInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
    await new Promise((r) => setTimeout(r, 500));
    // Submit
    await page.evaluate(() => {
      const form = document.querySelector('form');
      if (form) form.requestSubmit();
      else {
        const btn = Array.from(document.querySelectorAll('button')).find(b => /ingres|login|entrar/i.test(b.textContent || ''));
        btn?.click();
      }
    });
    await new Promise((r) => setTimeout(r, 4000));
  } catch (err) {
    console.warn("login failed:", err.message);
  }

  // 3. Dashboard (post-login)
  await page.goto(`${BASE}/app`, { waitUntil: "domcontentloaded", timeout: 30000 }).catch((e) => console.warn(e.message));
  await new Promise((r) => setTimeout(r, 4000));
  await shoot(page, "1");

  // 4. Invoices
  await page.goto(`${BASE}/app/invoices`, { waitUntil: "domcontentloaded", timeout: 30000 }).catch((e) => console.warn(e.message));
  await new Promise((r) => setTimeout(r, 4000));
  await shoot(page, "2");

  // 5. Mobile landing
  const mpage = await browser.newPage();
  await mpage.setViewport({ width: 414, height: 896 });
  console.log("[diane] mobile landing");
  await mpage.goto(`${BASE}/`, { waitUntil: "domcontentloaded", timeout: 30000 }).catch((e) => console.warn(e.message));
  await new Promise((r) => setTimeout(r, 4000));
  await shoot(mpage, "3");
} finally {
  await browser.close();
}
console.log("[diane] DONE");
