import { Code, Brain, Glasses, Palette } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-skills">
                        <h2 className="about-title">Competenze</h2>
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