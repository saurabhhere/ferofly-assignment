import React from 'react';
import './Services.css';
import {MdFreeBreakfast} from 'react-icons/md';
import {FaSwimmingPool} from 'react-icons/fa';
import {AiOutlineWifi} from 'react-icons/ai';
import {GiGrass} from 'react-icons/gi';
import {BiFoodMenu} from 'react-icons/bi';
import{GrUserManager} from 'react-icons/gr';

function Services() {
    return (
        <>
            <div id='services' className='services-hero-section'>
                <div className='container'>
                    <h1 className='services-heading'>OUR SERVICES</h1>
                <div className='services-grid'>
                    <div className="services-content">
                    <div className="services-icon"><MdFreeBreakfast /></div>
                    <div className='services-topline'>Breakfast</div>
                    <div className='services-desc'>I'm a paragraph. Click here to add your own text and edit me.</div>
                    </div>
                    <div className="services-content">
                    <div className="services-icon"><GiGrass/></div>
                    
                    <div className='services-topline'>Garden</div>
                    <div className='services-desc'>I'm a paragraph. Click here to add your own text and edit me.</div>
                    </div>
                    <div className="services-content">
                    <div className="services-icon"><FaSwimmingPool /></div>
                    <div className='services-topline'>Pool</div>
                    <div className='services-desc'>I'm a paragraph. Click here to add your own text and edit me.</div>
                    </div>
                    <div className="services-content">
                    <div className="services-icon"><AiOutlineWifi /></div>
                    <div className='services-topline'>Free Wifi</div>
                    <div className='services-desc'>I'm a paragraph. Click here to add your own text and edit me.</div>
                    </div>
                    <div className="services-content">
                    <div className="services-icon"><GrUserManager /></div>
                    <div className='services-topline'>Daily Housekeeping</div>
                    <div className='services-desc'>I'm a paragraph. Click here to add your own text and edit me.</div>
                    </div>
                    <div className="services-content">
                    <div className="services-icon"><BiFoodMenu /></div>
                    <div className='services-topline'>In-Room Dining Services</div>
                    <div className='services-desc'>I'm a paragraph. Click here to add your own text and edit me.</div>
                    </div>
                </div>


                </div>
            </div>
        </>
    );
}

export default Services;