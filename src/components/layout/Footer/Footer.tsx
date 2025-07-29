import { useI18n } from '../../../contexts/I18nContext';
import './Footer.css';

const Footer = () => {
    const { t } = useI18n();

    return (
        <footer className="footer">
            <div className="footer-container">
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
        </footer>
    );
};

export default Footer;