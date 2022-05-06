import React from 'react'
// import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header>
                <div className="header-1">
                    <a href="#" className="logo">
                        <i className="fas fa-shopping-basket">groco</i>
                    </a>
                    <form action="" className="search-box-container">
                        <input type="search" id="search-box" placeholder="search here..." />
                        <label for="search-box" className="fas fa-search"></label>
                    </form>
                </div>
                <div className="header-2">
                    <div id="menu-bar" className="fas fa-bars"></div>
                    <nav className="navbar">
                        <a href="#">home</a>
                        <a href="#category">category</a>
                        <a href="#product">product</a>
                        <a href="#deal">deal</a>
                        <a href="#contact">contact</a>
                    </nav>
                    <div className="icons">
                        <a to="#" className="fas fa-shopping-cart"></a>
                        <a to="#" className="fas fa-heart"></a>
                        <a to="#" className="fas fa-user-circle"></a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
