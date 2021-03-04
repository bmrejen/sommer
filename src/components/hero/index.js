import React from 'react'
import './style.css'
import {Link}  from 'react-router-dom'

const Hero = (props) => {

    return(
        <div className="banner-section">
            <div className="container">
                <div className="banner-text">
                    <h2>Drive Customers Through Digital Studio</h2>
                    <p>Chap fantastic skive off chancer knees up starkers easy peasy up the kyver David, bleeding the BBC tomfoolery chimney.!</p>
                    <Link to="/" title="" className="btn-default">Get Started</Link>
                </div>
                <div className="vectorr_shape">
                    <img src={props.heroimg} alt=""/>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Hero;