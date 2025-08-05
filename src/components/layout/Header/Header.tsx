import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../../../contexts/I18nContext';
import './Header.css';

const Header = () => {
    const { t } = useI18n();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.skills'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-content">
                        <div className="logo">
                            <img
                                src="/asyntes.svg"
                                alt="Asyntes"
                                className="logo-svg"
                            />
                        </div>

                        <div className="nav-desktop">
                            <div className="nav-links">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="nav-link"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="nav-mobile-button">
                            <button
                                onClick={toggleMobileMenu}
                                className="mobile-menu-btn"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="menu-icon" />
                                ) : (
                                    <Menu className="menu-icon" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="nav-mobile">
                        <div className="nav-mobile-links">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="nav-mobile-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;