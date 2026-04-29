import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const LANG_COLORS = {
  Python: '#3572A5', JavaScript: '#F1E05A', 'C#': '#178600',
  TypeScript: '#3178C6', HTML: '#E34C26', CSS: '#563D7C',
};

const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'python', label: 'Python' },
  { key: 'data', label: 'Data' },
  { key: 'api', label: 'APIs' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  useEffect(() => {
    fetch('https://api.github.com/users/SantyCano2022/repos?sort=updated&per_page=10')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
        setLoadingRepos(false);
      })
      .catch(() => setLoadingRepos(false));
  }, []);

  // Filter out repos that are already in projects, plus the portfolio itself and forks
  const projectGithubNames = projects.map(p => {
    const parts = (p.github || '').split('/');
    return parts[parts.length - 1]?.toLowerCase();
  });
  const EXCLUDED = ['portafolio', 'santycano2022'];
  const extraRepos = repos.filter(
    r =>
      !projectGithubNames.includes(r.name?.toLowerCase()) &&
      !EXCLUDED.includes(r.name?.toLowerCase()) &&
      !r.fork
  );

  return (
    <section id="projects" ref={ref} aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Proyectos</span>
          <h2 id="projects-heading" className="section-title">Lo que he construido</h2>
          <p className="section-desc">
            Proyectos reales que resuelven problemas concretos.
          </p>
        </header>

        <div className="filter-bar" role="group" aria-label="Filtrar proyectos">
          {categories.map(c => (
            <button
              key={c.key}
              className={`filter-btn ${filter === c.key ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <ul className="projects-grid" aria-label="Lista de proyectos">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </ul>

        {/* GitHub Repos */}
        {extraRepos.length > 0 && (
          <div className="github-repos">
            <header className="github-repos__header">
              <FiGithub size={20} color="var(--accent)" />
              <div>
                <h3 className="github-repos__title">Más en GitHub</h3>
                <p className="github-repos__sub">Cargado en tiempo real desde la API</p>
              </div>
            </header>

            <ul className="repos-grid">
              {extraRepos.map(repo => (
                <li key={repo.id}>
                  <a
                    className="repo-card"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="repo-card__name">{repo.name}</h4>
                    <p className="repo-card__desc">
                      {repo.description || 'Sin descripción'}
                    </p>
                    <div className="repo-card__meta">
                      {repo.language && (
                        <span className="repo-card__lang">
                          <span
                            className="repo-card__lang-dot"
                            style={{ background: LANG_COLORS[repo.language] || '#8B949E' }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <FiStar size={12} /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <FiGitBranch size={12} /> {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {loadingRepos && (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: 40 }}>
            Cargando repositorios…
          </p>
        )}
      </div>
    </section>
  );
}
