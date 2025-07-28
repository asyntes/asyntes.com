import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    Asyntes™
                </div>
                <p className="footer-text">
                    © {new Date().getFullYear()} Asyntes. Tutti i diritti riservati.
                </p>
            </div>
        </footer>
    );
};

export default Footer;