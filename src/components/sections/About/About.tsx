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
                            <div className="skill-item skill-web">
                                <Code className="skill-icon" />
                                <h4>Web Development</h4>
                                <p>React, TypeScript, Spring Boot, Java, Docker, MongoDB, SQL, ecc.</p>
                            </div>
                            <div className="skill-item skill-ai">
                                <Brain className="skill-icon" />
                                <h4>Intelligenza Artificiale</h4>
                                <p>Machine Learning, AI integration, Chatbot, Preditctive Maintenance</p>
                            </div>
                            <div className="skill-item skill-xr">
                                <Glasses className="skill-icon" />
                                <h4>Realtà Immersive</h4>
                                <p>Virtual Reality, Augmented Reality, Unity 3D, Three.js</p>
                            </div>
                            <div className="skill-item skill-ux">
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