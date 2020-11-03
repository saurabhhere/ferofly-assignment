import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className='footer-hero-section'>
            <iframe className="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13365.246253373654!2d-122.39966999921234!3d37.77179863044217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3f2d005c39%3A0x40ef16d1cf84683c!2sWix.com!5e0!3m2!1sen!2sin!4v1604344255202!5m2!1sen!2sin" />
            <div className='footer'>
                <div className='footer-content'>
                &copy;2023 by Anton & Lily. Proudly create with Wix.com 

                </div>
            </div>

            </div>
        </>
    );
} 

export default Footer;