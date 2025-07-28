import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-brand">Asyntes</span>
                        <span className="hero-subtitle">Building Software Solutions</span>
                    </h1>

                    <p className="hero-description">
                        Trasformiamo le tue idee in soluzioni software innovative.
                        Sviluppiamo applicazioni moderne, scalabili e performanti per il tuo business.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Inizia un Progetto
                        </button>
                        <button className="btn btn-secondary">
                            Scopri di Più
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;