import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => {
        setClick(false)
    };

    const showButton = () => {
        if (window.innerWidth <= 768) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                    <div className="btn-nav-mobile"><button className='btn-top-mobile'>Book A Room</button></div>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links" activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}>
                                    Home
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links" activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-130}
                                    duration={500}>
                                    About
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links" activeClass="active"
                                    to="rooms"
                                    spy={true}
                                    smooth={true}
                                    offset={-180}
                                    duration={500}>
                                    Rooms
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links" activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-190}
                                    duration={500}>
                                    Services
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links" activeClass="active"
                                    to="gallery"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration={500}>
                                    Gallery
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links" activeClass="active"
                                    to="see-do"
                                    spy={true}
                                    smooth={true}
                                    offset={-180}
                                    duration={500}>
                                    See & Do
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links" activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Contact
                            </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <a className="btn-link" href='#' target='_blank'>
                                        <button className='btn-outline'>Book A Room</button></a>

                                ) : (
                                        <span></span>
                                    )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar