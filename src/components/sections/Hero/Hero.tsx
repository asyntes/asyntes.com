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
                    <p className="hero-description">
                        Software Developer con competenze diversificate in web development, intelligenza artificiale, realtà immersive e UX design. Ogni progetto beneficia dell'approccio tecnologico più adatto per creare soluzioni digitali efficaci e su misura.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;