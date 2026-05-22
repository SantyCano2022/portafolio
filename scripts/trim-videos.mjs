import ffmpegPath from "ffmpeg-static";
import { spawnSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VIDEOS_DIR = path.resolve(__dirname, "..", "public", "videos");
const TMP_DIR = path.resolve(__dirname, "..", ".tmp-videos");

fs.mkdirSync(TMP_DIR, { recursive: true });

const SETTINGS = {
  // duration cap in seconds, crf quality (lower = better, 23-30 sane range), scale longest side
  "crypto-dashboard.mp4": { duration: 25, crf: 28, scale: 1280 },
  "dashboard-diane.mp4": { duration: 25, crf: 28, scale: 1280 },
  "price-scraper.mp4": { duration: 25, crf: 28, scale: 1280 },
  "file-organizer.mp4": { duration: 25, crf: 28, scale: 1280 },
};

const ffmpeg = ffmpegPath;
if (!ffmpeg) {
  console.error("ffmpeg-static did not resolve a binary path.");
  process.exit(1);
}

for (const [file, opts] of Object.entries(SETTINGS)) {
  const input = path.join(VIDEOS_DIR, file);
  if (!fs.existsSync(input)) {
    console.warn(`SKIP missing ${file}`);
    continue;
  }
  const tmpOut = path.join(TMP_DIR, file);
  const beforeSize = fs.statSync(input).size;

  const args = [
    "-y",
    "-i", input,
    "-t", String(opts.duration),
    "-vf", `scale='min(${opts.scale},iw)':-2`,
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", String(opts.crf),
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    "-c:a", "aac",
    "-b:a", "96k",
    "-ac", "2",
    tmpOut,
  ];

  console.log(`\nTRIMMING ${file} (${(beforeSize / 1024 / 1024).toFixed(1)}MB)`);
  const res = spawnSync(ffmpeg, args, { stdio: "inherit" });
  if (res.status !== 0) {
    console.error(`FAILED ${file}`);
    continue;
  }
  const afterSize = fs.statSync(tmpOut).size;
  console.log(`  → ${(afterSize / 1024 / 1024).toFixed(1)}MB (was ${(beforeSize / 1024 / 1024).toFixed(1)}MB)`);

  fs.copyFileSync(tmpOut, input);
  fs.unlinkSync(tmpOut);
}

fs.rmSync(TMP_DIR, { recursive: true, force: true });
console.log("\nDONE — videos overwritten in public/videos/");
