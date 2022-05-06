import React from 'react'
// import { Link } from 'react-router-dom'
import Product1 from '../Images/product-1.png'
import Product2 from '../Images/product-2.png'
import Product3 from '../Images/product-3.png'
import Product4 from '../Images/product-4.png'
import Product5 from '../Images/product-5.png'
import Product6 from '../Images/product-6.png'
import Product7 from '../Images/product-7.png'
import Product8 from '../Images/product-8.png'
import Product9 from '../Images/product-9.png'

function Product() {
    return (
        <>
            <div className="product" id="product">
                <h1 className="heading">latest <span>products</span></h1>
                <div className="box-container">
                    <div className="box">
                        <span className="discount">-33%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product1} alt="" />
                        <h3>organic banana</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span></div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-45%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product2} alt="" />
                        <h3>organic tomato</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span></div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-52%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product3} alt="" />
                        <h3>organic orange</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span></div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-13%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product4} alt="" />
                        <h3>natural mild</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span></div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-20%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product5} alt="" />
                        <h3>organic grapes</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span></div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-29%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product6} alt="" />
                        <h3>natural almonts</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span></div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-55%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product7} alt="" />
                        <h3>organic apple</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span> </div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-30%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product8} alt="" />
                        <h3>natural butter</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span> </div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box">
                        <span className="discount">-40%</span>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-share"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <img src={Product9} alt="" />
                        <h3>organic carrot</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> ₹10.50 <span> ₹13.20 </span> </div>
                        <div className="quantity">
                            <span>quantity : </span>
                            <input type="number" min="1" max="1000" value="1" />
                            <span> /kg </span>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
