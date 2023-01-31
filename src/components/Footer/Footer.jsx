import React from "react";
import "./Footer.css";
import Wave from "../../img/wave-crimson.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>chaitaliahire117@gmail.com</span> */}
        <div className="f-icons">
          <a href="https://www.instagram.com/chaitali_1234/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/chaitali-ahire-32a776195"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/Chaitali996"><Gitub color="white" size={"3rem"} /></a>
          

        </div>
        <small className="copyright">Copyright &copy; 2023 Designed By Chaitali Ahire</small>

      </div>
    </div>
  );
};

export default Footer;