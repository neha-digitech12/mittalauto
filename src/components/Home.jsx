import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Cate from "./Cate";
import Cookies from './Cookies'
import { NavLink } from "react-router-dom";



function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-section">
        <div className="sub-hero">
          <h1>Mittal E-Rickshaw Parts</h1>
          <NavLink to="/popup" exact >
          <button className="btn">Talk to us</button>
            </NavLink>
         
        </div>
      </div>
      <Cookies />
      <AboutUs />

    
     <Cate/>
      <Footer/>
     
     
    </>
  );
}

export default Home;
