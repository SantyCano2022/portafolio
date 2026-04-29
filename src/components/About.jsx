import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    let start = 0;
    const end = parseInt(target, 10);
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 30);
    const timer = setInterval(() => {
      start += 1;
      ref.current.textContent = start + suffix;
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target, suffix]);

  return <span className="stat__number" ref={ref}>0{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid">

          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center' }}
          >
            <div className="about__photo-wrapper">
              <div className="about__photo-ring" aria-hidden="true" />
              <img
                className="about__photo"
                src="/santiago.jpg"
                alt="Santiago Cano Florez"
                width="220"
                height="220"
                loading="lazy"
              />
            </div>
            <div className="about__status">
              <span className="about__status-dot" aria-hidden="true" />
              Disponible · Medellín
            </div>
          </motion.aside>

          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
              <span className="section-eyebrow">Sobre mí</span>
              <h2 id="about-heading" className="section-title">
                Resuelvo problemas reales<br />con tecnología
              </h2>
            </motion.div>

            <motion.div className="about__bio" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
              <p>
                Soy <strong>Santiago Cano Florez</strong>, tecnólogo en desarrollo de software
                cursando ingeniería de software en Medellín. Me especializo en
                <strong> automatizar procesos con Python</strong>: desde scrapers de precios con dashboards
                interactivos hasta organizadores de archivos inteligentes que trabajan en tiempo real.
              </p>
              <p>
                No construyo tecnología por construirla. Entiendo el proceso, encuentro el
                cuello de botella y diseño la solución más simple que funcione. Si un
                humano lo hace repetidamente, probablemente se puede automatizar.
              </p>
            </motion.div>

            <motion.div className="stats" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}>
              <div className="stat">
                <Counter target={2} suffix="+" />
                <span className="stat__label">Años de exp.</span>
              </div>
              <div className="stat">
                <Counter target={4} suffix="+" />
                <span className="stat__label">Proyectos</span>
              </div>
              <div className="stat">
                <Counter target={10} suffix="+" />
                <span className="stat__label">Tecnologías</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
