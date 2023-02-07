import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import myPortfolio from "../../img/myPortfolio.png";
import movie from  "../../img/movie-search-site.png";
import foodProject from "../../img/food-project-img.png";
import passwordGenerator from "../../img/password-generator.png";
import ResponsiveCv from "../../img/responsive-cv-img.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://portfolio-website-chaitali-ahire.netlify.app/" target="_blank" rel="noreferrer"><img src={myPortfolio} alt="" style={{height: "9rem"}}/></a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://food-project-chaitali.netlify.app/" target="_blank" rel="noreferrer"> <img src={foodProject} alt="" style={{height: "9rem"}}/></a>
         
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://chaitali-movies-search-app.netlify.app/" target="_blank" rel="noreferrer"> <img src={movie} alt="" style={{height: "9rem"}} /></a>
       
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://chaitaliahire.netlify.app/" target="_blank" rel="noreferrer"><img src={ResponsiveCv} alt="" style={{height: "9rem"}}/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://chaitali-password-generator.netlify.app/" target="_blank" rel="noreferrer"><img src={passwordGenerator} alt="" style={{height: "9rem"}}/></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
