import React, { Component } from 'react';
import './SeeDo.css';
import {FaQuoteLeft} from 'react-icons/fa'

class SeeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content1: "I'm a testimonal. Click to edit me and add text that says something nice about you and your services",
            content2: "I'm a paragraph. Click here to add your own text and edit me.",
            content3: "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.",
            content: ""
        }
        this.makeTimer();
    }

    makeTimer = () => {
        setInterval(() => {
            if (this.state.content == "") {
                this.setState({ content: this.state.content1 })
            }
            else if (this.state.content == this.state.content1){
                console.log('content1')
                this.setState({ content: this.state.content2 });      
            }
            else if (this.state.content == this.state.content2){
                console.log('content2')
                this.setState({ content: this.state.content3 });      
            }
            else if (this.state.content == this.state.content3){
                console.log('content3')
                this.setState({content: this.state.content1 });      
            }
            console.log('Content',this.state.content)
        }, 3000)
    }
    render() {
        return (
            <>
                <div id='see-do' className='see_do-hero-section'>
                    <div className='container'>
                        <h1 className='see_do-heading'>Things to do</h1>
                        <div className='see_do-grid'>
                            <div className="see_do-content">
                                <div className='see_do-topline'>Wineries Tour</div>
                                <div className='see_do-desc'>
                                    I'm a paragraph. Click here to add your own text and edit me.</div>
                            </div>
                            <div className="see_do-content">
                                <div className='see_do-topline'>Cultural Sites</div>
                                <div className='see_do-desc'>
                                    I'm a paragraph. Click here to add your own text and edit me.</div>
                            </div>
                            <div className="see_do-content">
                                <div className='see_do-topline'>Market Tour</div>
                                <div className='see_do-desc'>
                                    I'm a paragraph. Click here to add your own text and edit me.</div>
                            </div>
                            <div className="see_do-content">
                                <div className='see_do-topline'>Leisure Activities</div>
                                <div className='see_do-desc'>
                                    I'm a paragraph. Click here to add your own text and edit me.</div>
                            </div>
                            <div className="see_do-content">
                                <div className='see_do-topline'>Birds Safari</div>
                                <div className='see_do-desc'>
                                    I'm a paragraph. Click here to add your own text and edit me.</div>
                            </div>
                            <div className="see_do-content">
                                <div className='see_do-topline'>Horse Riding</div>
                                <div className='see_do-desc'>
                                    I'm a paragraph. Click here to add your own text and edit me.</div>
                            </div>
                        </div>
                        <div className="see_do-parallax">
                            <div className="see_do-content-flex">
                                <div className="see_do-review-content">
                                    <div className='see_do-review-heading'>Guest Reviews</div>
                                    <div className='quote-mark'><FaQuoteLeft/></div>
                                    <div className="review">
                                        {this.state.content}
                                    </div>
                                    <div className='see_do-btn-flex'>
                                      
                                    </div>

                                </div>
                                

                            </div>

                        </div>


                    </div>
                </div>
            </>
        );
    }
}

export default SeeDo;