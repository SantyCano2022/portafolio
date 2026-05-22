import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Generate placeholder WebPs for projects without screenshottable UI.
 * Usage:
 *   node scripts/generate-placeholder.mjs <slug> <title> <subtitle>
 */
const [, , slug, title, subtitle] = process.argv;
if (!slug || !title) {
  console.error("Usage: node generate-placeholder.mjs <slug> <title> <subtitle>");
  process.exit(1);
}

const outDir = path.resolve(__dirname, "..", "src/assets/images/projects", slug);
fs.mkdirSync(outDir, { recursive: true });

const scenes = [
  { w: 1440, h: 900, bg1: "#0F172A", bg2: "#1E293B", accent: "#22C55E", label: "Desktop App" },
  { w: 1440, h: 900, bg1: "#0B1220", bg2: "#161E2E", accent: "#3B82F6", label: "System Tray" },
  { w: 1440, h: 900, bg1: "#101820", bg2: "#1B2330", accent: "#F59E0B", label: "Real-time monitoring" },
  { w: 414, h: 896, bg1: "#0F172A", bg2: "#1E293B", accent: "#22C55E", label: "Multi-view" },
];

function svgFor(scene, idx) {
  const isMobile = scene.w < 600;
  const titleSize = isMobile ? 56 : 96;
  const subSize = isMobile ? 22 : 32;
  const labelSize = isMobile ? 18 : 26;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${scene.w}" height="${scene.h}" viewBox="0 0 ${scene.w} ${scene.h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${scene.bg1}"/>
        <stop offset="100%" stop-color="${scene.bg2}"/>
      </linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${scene.accent}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${scene.accent}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <circle cx="${scene.w * 0.85}" cy="${scene.h * 0.2}" r="${scene.w * 0.3}" fill="url(#glow)"/>
    <circle cx="${scene.w * 0.1}" cy="${scene.h * 0.85}" r="${scene.w * 0.25}" fill="url(#glow)"/>

    <g font-family="'Inter', 'Segoe UI', system-ui, sans-serif" fill="#F8FAFC">
      <text x="${scene.w / 2}" y="${scene.h * 0.42}" font-size="${labelSize}" font-weight="500" text-anchor="middle" fill="${scene.accent}" letter-spacing="3">${scene.label.toUpperCase()}</text>
      <text x="${scene.w / 2}" y="${scene.h * 0.52}" font-size="${titleSize}" font-weight="800" text-anchor="middle" letter-spacing="-2">${title}</text>
      <text x="${scene.w / 2}" y="${scene.h * 0.58}" font-size="${subSize}" font-weight="400" text-anchor="middle" fill="#94A3B8">${subtitle ?? ""}</text>
    </g>

    <g stroke="${scene.accent}" stroke-opacity="0.3" stroke-width="2" fill="none">
      <rect x="${scene.w / 2 - 80}" y="${scene.h * 0.64}" width="160" height="48" rx="8"/>
    </g>
    <text x="${scene.w / 2}" y="${scene.h * 0.685}" font-family="'JetBrains Mono', monospace" font-size="${isMobile ? 14 : 18}" font-weight="500" text-anchor="middle" fill="${scene.accent}">${idx + 1} / ${scenes.length}</text>
  </svg>`;
}

for (let i = 0; i < scenes.length; i++) {
  const scene = scenes[i];
  const svg = svgFor(scene, i);
  const out = path.join(outDir, `${slug}-${i}.webp`);
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(out);
  console.log(`  → ${out}`);
}
console.log(`[${slug}] DONE`);
