import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeImage from "../../Pictures/home2-slider-banner-img-03.jpg";
import HomeImage_02 from "../../Pictures/home2-slider-banner-img-02.jpg";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  const [hoverPrevious, setHoverPrevious] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="image-container">
              <img
                src={HomeImage}
                className="d-block w-100 full-width-img"
                alt="Slide 1"
              />
              <div className="image-overlay"></div> 
            </div>
            <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1 className="Building">BUILDING A <br /><span className="blue-text better">BETTER NATION!</span></h1>
              <p className="customStyling">We strongly believe in the values of quality, strength, durability, and reliability</p>
              <div>
              <button className="btn-Learn-More">LEARN MORE</button>
              <button className="btn-Contact-us">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onMouseEnter={() => setHoverPrevious(true)}
          onMouseLeave={() => setHoverPrevious(false)}
        >
          <div className={`hover-box ${hoverPrevious ? "hovered" : ""}`}>
            {hoverPrevious && <span className="hover-text">PREV</span>}
            <ArrowBackIosIcon className="icons" />
          </div>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
        >
          <div className={`hover-box ${hoverNext ? "hovered" : ""}`}>
            {hoverNext && <span className="hover-text">NEXT</span>}
            <ArrowForwardIosIcon className="icons" />
          </div>
        </button>
      </div>

  <HomeServices/>
    </>
  );
  
};

export default Home;