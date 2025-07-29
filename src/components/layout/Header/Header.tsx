import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Competenze', href: '#about' },
        { name: 'Contatti', href: '#contact' }
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