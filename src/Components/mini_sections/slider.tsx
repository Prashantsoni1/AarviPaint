// import React from "react";
import styles from "./slider.module.css";
import image1 from "../../../public/assets/banners/Interior (1) 1.png";
import image2 from "../../../public/assets/banners/Interior 1.png";
import image3 from "../../../public/assets/banners/banner1.png";
import CustomCarousel from "./carousel";

const InfiniteImageSlider = () => {
  const images = [image1, image2, image3];

  const carouselItems = images.map((image, index) => (
    <div key={index} style={{ marginBottom: "20px" }}>
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className={styles["slider-image"]}
      />
    </div>
  ));

  const slidesToSlide = {
    desktop: 1,
    tablet: 1,
    mobile: 1,
  };

  return (
    <div className={styles["slider-container"]}>
      <CustomCarousel
        items={carouselItems}
        autoPlay={false}
        slidesToSlide={slidesToSlide}
      />
    </div>
  );
};

export default InfiniteImageSlider;
