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
              <img src="https://cdn.discordapp.com/attachments/1221106229330579487/1240710112403001374/Screenshot_2024-05-12_155207-removebg-preview.png?ex=66478cd6&is=66463b56&hm=6f16c16c9d0650572722a638891e9264a50ac2be2e1ff665fa77c7304d73f5b4&" alt="logo" />

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
