import type { ProjectContent } from "../../types";

export default {
  title: "AI Job Hunter",
  theme: "dark",
  tags: ["n8n", "typescript", "python", "docker", "postgresql", "telegram", "groq"],
  videoBorder: true,
  source: "https://github.com/SantyCano2022/ai-job-hunter",
  description:
    "Asistente autónomo que caza ofertas de desarrollo remoto 24/7. Agrega 7 fuentes (RemoteOK, Remotive, WeWorkRemotely, Jobicy, Torre.co + locales Colombia: GetOnBoard y Magneto), las puntúa contra mi CV real con <strong>Llama 3.3 70B (Groq)</strong>, investiga la empresa en Wikipedia y escribe la carta de presentación personalizada — todo antes de que me despierte.<br/><br/>Pipeline diaria 8 AM Bogotá: ~230 ofertas en paralelo, dedupe contra memoria Postgres de 60 días, filtros regex (KEEP junior/mid, REJECT senior), scoring 0–100 con +15 bonus Latam. Telegram digest con top 5 + botones inline (Carta / Ir a aplicar / Skip). Follow-up automático a los 7 días para ofertas aplicadas sin respuesta.<br/><br/>Bot bilingüe: detecta si la oferta está en ES o EN y escribe la carta en el idioma correcto, con datos reales de la empresa (no plantillas). Monorepo Turborepo: n8n (orchestration) + ai-service Python + web Next.js + scrapers package. Stack completo en Docker Compose con modo queue (workers paralelos). <strong>Costo mensual: $0</strong> — todo en free tier o local. 46 tests pasando, CI en GitHub Actions.",
  components: [],
} as const satisfies ProjectContent;
