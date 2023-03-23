import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartimoji-crimson.png";
import Glasses from "../../img/glasses-crimson.png";
import Humble from "../../img/humble-crimson.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane id="span-text">
        I have a solid understanding of ReactJS, a JavaScript libraryfor building <br/> user interfaces, 
        and have utilized it to create dynamic and interactive web <br/>applications.  
        My foundation in HTML and CSS allows me to develop <br/> well-structured and visually appealing websites. 
        Additionally,
         I have a <br/> knowlege of JavaScript and have used it to add dynamic functionality<br/> to my projects. 
        I am excited to continue building upon my skills in <br/>these technologies 
         and to bring my passion for web development.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend Devloper"}
            detail={"Html, CSS, JS, Bootstrap"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Reactjs Developer"}
            detail={"Html, Css, JavaScript, React, Git and Github"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Web Design"}
            detail={
              "Html, CSS, Javascript"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      
    </div>
  );
};

export default Services;