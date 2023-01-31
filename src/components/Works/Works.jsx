import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import ReactLogo from "../../img/react-logo.png";
import JavascriptLogo from "../../img/javascript-logo.png";
import MernLogo from "../../img/mern-stack-logo.png";
import HtmlLogo from "../../img/html-logo.png";
import CssLogo from "../../img/css-logo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Technologies & Frameworks</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button h-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={ReactLogo} alt="ReactLogo" style={{width: "150px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={JavascriptLogo} alt="JavascriptLogo"  style={{width: "200px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={MernLogo} alt="MernLogo"  style={{width: "200px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={CssLogo} alt="CssLogo"  style={{width: "100px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={HtmlLogo} alt="HtmlLogo"  style={{width: "250px"}}/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;