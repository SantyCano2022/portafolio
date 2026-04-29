import { socialLinks } from '../data/projects';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <a href="#hero" className="navbar__logo" aria-label="Volver al inicio">
          SC<span className="accent">.</span>
        </a>
        <p className="footer__copy">
          © {new Date().getFullYear()} Santiago Cano Florez · Medellín, Colombia
        </p>
        <nav className="footer__links" aria-label="Links del footer">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#hero">↑ Inicio</a>
        </nav>
      </div>
    </footer>
  );
}
