import type { ProjectContent } from "../../types";

export default {
  title: "File Organizer",
  theme: "dark",
  tags: ["python", "watchdog", "tkinter", "pyyaml", "pystray", "plyer"],
  videoBorder: true,
  source: "https://github.com/SantyCano2022/file-organizer",
  description:
    "Aplicación de escritorio Windows que monitorea una carpeta en tiempo real y clasifica cada archivo nuevo por extensión, fecha y nombre — sin intervención. v1.4.0 con 12 tests pasando, empacada como ejecutable PyInstaller.<br/><br/>Detección por eventos del sistema con <strong>watchdog</strong>, GUI moderna con <strong>customtkinter</strong>, bandeja del sistema con <strong>pystray</strong>, notificaciones nativas Windows con <strong>plyer</strong>. 11 categorías predefinidas, subcarpetas año/mes, reglas editables en YAML, historial con búsqueda de 2 000 movimientos, programación por horario, perfiles de reglas, auto-update desde GitHub Releases.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/file-organizer.mp4",
        alt: "Demo en vivo del File Organizer",
        caption: "Demo en vivo — clasificación automática en tiempo real",
      },
    },
  ],
} as const satisfies ProjectContent;
