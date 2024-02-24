import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideSection from "./SlideSection";
import Slider from "react-slick";
import styles from "../../../style/components/home/slideSection.module.css";
import { slideSection } from "../../../data/data";
function Slide() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className={styles.slidemainContainer}>
      <Slider {...settings}>
        {slideSection.map(function (value, index) {
          return (
            <SlideSection
              key={index}
              src={value.src}
              alt={value.alt}
              title1={value.title1}
              title2={value.title2}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Slide;
