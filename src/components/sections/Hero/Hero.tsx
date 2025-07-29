import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-banner">
                        <img
                            src="/banner.png"
                            alt="Asyntes Banner"
                            className="banner-image"
                        />
                    </div>
                    <p className="hero-description">
                        Software Developer con competenze diversificate in intelligenza artificiale,
                        web development, realtà immersive e UX design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;