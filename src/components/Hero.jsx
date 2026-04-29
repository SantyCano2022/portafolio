import { motion } from 'framer-motion';
import { FiLink, FiMail } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Presentación">
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
          >
            <span className="hero__badge-dot" aria-hidden="true" />
            Disponible para proyectos
          </motion.div>

          <motion.h1
            className="hero__title"
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
          >
            Automatizo procesos.<br />
            <span className="hero__title-gradient">IA que trabaja por ti.</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
          >
            Python · APIs · Data Pipelines · Medellín, Colombia
          </motion.p>

          <motion.p
            className="hero__desc"
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            Tecnólogo en desarrollo de software especializado en construir pipelines
            de automatización con IA. Convierto tareas repetitivas y flujos complejos
            en sistemas que corren solos — eficientes, escalables y confiables.
          </motion.p>

          <motion.div
            className="hero__ctas"
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
          >
            <a href="#projects" className="btn btn--primary">
              <FiLink size={15} /> Ver proyectos
            </a>
            <a href="#contact" className="btn btn--secondary">
              <FiMail size={15} /> Contactar
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="code-block">
            <div className="code-block__dots">
              <span /><span /><span />
            </div>
            <pre className="code-block__body">
{`\u200B`}<span className="c-comment"># Santiago Cano</span>{`
`}<span className="c-kw">import</span> <span className="c-fn">fastapi</span>, <span className="c-fn">pandas</span>{`
`}<span className="c-kw">from</span> watchdog <span className="c-kw">import</span> <span className="c-fn">Observer</span>{`

`}<span className="c-kw">def</span> <span className="c-fn">automate</span>(task):{`
`}  data = <span className="c-fn">scrape</span>(task){`
`}  result = <span className="c-fn">transform</span>(data){`
`}  <span className="c-kw">return</span> <span className="c-fn">deploy</span>(result){`

`}<span className="c-accent">▶ proceso automatizado ✓</span>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
