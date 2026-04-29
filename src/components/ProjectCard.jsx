import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project, index, inView }) {
  return (
    <motion.li
      className="project-card card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {project.featured && (
        <span className="project-card__featured">Destacado</span>
      )}

      <div className="project-card__head">
        <div className="project-card__icon">
          <FiGithub size={20} />
        </div>
        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title} en GitHub`}
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${project.title}`}
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card__name">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <ul className="project-card__tags">
        {project.tech.map(t => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>
    </motion.li>
  );
}
