import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiCheck, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socialLinks } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree not configured yet - show success for now
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  return (
    <section id="contact" ref={ref} aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__grid">

          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            <span className="section-eyebrow">Contacto</span>
            <h2 id="contact-heading" className="section-title">
              ¿Tienes un proceso<br />que automatizar?
            </h2>
            <p className="contact__intro">
              Cuéntame tu problema. Si se puede automatizar con Python,
              lo hacemos juntos. También disponible para oportunidades laborales
              y colaboraciones.
            </p>

            <ul className="socials">
              <li>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiGithub className="social-link__icon" />
                  <div>
                    <span className="social-link__name">GitHub</span>
                    <span className="social-link__handle">@SantyCano2022</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiLinkedin className="social-link__icon" />
                  <div>
                    <span className="social-link__name">LinkedIn</span>
                    <span className="social-link__handle">Santiago Cano Florez</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${socialLinks.email}`} className="social-link">
                  <FiMail className="social-link__icon" />
                  <div>
                    <span className="social-link__name">Email</span>
                    <span className="social-link__handle">{socialLinks.email}</span>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">Nombre</label>
                  <input type="text" id="fname" name="name" placeholder="Tu nombre" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="femail">Email</label>
                  <input type="email" id="femail" name="email" placeholder="tu@email.com" required autoComplete="email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="fsubject">Asunto</label>
                <input type="text" id="fsubject" name="subject" placeholder="¿Qué proceso quieres automatizar?" required />
              </div>
              <div className="form-group">
                <label htmlFor="fmessage">Mensaje</label>
                <textarea id="fmessage" name="message" rows="5" placeholder="Describe el problema o el flujo de trabajo que quieres optimizar…" required />
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                <FiSend size={15} /> Enviar mensaje
              </button>
              {sent && (
                <div className="form-success show" role="status" aria-live="polite">
                  <FiCheck size={15} /> ¡Mensaje recibido! Te respondo pronto.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
