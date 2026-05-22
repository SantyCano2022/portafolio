import type { ProjectContent } from "../../types";

export default {
  title: "File Organizer",
  theme: "dark",
  tags: ["python", "watchdog", "tkinter", "pyyaml", "pystray", "plyer"],
  videoBorder: true,
  source: "https://github.com/SantyCano2022/file-organizer",
  description:
    "Windows desktop app that monitors a folder in real time and classifies every new file by extension, date and filename — zero manual intervention. v1.4.0 with 12 passing tests, packaged as a PyInstaller executable.<br/><br/>Filesystem-event detection with <strong>watchdog</strong>, modern GUI built on <strong>customtkinter</strong>, system tray icon with <strong>pystray</strong>, native Windows notifications via <strong>plyer</strong>. 11 default categories, year/month subfolders, YAML-editable rules, searchable history of up to 2,000 moves, scheduled organization, rule profiles, auto-update from GitHub Releases.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: "/videos/file-organizer.mp4",
        alt: "Live demo of the File Organizer",
        caption: "Live demo — automatic real-time classification",
      },
    },
  ],
} as const satisfies ProjectContent;
