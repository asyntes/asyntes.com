import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Servizi', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Chi Siamo', href: '#about' },
        { name: 'Contatti', href: '#contact' }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${className}`}>
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-content">
                        {/* Logo */}
                        <div className="logo">
                            <span className="logo-text">Asyntes</span>
                        </div>

                        {/* Desktop Navigation */}
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

                        {/* Mobile menu button */}
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

                {/* Mobile Navigation */}
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