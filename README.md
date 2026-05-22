# Portafolio — Santiago Cano Flórez

Sitio personal con experiencia 3D inmersiva. Soy tecnólogo en desarrollo
de software especializado en **automatización de procesos con IA y
Python**. Vivo en Medellín, Colombia.

Convierto tareas repetitivas y flujos complejos en sistemas que corren
solos — pipelines ETL, APIs robustas y dashboards de datos.

**Live:** <https://portafolio-santy-canodev22.vercel.app>

---

## Stack

| Capa | Tecnologías |
| --- | --- |
| Frontend | Vue 3 (`<script setup>` + Composition API), TypeScript, SCSS |
| Build | Vite, `vue-tsc`, `vite-plugin-glsl` |
| 3D | three.js, GLSL shaders custom, GLB models |
| Animaciones | GSAP (timelines + ScrollTrigger), Lenis (smooth scroll) |
| Audio | Howler (sprites generados con `audiosprite`) |
| i18n | Sistema propio basado en `import.meta.glob`, ES/EN |
| Deploy | Vercel (static SPA + clean URLs) |

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Dev server en `http://localhost:3001` |
| `npm run build` | `vue-tsc` strict + bundle de producción a `dist/` |
| `npm run preview` | Sirve el `dist/` local |
| `npm run typecheck` | Solo type-check sin emitir |
| `npm run format` | Prettier sobre `src/` |

## Arquitectura

```
src/
├── main.ts                  # Entry — monta App.vue
├── App.vue                  # Root, decide Home vs Project
├── animations/              # GSAP timelines + transitions por sección
│   ├── transitions/         #   about, contact, projects
│   └── utils/               #   matchMedia helpers
├── assets/                  # Fonts, imágenes, sonidos, modelos, music
│   └── styles/              #   SCSS globals + mixins compartidos
├── components/              # Componentes UI atómicos reutilizables
│   └── icons/               #   SVGs como SFCs
├── composables/             # Lógica reactiva (preloader, sounds, etc.)
├── content/                 # Single source of truth de copy + assets
│   ├── projects/            #   un .ts por proyecto, ES + EN
│   │   ├── en/              #     descripciones en inglés
│   │   ├── es/              #     descripciones en español
│   │   ├── previews/        #     listado para grid de proyectos
│   │   └── index.ts         #     projectIds (orden + slugs)
│   ├── social.ts            #   links de redes
│   └── types.ts             #   ProjectContent, ProjectPreview, etc.
├── features/                # Módulos verticales por dominio
│   ├── home/                #   Hero, About, Projects, Contact
│   ├── projects/            #   Hero, Content, NextProject…
│   └── sounds/              #   Howler + definiciones de sprites
├── i18n/                    # Locale store + messages namespaces
│   └── messages/namespaces/common/{en,es}.json
├── three/                   # WebGL scene
│   ├── objects/avatar/      #   Avatar GLB + materiales custom
│   ├── scenes/              #   Setup three.js scene + camera + lights
│   ├── shaders/             #   GLSL frag/vert organizados por mesh
│   │   ├── avatar-face/     #     atlas de sprites 4×4 para expresiones
│   │   ├── avatar-head/     #     tinting de cabello por luminancia
│   │   └── avatar-matcap/   #     matcap shading + uniforms de tint
│   └── utils/               #   loaders, helpers
├── types/                   # Tipos globales TS
└── utils/                   # Sizes, breakpoints, features flags
```

### Decisiones clave

- **Content as code:** cada proyecto es un `.ts` tipado en
  `src/content/projects/{en,es}/<slug>.ts`. No hay CMS — el copy vive
  versionado junto al render.
- **Features flags:** `src/utils/features.ts` permite alternar bloques
  no críticos (`sounds`, `introWave`, `startProject`) sin tocar el
  render.
- **Avatar customizado vía shaders:** el GLB es genérico pero los
  fragment shaders aplican máscaras de luminancia + tints
  (`uHairTint`, `uFeatureTint`, etc.) para personalizar piel, cabello,
  cejas sin re-exportar el modelo.
- **Sprites de audio:** `sounds/<contexto>/` produce sprites Howler
  con `audiosprite` — un único archivo + JSON de timings reduce
  HTTP calls.

## Contenido — dónde tocar qué

| Necesito cambiar… | Archivo |
| --- | --- |
| Proyecto destacado (corona) | `src/features/projects/components/PreviewCard.vue` (array `FEATURED_SLUGS`) |
| Texto de un proyecto | `src/content/projects/{en,es}/<slug>.ts` |
| Orden / agregar / quitar proyecto | `src/content/projects/index.ts` (`projectIds`) + `previews/{en,es}.ts` |
| Tags y colores | `src/components/tagVariants.ts` |
| Strings de UI | `src/i18n/messages/namespaces/common/{en,es}.json` |
| Skills / Habilidades | `src/features/home/components/BoxServices.vue` (`SERVICES_ES` / `SERVICES_EN`) |
| Email / GitHub / LinkedIn | `src/content/social.ts` |
| Color del avatar | `src/three/objects/avatar/index.ts` (`TINTS`) + shaders |
| Páginas legales | `public/{,es/}{legal,privacy}.html` |
| Meta / OG / favicon | `index.html` + `public/meta/` |

## Scripts de automatización (`scripts/`)

| Script | Para qué |
| --- | --- |
| `screenshot-project.mjs <url> <outDir> <slug>` | Captura screenshots de una URL con Puppeteer + Sharp → WebP |
| `screenshot-diane.mjs` | Screenshots específicos para Dashboard DIAN (local Vite dev) |
| `trim-videos.mjs` | Recorta + recomprime videos en `public/videos/` con ffmpeg-static |
| `generate-placeholder.mjs` | Genera WebPs placeholder para slots vacíos |

## Deploy

Vercel auto-deploys desde `master` en GitHub. Config en `vercel.json`:
`cleanUrls: true` mapea `/es/legal` → `/es/legal.html`.

Tag `v1-react-archive` apunta al portafolio React anterior por si toca
hacer rollback.

## Licencia

Código bajo licencia MIT — ver `LICENSE`.

Stack 3D base derivado del template open-source de
[davidhckh/portfolio-2025](https://github.com/davidhckh/portfolio-2025-2025).
Contenido, branding, proyectos, shaders custom, integración i18n
ES/EN, scripts de automatización y todo el copy son míos.
