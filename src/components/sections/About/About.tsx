import { Code, Brain, Glasses, Palette } from 'lucide-react';
import { useI18n } from '../../../contexts/I18nContext';
import './About.css';

const About = () => {
    const { t } = useI18n();

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-skills">
                        <h2 className="about-title">{t('about.title')}</h2>
                        <div className="skills-grid">
                            <div className="skill-item skill-ai">
                                <Brain className="skill-icon" />
                                <h4>{t('skills.ai.title')}</h4>
                                <p>{t('skills.ai.description')}</p>
                            </div>
                            <div className="skill-item skill-web">
                                <Code className="skill-icon" />
                                <h4>{t('skills.web.title')}</h4>
                                <p>{t('skills.web.description')}</p>
                            </div>
                            <div className="skill-item skill-xr">
                                <Glasses className="skill-icon" />
                                <h4>{t('skills.xr.title')}</h4>
                                <p>{t('skills.xr.description')}</p>
                            </div>
                            <div className="skill-item skill-ux">
                                <Palette className="skill-icon" />
                                <h4>{t('skills.ux.title')}</h4>
                                <p>{t('skills.ux.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;