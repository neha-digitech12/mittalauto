import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
    setIsMenuOpen(!isMenuOpen);
  };  

  const closeNav = () => {
    setNavVisible(false);
  };

  useEffect(() => {
  
    if (isNavVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isNavVisible]);



  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbs = pathnames.map((path, index) => {
      const href = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { name: path, href };
    });

    return breadcrumbs;
  };

  return (
    <>
      <nav>
        <div className="logo">
        <NavLink to="/" exact activeClassName="active">
        <img src="./Assets/img/logo1.svg" alt="img" />
            </NavLink>
          
        </div>

        {/* Breadcrumb section */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          {generateBreadcrumbs().map((breadcrumb, index) => (
            <span key={index}>
              {" "}
              /{" "}
              <Link to={breadcrumb.href}>
                {breadcrumb.name.charAt(0).toUpperCase() +
                  breadcrumb.name.slice(1)}
              </Link>
            </span>
          ))}
        </div>
        <div className={`menu ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleNav}>
        {/* <div className="menu" onClick={toggleNav}> */}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-close ${isMenuOpen ? '' : 'hidden'}`} onClick={toggleNav}>
        {/* <div className="menu-close"> */}
  <img src="./Assets/img/close.svg" alt="img"/>
</div>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeClassName="active">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>

          <li>
            <i className="fa-solid fa-phone-volume"></i>&nbsp;
            <Link to="tel:+4733378901">+47 333 78 901</Link>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>&nbsp;
            <Link to="mailto:digitech@gmail.com">digitech@gmail.com</Link>
          </li>
        </ul>
      </nav>



      <div className={`nav1 ${isNavVisible ? "show" : ""}`}>
        <ul>
          <li>
          
            <NavLink to="/" exact activeClassName="active" onClick={closeNav}>
            <img src="./Assets/img/home1.svg" alt="img" />&nbsp;&nbsp;  Home
            </NavLink>
          </li>
          <li>
           
            <NavLink to="/categories" activeClassName="active" onClick={closeNav}>
            <img src="./Assets/img/search1.svg" alt="img" />&nbsp;&nbsp;  Categories
            </NavLink>
          </li>
          <li>
           
            <NavLink to="/contact" activeClassName="active" onClick={closeNav}>
            <img src="./Assets/img/smartphone.svg" alt="img" />&nbsp;&nbsp;   Contact
            </NavLink>
          </li>
        </ul>
        <br />
         <br />
         <br />
      
       
        

        <div className="lineNav1"></div>
<br/>
        <div className="social-nav1">
          <li>
            <img src="./Assets/img/mobile.svg" alt="img" />&nbsp;
            <NavLink to="tel:+4733378901">+47 333 78 901</NavLink>
          </li> 
          <li>
            <img src="./Assets/img/mail.svg" alt="img" />&nbsp;
            <NavLink to="mailto:digitech@gmail.com">digitech@gmail.com</NavLink>
          </li> <br /> 
          <h3 style={{ textAlign: "center" }}>Follow us on:</h3>
          <div className="social-sidebar">
            <img src="./Assets/img/facebook.svg" alt="img" />
            <img src="./Assets/img/instagram.svg" alt="img" />
            <img src="./Assets/img/youtube.svg" alt="img" />
            <img src="./Assets/img/twitter.svg" alt="img" />
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Navbar;
