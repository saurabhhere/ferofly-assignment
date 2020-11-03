import React, { Component, useState } from 'react';
import './Gallery.css';
import aa from './1a.png';
import ab from './1b.png';
import ba from './2a.png';
import bb from './2b.png';
import ca from './3a.png';
import cb from './3b.png';

class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {
            photo1: true,
            src1: ''
        }
        this.makeTimer()
    }
    
    makeTimer(){
        setInterval(()=>{
            if (this.state.photo1) {
                this.setState({ src1: `${aa}`})
            }
            if (!this.state.photo1)  {
                this.setState({ src1: `${ab}` })
            }
            if (this.state.photo2) {
                this.setState({ src2: `${ba}` })
            }
            if (!this.state.photo2)  {
                this.setState({ src2: `${bb}` })
            }
            if (this.state.photo3) {
                this.setState({ src3: `${ca}` })
            }
            if (!this.state.photo3)  {
                this.setState({ src3: `${cb}` })
            }
            this.setState({photo1: !this.state.photo1})
            this.setState({photo2: !this.state.photo2})
            this.setState({photo3: !this.state.photo3})

        }, 3000)
    }


render() {



        return (
            <>
                <div id='gallery' className='gallery-hero-section'>
                    <div className='container'>
                        <div className='gallery-heading'>
                            <h1 className='gallery-heading'>GALLERY</h1>
                        </div>
                        <div className="gallery-img-flex">
                            <div className='gallery-img' >
                                <img src={this.state.src1} alt="photo1" />
                            </div>
                            <div className='gallery-img' >
                                <img src={this.state.src2} alt="photo2" />
                            </div>
                            <div className='gallery-img' >
                                <img src={this.state.src3} alt="photo3" />
                            </div>
                        </div>


                    </div>
                </div>
            </>
        );
    }
}

export default Gallery;