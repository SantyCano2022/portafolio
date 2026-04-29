import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#contact', label: 'Contacto' },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container navbar__inner">
          <a href="#hero" className="navbar__logo" aria-label="Inicio">
            SC<span className="accent">.</span>
          </a>

          <nav className="navbar__links" aria-label="Navegación principal">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href="/cv.pdf" className="btn btn--primary" download aria-label="Descargar CV">
              <FiDownload size={14} /> Ver CV
            </a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="/cv.pdf" className="btn btn--primary" download onClick={close}>
          <FiDownload size={14} /> Descargar CV
        </a>
      </div>
    </>
  );
}
