import type { ProjectContent } from "../../types";

export default {
  title: "AI Job Hunter",
  theme: "dark",
  tags: ["n8n", "typescript", "python", "docker", "postgresql", "telegram", "groq"],
  videoBorder: true,
  source: "https://github.com/SantyCano2022/ai-job-hunter",
  description:
    "Autonomous assistant that hunts for remote dev jobs 24/7. Aggregates 7 sources (RemoteOK, Remotive, WeWorkRemotely, Jobicy, Torre.co + Colombia-local: GetOnBoard and Magneto), scores them against my real CV with <strong>Llama 3.3 70B (Groq)</strong>, scrapes company context from Wikipedia and writes a personalized cover letter — all before I'm out of bed.<br/><br/>Daily pipeline 8 AM Bogotá: ~230 listings in parallel, dedupe against a 60-day Postgres memory, regex filters (KEEP junior/mid, REJECT senior), 0–100 LLM scoring with a +15 Latam bonus. Telegram digest with top 5 matches and inline buttons (Cover / Apply / Skip). Automatic follow-up 7 days later for applied jobs with no response.<br/><br/>Bilingual bot: detects whether the offer is in ES or EN and writes the cover letter in the right language, with real company facts (no canned filler). Turborepo monorepo: n8n (orchestration) + Python ai-service + Next.js web + scrapers package. Full stack on Docker Compose in queue mode (parallel workers). <strong>Monthly cost: $0</strong> — every component on a free tier or local. 46 tests passing, CI on GitHub Actions.",
  components: [],
} as const satisfies ProjectContent;
