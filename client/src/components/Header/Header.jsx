import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
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

                <p><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#607B96" />
                </svg></p>
            </div>
        </>
    )
}
