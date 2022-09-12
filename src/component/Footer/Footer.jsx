import React from 'react';
import './Footer.css';
import {FaFacebook,  FaTwitter,  FaWhatsapp} from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Ngiung TRVL</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaWhatsapp className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            Facebook
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            Twitter
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            WhatsApp
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer