import { ExternalLink, Satellite } from 'lucide-react';
import { useI18n } from '../../../contexts/I18nContext';
import './Projects.css';

const Projects = () => {
    const { t } = useI18n();

    // Array dei progetti (per ora solo StarMonitor, ma facilmente espandibile)
    const projects = [
        {
            id: 'starmonitor',
            title: t('projects.starmonitor.title'),
            description: t('projects.starmonitor.description'),
            tech: t('projects.starmonitor.tech'), // Array dalle traduzioni
            link: t('projects.starmonitor.link'),
            image: '/starmonitor-preview.png', // Placeholder - sostituisci con l'immagine reale
            icon: Satellite
        }
        // Qui puoi aggiungere altri progetti in futuro
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="projects-title">{t('projects.title')}</h2>
                <div className="projects-grid">
                    {projects.map((project) => {
                        const IconComponent = project.icon;

                        return (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card"
                            >
                                <div className="project-image">
                                    {/* Per ora usiamo un placeholder con icona */}
                                    <div className="project-image-placeholder">
                                        <IconComponent size={48} />
                                    </div>
                                    {/* Quando avrai l'immagine, sostituisci con:
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        loading="lazy"
                                    />
                                    */}
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {Array.isArray(project.tech) && project.tech.map((tech: string, index: number) => (
                                            <span key={index} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-link">
                                        <span>Visita il progetto</span>
                                        <ExternalLink className="external-link-icon" />
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;