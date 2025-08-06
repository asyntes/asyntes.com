import React from 'react';
import Header from '../../components/layout/Header';
import Hero from '../../components/sections/Hero';
import Projects from '../../components/sections/Projects';
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
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;