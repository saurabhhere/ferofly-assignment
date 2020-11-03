import React from 'react';
import './About.css';

function About() {
    return (
        <>
            <div id='about' className='about-hero-section'>
                <div className='container'>
                    <div className='input-field'>
                        <div className="check-in-input input-flex">
                            <div><label for='check-in'>Check In</label></div>
                            <div>    <input type='date' id='check-in' placeholder="MM/DD/YYYY"/></div>
                        </div>
                        <div className="check-out-input input-flex">
                            <div><label for='check-out'>Check Out</label></div>
                            <div>    <input type='date' id='check-out'  /></div>
                        </div>
                        <div className="adults-input input-flex">
                            <div><label for='adults'>Adults</label></div>
                            <div>    <input type='number' id='adults' placeholder='1' /></div>
                        </div>
                        <div className="kids-input input-flex">
                            <div><label for='kids'>Kids</label></div>
                            <div>    <input type='number' id='kids' placeholder='0' /></div>
                        </div>
                        <div ><button className='search-btn'>Search</button></div>
                    </div>

                    <div class="about-content">
                        <div className='about-heading'>
                            ABOUT
                        </div>
                        <div className='about-desc'>
                            I'm a paragraph. Click here to add your own texy and edit me. It's easy. Just click
                            "Edit Text" or double click me to add your own content and make changes to the 
                            font. Feel free to drag and drop me anywhere you like on your page. I'm a great
                            place for you to tell a story and let your users know a little more about you.
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default About;