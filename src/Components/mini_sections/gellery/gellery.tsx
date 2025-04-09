import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "./gellery.module.css";
import CustomCarousel from "../../mini_sections/carousel";
import gellery1 from "../../../../public/assets/gellery/gellery1.png";
import gellery2 from "../../../../public/assets/gellery/gellery2.png";
import gellery3 from "../../../../public/assets/gellery/gellery3.png";
import gellery4 from "../../../../public/assets/gellery/gellery4.png";
import gellery5 from "../../../../public/assets/gellery/gellery5.png";
import gellery6 from "../../../../public/assets/gellery/gellery6.png";
import gellery7 from "../../../../public/assets/gellery/gellery7.png";
import gellery8 from "../../../../public/assets/gellery/gellery8.png";

const Gellery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  const images = [
    gellery1,
    gellery2,
    gellery3,
    gellery4,
    gellery5,
    gellery6,
    gellery7,
    gellery8,
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);
  const carouselItems = images.map((image, index) => (
    <div key={index} style={{ marginBottom: "20px" }}>
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className={Styles["slider-image"]}
        data-aos="zoom-in"
        data-aos-offset="500"
      />
    </div>
  ));

  const slidesToSlide = {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  };
  return (
    <>
      <section className={Styles.gellery_main}>
        <div className={Styles.heading}>
          <h1>Gallery</h1>
        </div>
        <div className={Styles.gellery_slide}>
          <CustomCarousel
            items={carouselItems}
            autoPlay={true}
            slidesToSlide={slidesToSlide}
          />
        </div>
      </section>
    </>
  );
};

export default Gellery;
