import React from 'react';
import Header from '../../components/layout/Header';
import Hero from '../../components/sections/Hero';
import About from '../../components/sections/About';
import Contact from '../../components/sections/Contact';
import Footer from '../../components/layout/Footer';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <main className="home-main">
                <Hero />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;