import React from 'react';
import './Rooms.css';

function Rooms() {    
    return (
        <>
            <div id='rooms' className='room-hero-section'>
                <div className='container'>

                    <div className="room-parallax">
                        <div className="room-content-flex">
                            <div className="room-content">
                                <div className='room-heading'>Our Rooms</div>
                                <div className="room-desc">
                                    I'm a paragraph. Click here to add your
                                    own text and edit me. I'm a great place
                                    for you to tell a story and let your users
                                    know a little more about you.
                                </div>
                                <div className='room-btn-flex'>
                                    <button className="room-btn">Book a Room</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Rooms;