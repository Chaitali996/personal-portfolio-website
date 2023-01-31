import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {

  const [sideOpen, setSideOpen] = useState(false);
  
  const handleSideOpen = () => {
    setSideOpen(!sideOpen);
  };
  

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <button className="n-hamburger" onClick={handleSideOpen}>
        <i className={`fas fa-bars ${sideOpen ? 'open' : ''}`} />
        </button>
        <div className="n-name">Chaitali</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className={`n-list ${sideOpen ? 'open' : ''}`}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
            {/* side menu */}
      <div className={`n-side-menu ${sideOpen ? "open" : ""}`}>
        <button className="n-side-menu-close" onClick={() => setSideOpen(false)}>
          <i className="fas fa-times" />
        </button>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="services" spy={true} smooth={true}>
              Services
            </Link>
          </li>
          <li>
            <Link to="works" spy={true} smooth={true}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true}>
              Portfolio
            </Link>
          </li>
          <li>
          <Link to="testimonial" spy={true} smooth={true}>
              Testimonial
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}; 
    
export default Navbar;