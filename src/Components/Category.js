import React from 'react'
// import { Link } from 'react-router-dom'
import Category1 from '../Images/category-1.png'
import Category2 from '../Images/category-2.png'
import Category3 from '../Images/category-3.png'
import Category4 from '../Images/category-4.png'

function Category() {
    return (
        <>
            <div className="category" id="category">
                <h1 className="heading">shop by <span>category</span></h1>
                <div className="box-container">
                    <div className="box">
                        <h3>vegitables</h3>
                        <p>upto 50% off</p>
                        <img src={Category1} alt="" />
                            <a href="#category" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <h3>juice</h3>
                        <p>upto 44% off</p>
                        <img src={Category2} alt="" />
                            <a href="#category" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <h3>meat</h3>
                        <p>upto 35% off</p>
                        <img src={Category3} alt="" />
                            <a href="#category" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <h3>fruite</h3>
                        <p>upto 12% off</p>
                        <img src={Category4} alt="" />
                            <a href="#category" className="btn">shop now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
