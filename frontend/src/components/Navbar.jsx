import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/navbar.css'
import logo from '../assets/images/logo.png'

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
        <nav className={`
        ${location.pathname === '/login'|| location.pathname === '/signup'  ? 'nonav' : 'navbar'}
        `}>
            {/* logo */}
            <img src={logo} alt="logo" />
            {/* links */}
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <button className="btn" onClick={
                () => {
                    navigate('/login');
                }
            
            }>Get early access</button>
        </nav>
    </>
  )
}
