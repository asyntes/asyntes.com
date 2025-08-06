import { useI18n } from '../../../contexts/I18nContext';
import XIcon from '../../icons/XIcon';
import './Footer.css';

const Footer = () => {
    const { t } = useI18n();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">


                    <div className="footer-contacts">
                        <a
                            href="https://x.com/asyntes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-contact-item"
                            aria-label="Profilo X"
                        >
                            <XIcon className="footer-contact-icon" />
                        </a>

                        <a
                            href="mailto:info@asyntes.com"
                            className="footer-contact-item footer-email"
                            aria-label="Invia email"
                        >
                            info@asyntes.com
                        </a>
                    </div>

                    <div className="footer-brand">
                        <img
                            src="/asyntes.svg"
                            alt="Asyntes"
                            className="footer-logo"
                        />
                    </div>

                    <p className="footer-text">
                        © {new Date().getFullYear()} Asyntes. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;