import { Code, Brain, Glasses, Palette } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <h2 className="about-title">Chi Sono</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-description">
                            Software Developer con competenze diversificate in web development,
                            intelligenza artificiale, realtà immersive e UX design.
                        </p>
                        <p className="about-description">
                            Ogni progetto beneficia dell'approccio tecnologico più adatto per
                            creare soluzioni digitali efficace e su misura. Combino creatività
                            e tecnica per trasformare idee in esperienze digitali memorabili.
                        </p>
                        <p className="about-description">
                            La mia passione per l'innovazione mi porta a esplorare costantemente
                            nuove tecnologie e metodologie, garantendo sempre risultati
                            all'avanguardia e funzionali.
                        </p>
                    </div>

                    <div className="about-skills">
                        <h3 className="skills-title">Competenze Principali</h3>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <Code className="skill-icon" />
                                <h4>Web Development</h4>
                                <p>React, TypeScript, Node.js, moderne architetture web</p>
                            </div>
                            <div className="skill-item">
                                <Brain className="skill-icon" />
                                <h4>Intelligenza Artificiale</h4>
                                <p>Machine Learning, AI integration, soluzioni intelligenti</p>
                            </div>
                            <div className="skill-item">
                                <Glasses className="skill-icon" />
                                <h4>Realtà Immersive</h4>
                                <p>VR/AR, Three.js, esperienze interattive 3D</p>
                            </div>
                            <div className="skill-item">
                                <Palette className="skill-icon" />
                                <h4>UX Design</h4>
                                <p>Design thinking, prototipazione, user experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;