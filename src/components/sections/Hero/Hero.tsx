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
                        Software Developer con competenze diversificate in web development,
                        intelligenza artificiale, realtà immersive e UX design.
                    </p>
                    <p className="hero-description">
                        Ogni progetto beneficia dell'approccio tecnologico più adatto per
                        creare soluzioni digitali efficace e su misura. Combino creatività
                        e tecnica per trasformare idee in esperienze digitali memorabili.
                    </p>
                    <p className="hero-description">
                        La mia passione per l'innovazione mi porta a esplorare costantemente
                        nuove tecnologie e metodologie, garantendo sempre risultati
                        all'avanguardia e funzionali.
                    </p>


                </div>
            </div>
        </section>
    );
};

export default Hero;