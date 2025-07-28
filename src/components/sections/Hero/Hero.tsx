import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-title">
                        <img
                            src="/asyntes.svg"
                            alt="Asyntes"
                            className="hero-logo"
                        />
                    </div>

                    <p className="hero-description">
                        Trasformiamo le tue idee in soluzioni software innovative.
                        Sviluppiamo applicazioni moderne, scalabili e performanti per il tuo business.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;