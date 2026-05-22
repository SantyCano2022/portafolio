import type { ProjectContent } from "../../types";

export default {
  title: "Dashboard Tributario DIAN",
  theme: "dark",
  tags: ["react", "vite", "tailwind", "recharts", "vitest", "pwa", "framermotion"],
  videoBorder: true,
  source: "https://github.com/SantyCano2022/dashboard-diane",
  description:
    "App tributaria para contadores y PYMEs colombianas que automatiza el cálculo de impuestos DIAN — <strong>IVA, Retefuente, ReteICA, ReteIVA</strong> — y genera Formularios 300 y 350 en PDF pre-diligenciados. Importa Excel y XML UBL 2.1 (factura electrónica oficial DIAN).<br/><br/>Motor tributario con tarifas oficiales 2025 (UVT $49,799), distinción ventas/compras/notas crédito para saldo IVA real, régimen común y simplificado. Multi-tenant: cada contador maneja varias empresas con datos aislados. Detección automática de duplicados, auto-sugerencia de actividad desde el concepto, validador NIT módulo 11 oficial.<br/><br/>UX pulido: Command Palette (Cmd+K), atajos de teclado globales, onboarding tour, modo presentación, modo oscuro persistente. PWA instalable + funciona offline. 94 tests pasando con Vitest. Sin backend — todo corre en navegador con localStorage.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/dashboard-diane.mp4",
        alt: "Demo en vivo del Dashboard Tributario DIAN",
        caption: "Demo en vivo — dashboard tributario completo",
      },
    },
  ],
} as const satisfies ProjectContent;
