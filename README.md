# Portafolio — Santiago Cano Florez

Portafolio profesional. Tecnólogo en desarrollo de software, especializado en **automatización de procesos con IA y Python**. Medellín, Colombia.

🌐 **Live:** [portafolio-santy-canodev22.vercel.app](https://portafolio-santy-canodev22.vercel.app/)

---

## Sobre el proyecto

Sitio web personal hecho desde cero para mostrar mi perfil, experiencia y proyectos. Diseño oscuro premium, totalmente responsive y con integración en tiempo real a la API de GitHub para listar mis repositorios automáticamente.

## Stack

### Frontend
- **React 18** — librería UI
- **Vite 5** — bundler y dev server
- **Framer Motion** — animaciones
- **React Icons** — iconografía
- **CSS moderno** — variables custom, grid, glassmorphism

### Integraciones
- **GitHub API** — fetch live de repositorios
- **Formspree** — formulario de contacto sin backend
- **Vercel** — hosting y CI/CD automático

### Herramientas
- Git / GitHub
- npm
- ESLint

## Secciones

- **Hero** — presentación con badge de disponibilidad
- **About** — perfil personal y enfoque profesional
- **Experience** — timeline de trayectoria
- **Tech Stack** — stack técnico
- **Projects** — proyectos destacados + repos GitHub en tiempo real
- **Contact** — formulario funcional vía Formspree

## Estructura

```
portafolio/
├── index.html
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ParticleBackground.jsx
│   ├── data/
│   │   └── projects.js
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── package.json
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Deploy

Conectado a Vercel — cada `git push` a `master` redespliega automático.

## Contacto

- 💼 [LinkedIn](https://www.linkedin.com/in/santiago-cano-florez/)
- 🐙 [GitHub](https://github.com/SantyCano2022)
- 📧 santycf2202@gmail.com
- 📍 Medellín, Colombia

---

© 2026 Santiago Cano Florez
