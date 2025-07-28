import React from 'react';
import Header from '../../components/layout/Header';
import Hero from '../../components/sections/Hero';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <main className="home-main">
                <Hero />
                {/* Qui aggiungerai le altre sezioni */}
            </main>
        </div>
    );
};

export default Home;