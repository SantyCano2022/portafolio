import {
  FaPython, FaReact, FaDocker, FaGitAlt, FaDatabase, FaLinux
} from 'react-icons/fa';
import {
  SiStreamlit, SiFastapi, SiPandas, SiPlotly, SiSqlite,
  SiTailwindcss, SiJavascript, SiSharp, SiDotnet
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

export const projects = [
  {
    id: 'crypto-dashboard-2',
    title: 'Crypto Dashboard 2.0',
    description:
      'Dashboard de criptomonedas en tiempo real con pipeline ETL automático. Backend FastAPI extrae datos de CoinGecko cada 3 minutos, almacena en SQLite y expone API REST. Frontend React/Tailwind con gráficas, comparador multi-coin y sistema de alertas por precio. Despliegue full-stack en Vercel + Render.',
    tech: ['Python', 'FastAPI', 'React', 'Tailwind', 'SQLite', 'APScheduler'],
    category: ['python', 'data', 'api'],
    github: 'https://github.com/SantyCano2022/crypto-dashboard-2.0',
    demo: 'https://crypto-dashboard-2-0.vercel.app',
    featured: true,
  },
  {
    id: 'file-organizer',
    title: 'File Organizer',
    description:
      'Automatización de archivos que monitorea carpetas en tiempo real y clasifica cada archivo nuevo según su tipo y fecha. Incluye GUI completa, notificaciones de Windows, historial con búsqueda y auto-actualización.',
    tech: ['Python', 'Watchdog', 'CustomTkinter', 'PyYAML'],
    category: ['python'],
    github: 'https://github.com/SantyCano2022/file-organizer',
    featured: false,
  },
  {
    id: 'price-scraper',
    title: 'Price Scraper — Alkosto',
    description:
      'Scraper de precios automatizado que extrae productos de Alkosto Colombia, los visualiza en un dashboard interactivo con Streamlit y envía alertas por email cuando hay descuentos.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Docker', 'Plotly'],
    category: ['python', 'data'],
    github: 'https://github.com/SantyCano2022/price-scraper',
    demo: 'https://price-scraper-for-alkosto.streamlit.app/',
    featured: true,
  },
  {
    id: 'biblioteca-api',
    title: 'BibliotecaAPI',
    description:
      'API REST para gestión de bibliotecas construida con C# y .NET. Endpoints para administrar libros, autores y préstamos con arquitectura limpia.',
    tech: ['C#', '.NET', 'REST API'],
    category: ['api'],
    github: 'https://github.com/SantyCano2022/BibliotecaAPI',
    featured: false,
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura',
    description:
      'Proyecto de patrones de arquitectura de software implementado en C#. Exploración de clean architecture, SOLID y patrones de diseño aplicados.',
    tech: ['C#', '.NET', 'SOLID'],
    category: ['api'],
    github: 'https://github.com/SantyCano2022/Arquitectura',
    featured: false,
  },
];

export const techStack = [
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'C#', icon: SiSharp, color: '#512BD4' },
  { name: '.NET', icon: SiDotnet, color: '#512BD4' },
  { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'Plotly', icon: SiPlotly, color: '#3F4F75' },
  { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'SQL', icon: FaDatabase, color: '#336791' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624' },
];

export const experiences = [
  {
    role: 'Automatización de Procesos con IA',
    company: 'Freelance / Proyectos propios',
    period: '2024 — Presente',
    description:
      'Diseño y desarrollo de pipelines de automatización usando Python y APIs REST. Dashboards de datos con Streamlit, scrapers automatizados y herramientas de organización con GUI.',
    tags: ['Python', 'Streamlit', 'APIs REST', 'Docker'],
  },
  {
    role: 'Desarrollo de APIs e Integraciones',
    company: 'Proyecto académico — Universidad',
    period: '2023 — 2024',
    description:
      'Construcción de APIs REST con C# y .NET para gestión de datos. Patrones de arquitectura limpia y principios SOLID aplicados en proyectos reales.',
    tags: ['C#', '.NET', 'REST APIs', 'SQL'],
  },
  {
    role: 'Formación en Desarrollo de Software',
    company: 'Tecnología en Desarrollo de Software',
    period: '2022 — 2023',
    description:
      'Formación técnica en programación orientada a objetos, bases de datos, estructuras de datos y desarrollo web. Base sólida que soporta todo el trabajo posterior.',
    tags: ['Python', 'SQL', 'JavaScript', 'Git'],
  },
];

export const socialLinks = {
  github: 'https://github.com/SantyCano2022',
  linkedin: 'https://www.linkedin.com/in/santiago-cano-florez/',
  email: 'santycf2202@gmail.com',
};
