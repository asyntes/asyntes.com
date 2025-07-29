import { useI18n } from '../../../contexts/I18nContext';
import './Hero.css';

const Hero = () => {
    const { t } = useI18n();

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
                        {t('hero.description1')}
                    </p>
                    <p className="hero-description">
                        {t('hero.description2')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;