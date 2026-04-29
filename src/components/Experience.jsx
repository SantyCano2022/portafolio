import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../data/projects';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} aria-labelledby="exp-heading" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Experiencia</span>
          <h2 id="exp-heading" className="section-title">Trayectoria</h2>
          <p className="section-desc">
            Proyectos y roles donde la automatización marcó la diferencia.
          </p>
        </header>

        <ol className="timeline" aria-label="Línea de tiempo">
          {experiences.map((exp, i) => (
            <motion.li
              key={i}
              className="timeline__item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card">
                <div className="timeline__card-head">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">{exp.company}</p>
                  </div>
                  <time className="timeline__period">{exp.period}</time>
                </div>
                <p className="timeline__desc">{exp.description}</p>
                <ul className="timeline__tags">
                  {exp.tags.map(t => (
                    <li key={t} className="tag">{t}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
