import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className='navbar'>
                <div className="logo">
                    <Link to={"/"}>umid-gaybullayev</Link>
                </div>
                <ul>
                    <li className='active'>
                        <Link to={"/"}>_hello</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>_about-me</Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>_projects</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>_contact-me</Link>
                    </li>
                </ul>
            </div>

            <div className="mobile-navbar">
                <div className="logo">
                    <Link to={"/"}>umid-gaybullayev</Link>
                </div>

                <button className="hamburger-btn" onClick={toggleMenu}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#607B96" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to={"/"} onClick={closeMenu}>_hello</Link>
                    </li>
                    <li>
                        <Link to={"/about"} onClick={closeMenu}>_about-me</Link>
                    </li>
                    <li>
                        <Link to={"/projects"} onClick={closeMenu}>_projects</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} onClick={closeMenu}>_contact-me</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}