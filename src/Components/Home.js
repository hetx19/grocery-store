import React from 'react'
// import { Link } from 'react-router-dom'
import HomeImg from '../Images/home-img.png'

function Home() {
    return (
        <>
            <div className="home" id="home">
                <div className="image">
                    <img src={HomeImg} alt="" />
                </div>
                <div className="content">
                    <span>fresh and organic</span>
                    <h3>your daily need products</h3>
                    <a href='#' className="btn">get started</a>
                </div>
            </div>
        </>
    )
}

export default Home
