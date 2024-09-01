import React from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <About />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
