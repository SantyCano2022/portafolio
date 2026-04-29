import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '../data/projects';

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="tech-section" ref={ref} aria-labelledby="tech-heading">
      <div className="container" style={{ padding: '80px 24px' }}>
        <header className="section-header">
          <span className="section-eyebrow">Stack</span>
          <h2 id="tech-heading" className="section-title">Tecnologías que domino</h2>
          <p className="section-desc">Las herramientas que uso para construir soluciones reales.</p>
        </header>

        <div className="tech-grid">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="tech-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="tech-item__icon">
                  <Icon color={tech.color} />
                </span>
                <span className="tech-item__name">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
