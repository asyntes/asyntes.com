// src/components/sections/Hero/Hero.tsx
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    {/* Banner PNG */}
                    <div className="hero-banner">
                        <img
                            src="/banner.png"
                            alt="Asyntes Banner"
                            className="banner-image"
                        />
                    </div>

                    <div className="hero-title">
                        <span className="hero-subtitle">Building Software Solutions</span>
                    </div>

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