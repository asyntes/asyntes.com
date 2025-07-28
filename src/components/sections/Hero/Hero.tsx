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
                        Soluzioni digitali innovative che trasformano le tue idee in realtà.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;