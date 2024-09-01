import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">©2024 Khoi Le. All rights reserved</p>
            <div className="footer-icon">
                <a href="https://www.linkedin.com/in/khoile0102/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/khoi0102">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
