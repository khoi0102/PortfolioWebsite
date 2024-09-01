import React from 'react';
import './About.css';

function About() {
    return (
        <div className="organize">
            <div className="background">
                <h2 className="intro"><i className="fa-solid fa-user"></i> About Me</h2>
                <h3>
                    I'm Khoi Le, a dedicated Computer Science student at Oklahoma State University, set to graduate in May 2025.
                    My education spans Discrete Structures, Statistics, and Data Analytics, complementing my skills in languages
                    like Java, Python, and JavaScript. My experience includes a Photo Editor Internship at Joy. Co and a
                    logistics role at Amazon, alongside developing TripLog, a project demonstrating my software engineering
                    skills. Certified in Google Data Analytics, I'm driven to leverage technology in innovative ways.
                </h3>
            </div>
            <div className="profile-picture">
                <div className="circle-animation"></div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/khoile0102/">
                        <i className="fa-brands fa-linkedin" id="link"></i>
                    </a>
                    <a href="https://github.com/khoi0102">
                        <i className="fa-brands fa-github" id="git"></i>
                    </a>
                </div>
                <div className="icon">
                    <p className="tech-slack" id="tech-s">Tech Slack
                        <img alt="java-coffee-cup-logo" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" />
                        <img alt="html-5" src="https://img.icons8.com/color/48/html-5--v1.png" />
                        <img alt="css3" src="https://img.icons8.com/color/48/css3.png" />
                        <img alt="javascript" src="https://img.icons8.com/color/48/javascript--v1.png" />
                    </p>
                </div>
                <div className="contact-me">
                    <p id="contact-me"><strong><i className="fa-solid fa-address-book"></i> Contact Me</strong></p>
                    <p><strong><i className="fa-solid fa-envelope"></i> Email:</strong> lethanhkhoi01@gmail.com</p>
                    <p><strong><i className="fa-solid fa-phone"></i> Phone Number:</strong> +1 (405)-255-6069</p>
                </div>
            </div>
        </div>
    );
}

export default About;
