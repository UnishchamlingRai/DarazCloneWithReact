import React, { useEffect, useState } from "react";
import style from "./Slider.module.css"; // Import Slider CSS
import { img1, img2, img3, img4 } from "../../../assets/SliderImg/index";

function Slider() {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(
    function () {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000);
    },
    [images.length, currentImageIndex]
  );

  return (
    <div className={style.slider}>
      <img src={`${images[currentImageIndex]}`} alt="Slider" />

      <button
        type="button"
        className={style["prev-button"]}
        onClick={handlePrevClick}
      >
        <i className={`${style.fas} ${style["fa-chevron-left"]}`}>Prev</i>{" "}
        {/* Font Awesome left chevron icon */}
      </button>
      <button
        type="button"
        className={style["next-button"]}
        onClick={handleNextClick}
      >
        <i className={`${style.fas} ${style["fa-chevron-right"]}`}>Next</i>{" "}
        {/* Font Awesome right chevron icon */}
      </button>
    </div>
  );
}

export default Slider;
