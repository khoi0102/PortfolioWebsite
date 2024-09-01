import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header-nav">
            <nav className="header-nav-list">
                <a className="name" href="#">Khoi Le</a>
                <a className="nav" href="Resume.pdf"><i className="fa-solid fa-user"></i> My Resume</a>
                <a className="nav" href="#portfolio"><i className="fa-solid fa-diagram-project"></i> Projects</a>
            </nav>
        </div>
    );
}

export default Header;
