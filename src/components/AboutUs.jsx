import React from "react";
import { NavLink } from "react-router-dom";

function AboutUs() {
  
  return (
    <>
      <div className="about">
        <div className="sub-about">
          <div className="about-img">
            <div className="about-round">
           <h2>90%</h2>
           <p>Happy Clients</p>
            </div>
            <img src="./Assets/img/about2.jpg" alt="img" />
            <img src="./Assets/img/about1.jpg" alt="img" />
          </div>
        </div>        
        <div className="sub-about1">
          <h2>About Us</h2>
          <p>
          We supply premium-grade parts and  accessories designed to enhance the efficiency and lifespan of E-Rickshaws.We are dedicated in providing reliable, durable and innovative components that power the future of Eco-friendly transportation.
          </p>
        <ul>
            <li><img src="./Assets/img/check.png" alt="" /><span> &nbsp; We believe in delivering only the best, with parts that guarantee durability and optimal performance.</span></li>
            <li><img src="./Assets/img/check.png" alt="" /><span>&nbsp; Our team constantly explores new technologies to improve the efficiency of E-Rickshaw components.</span></li>
            <li><img src="./Assets/img/check.png" alt="" /><span>&nbsp; We prioritize customer satisfaction with responsive support and customized solutions.</span></li>
            <li><img src="./Assets/img/check.png" alt="" /><span> &nbsp;We are passionate about promoting sustainable transport solutions that reduce carbon footprints.</span></li>
           
        </ul>
        <div className="sub-about_sec">
            <div className="about_sec_1">
                <img src="./Assets/img/abouticon1.png" alt=""/>&nbsp;&nbsp;<p>Zero emission</p>
            </div>
            <div className="about_sec_1">
            <img src="./Assets/img/abouticon2.png" alt=""/>&nbsp;&nbsp;<p>Happy Clients</p>
            </div>
        </div>
         <NavLink to="/popup" exact >
                  <button className="btn">Talk to us</button>
                    </NavLink>
       
        </div>
      </div>
    </>
  );
}

export default AboutUs;
