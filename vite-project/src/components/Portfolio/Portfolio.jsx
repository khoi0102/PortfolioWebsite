import React, { useEffect } from 'react';
import './Portfolio.css';

function Portfolio() {

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.portfolio-item').forEach(item => {
                const itemPosition = item.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;

                if (itemPosition < viewportHeight - 100) {
                    item.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="portfolio">
            <h2 className="project-title"><i className="fa-solid fa-diagram-project"></i> PROJECTS</h2>

            <div className="portfolio-item">
                <div className="portfolio-image">
                    <img alt="Project Screenshot" src="/Animation.gif" />
                </div>
                <div className="portfolio-content">
                    <h3><strong> TRIPLOG</strong> <i className="fa-solid fa-car"></i></h3>
                    <p className="project-description">Java program that analyzes trip data stored in a CSV file. It includes
                        classes and methods to read trip
                        data, perform stop detection using two different heuristics, calculate various trip statistics, and
                        visualize the trip on a map using JMapViewer.</p>
                    <div className="portfolio-tags">
                        <span className="tag">Java</span>
                    </div>
                    <div className="portfolio-links">
                        <a className="code-link" href="https://github.com/khoi0102/TripLog.git">Code <i className="fa-brands fa-github"></i></a>
                        <a className="demo-link" href="#">Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>

            <div className="portfolio-item">
                <div className="portfolio-image">
                    <img alt="Coffee Shop Picture" src="/coffehouse.png" />
                </div>
                <div className="portfolio-content">
                    <h3><strong>THE CULTURE COFFEE</strong> <i className="fa-solid fa-mug-hot"></i></h3>
                    <p className="project-description">Web interface designed with HTML, CSS, and JavaScript, presenting The Culture
                        Coffee's vibrant menu. It
                        features interactive elements for item selection, cart management, and responsive design, giving users a
                        taste of the coffee shop's ambiance and service.</p>
                    <div className="portfolio-tags">
                        <span className="tag">CSS</span>
                        <span className="tag">HTML</span>
                        <span className="tag">JavaScript</span>
                    </div>
                    <div className="portfolio-links">
                        <a className="code-link" href="https://github.com/khoi0102/CoffeeShop.git">Code <i className="fa-brands fa-github"></i></a>
                        <a className="demo-link" href="https://khoi0102.github.io/CoffeeShop/">Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
