import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Product from './Components/Product';
import Deal from './Components/Deal';
import Contact from './Components/Contact';
import NewLetter from './Components/NewLetter';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div>
        {/* <Router> */}
          <Header />
          {/* <Route exact path='/'> */}
            <Home />
            <Banner />
            <Category />
            <Product />
            <Deal />
            <Contact />
            <NewLetter />
            <Footer />
          {/* </Route> */}
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
