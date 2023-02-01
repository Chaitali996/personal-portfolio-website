import React, { useContext } from "react";
import "./Intro.css";
import myImg from "../../img/myImg.png";
import glassesimoji from "../../img/glassesimoji-crimson.png";
import thumbup from "../../img/thumbup-crimson.png";
import crown from "../../img/crown-crimson.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github-crimson.png";
import LinkedIn from "../../img/linkedin-crimson.png";
import Instagram from "../../img/instagram-crimson.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
         
          <span>Chaitali Ahire</span>
          <span>
          I'm a frontend developer looking for an opportunity<br/> to use 
          my skills in HTML, CSS, JavaScript, and <br/>front-end frameworks 
          to design and develop web <br/>applications that are both visually stunning and easy to use.
            {/* I am a MERN developer looking for an opportunity to utilize my skills in MongoDB, Express.js, React.js, 
            and Node.js to build and maintain full-stack web applications and contribute to the growth of the company. */}
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Chaitali996" target="_blank" rel="noreferrer noopener"><img src={Github} alt="" className="i-img"/></a>
          <a href="https://www.linkedin.com/in/chaitali-ahire-32a776195" target="_blank" rel="noreferrer noopener"><img src={LinkedIn} alt="" className="i-img"/></a>
          <a href="https://www.instagram.com/chaitali_1234/" target="_blank" rel="noreferrer noopener"><img src={Instagram} alt="" className="i-img" /></a>
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right mine" >
        {/* <img src={Vector1} alt="" className="vector1" />
        <img src={Vector2} alt="" className="vector2" /> */}
        <img src={myImg} alt="" className="myImg" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="glassimoji"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv  img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div crownDiv"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Web Design" text2="" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      
    </div>
  );
};

export default Intro;