import React from "react";
import styles from "./slider.module.css";
import image1 from "../../assets/banners/Interior (1) 1.png";
import image2 from "../../assets/banners/Interior 1.png";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import CustomCarousel from "./carousel"; // Assuming CustomCarousel is properly imported

const InfiniteImageSlider = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const images = [image1, image2];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % images.length);
    }, 5000); // Change interval for smooth transition

    return () => {
      clearInterval(timer); // Clear interval on component unmount
    };
  }, [images.length]);

  // Create an array of images to be used in the CustomCarousel
  const carouselItems = images.map((image, index) => (
    <div key={index}>
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

      {/* <div className={styles.appstore}>
        <a href="#">
          <img src={playstore} className={styles.stores} />
        </a>
        <a href="#">
          <img src={appstore} className={styles.stores} />
        </a>
      </div> */}
    </div>
  );
};

export default InfiniteImageSlider;
