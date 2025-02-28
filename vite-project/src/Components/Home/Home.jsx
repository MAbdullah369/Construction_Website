import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeImage from "../../Pictures/home2-slider-banner-img-03.jpg";
import HomeImage_02 from "../../Pictures/home2-slider-banner-img-02.jpg";

const Home = () => {
  const [hoverPrevious, setHoverPrevious] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={HomeImage}
              className="d-block w-100 full-width-img"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={HomeImage_02}
              className="d-block w-100 full-width-img"
              alt="Slide 2"
            />
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
    </>
  );
};

export default Home;
