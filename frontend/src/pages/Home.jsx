import React from 'react'
import "../assets/styles/home.css"
import logo from '../assets/images/logo.png'

import { useNavigate } from 'react-router-dom';
export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <main className='homemain'>
                <div className='left'>
                    <h1>Unique solutions & Innovative approach to trading</h1>
                    <p>Stay on top of the market with our innovative technology, extensive product access, personalized education, and award-winning service.</p>
                    <button className='btn'
                        onClick={
                            () => {
                                navigate('/login');
                            }
                        }
                    >Get Started</button>
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <img className='right' src="https://www.investopedia.com/thmb/hATOUQ_Iq5v5CgGKLhrj22v1aXM=/2120x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1300495462-e66753342f304f45a9215505352b596a.jpg" alt="logo" width="400px" height="300pc" />


                </div>
            </main>
            <section className="assets">
                <h2>Choose the <span className='assetspecialtext'>type of assets</span> to trade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sunt. Corporis explicabo, porro officiis.</p>
                <div className="assets-container">
                    <div className="asset">
                        <h3>Stocks</h3>
                        {/* <p>Access to over 1000 stocks</p> */}
                    </div>
                    <div className="asset">
                        <h3>Forex</h3>
                        {/* <p>Trade forex with leverage</p> */}
                    </div>
                    <div className="asset">
                        <h3>Cryptocurrency</h3>
                        {/* <p>Trade the most popular cryptocurrencies</p> */}
                    </div>
                    <div className="asset">
                        <h3>Commodities</h3>
                        {/* <p>Trade commodities with leverage</p> */}
                    </div>
                </div>
            </section>
        </>
    )
}
