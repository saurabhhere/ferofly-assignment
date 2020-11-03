import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <>
            <div id='contact' className='contact-hero-section'>
                <div className='container'>
                    <div className='contact-heading'>
                    Contact Us
                        {/* <h1 className='heading'>Contact Us</h1> */}
                    </div>
                    <div className="info-flex">
                        <div className='info'>
                            info@mysite.com
                    </div>
                        <div className='info'>
                            /
                    </div>
                        <div className='info'>
                            500 Terry Francois Street, San Francisco, CA 94158
                    </div>
                        <div className='info'>
                            /
                    </div>
                        <div className='info'>
                            Tel: 123-456-7890
                    </div>
                    </div>
                    <div class="contact-form">
                        <div><form>

                                <input className="input-half" type="text" name="name" placeholder="Name*" required/>
                                 <input className="input-half-email" type="email" name="email" placeholder="Email*" required/>
                                 <input className="input-full" type="text" name="subject" placeholder="Subject" />

                               <textarea className="msg-box" name="Message" placeholder="Message" />
                                <input className='send-btn' type="submit" value="Send" />

                        </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Contact;