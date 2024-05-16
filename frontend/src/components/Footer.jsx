import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/footer.css'
import logo from '../assets/images/logo.png'

import { useLocation } from 'react-router-dom';


export const Footer = () => {
    const location = useLocation();
    return (
        <>
            <footer className={`
        ${location.pathname === '/login' ? 'nofooter' : ''}
        ${location.pathname === '/signup' ? 'nofooter' : ''}
        `}>
                {/* logo */}
                <div className='footer'>
                    <img src="https://cdn.discordapp.com/attachments/1221106229330579487/1240710112403001374/Screenshot_2024-05-12_155207-removebg-preview.png?ex=66478cd6&is=66463b56&hm=6f16c16c9d0650572722a638891e9264a50ac2be2e1ff665fa77c7304d73f5b4&" alt="logo" />
                    {/* links */}
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    {/* social media */}
                    <div className="social">
                        <i class="fa-brands fa-instagram" style={{ color: "#000000" }}></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
                {/* hr */}
                <hr />
                <div style={{display:"flex",justifyContent:"space-between"}}>

                    <p>&copy; 2024 All Rights Reserved</p>
                    {/* terms of use and privacy policy */}
                    <div className="terms">
                        <Link to="/terms">Terms of Use</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
