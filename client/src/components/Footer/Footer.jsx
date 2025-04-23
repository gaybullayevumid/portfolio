import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <>
            <div className="footer">
                <ul>
                    <li>find me in:</li>
                    <li>
                        <Link><img src={"/twitter.png"} alt="twitter" /></Link>
                    </li>
                    <li>
                        <Link><img src={"/facebook.png"} alt="facebook" /></Link>
                    </li>
                </ul>
                <div className="github">
                    <p>@gaybullayevumid</p>
                    <Link><img src={"/github.png"} alt="github" /></Link>
                </div>
            </div>
        </>
    )
}
