import { Mail, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contatti</h2>
                <div className="contact-methods">
                    <a
                        href="https://x.com/asyntes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        aria-label="Profilo X"
                    >
                        <img src="/x-logo.svg" alt="X" className="contact-icon" />
                        <div className="contact-info">
                            <span className="contact-label">X</span>
                            <span className="contact-value">Seguimi</span>
                        </div>
                    </a>

                    <a
                        href="https://linkedin.com/in/asyntes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        aria-label="Profilo LinkedIn"
                    >
                        <Linkedin className="contact-icon" />
                        <div className="contact-info">
                            <span className="contact-label">LinkedIn</span>
                            <span className="contact-value">Connettiti</span>
                        </div>
                    </a>

                    <a
                        href="mailto:santespr@gmail.com"
                        className="contact-item"
                        aria-label="Invia email"
                    >
                        <Mail className="contact-icon" />
                        <div className="contact-info">
                            <span className="contact-label">Email</span>
                            <span className="contact-value">santesepr@gmail.com</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;