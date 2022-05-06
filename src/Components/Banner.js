import React from 'react'
// import { Link } from 'react-router-dom'
import Banner1 from '../Images/banner-1.jpg'
import Banner2 from '../Images/banner-2.jpg'

function Banner() {
    return (
        <>
            <section className="banner-container">
                <div className="banner">
                    <img src={Banner1} alt="" />
                        <div className="content">
                            <h3>special offer</h3>
                            <p>upto 45% off</p>
                            <a href="#" className="btn">check out</a>
                        </div>
                </div>
                <div className="banner">
                    <img src={Banner2} alt="" />
                        <div className="content">
                            <h3>limited offer</h3>
                            <p>upto 50% off</p>
                            <a href="#" className="btn">check out</a>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Banner
