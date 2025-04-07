import React from "react";
import Styles from "./brouser.module.css";
import CustomCarousel from "../../mini_sections/carousel";
import brouser from "../../../../public/assets/brouser/b1.png";
import brouser2 from "../../../../public/assets/brouser/b2.png";
import brouser3 from "../../../../public/assets/brouser/b3.png";
import brouser4 from "../../../../public/assets/brouser/b4.png";
import brouser5 from "../../../../public/assets/brouser/b5.png";
import brouser6 from "../../../../public/assets/brouser/b6.png";
import brouser7 from "../../../../public/assets/brouser/b7.png";
import bg from "../../../../public/assets/images/bg.png";

const Brouser = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const images = [
    brouser,
    brouser2,
    brouser3,
    brouser4,
    brouser5,
    brouser6,
    brouser7,
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
    <div key={index} data-aos="zoom-in" data-aos-offset="500">
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className={Styles["slider-image"]}
      />
    </div>
  ));

  const slidesToSlide = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };
  return (
    <>
      <section className={Styles.gellery_main}>
        <div className={Styles.brouser_container}>
          <img src={bg} alt="" />
        </div>
        <div className={Styles.gellery_slide}>
          <CustomCarousel
            items={carouselItems}
            autoPlay={true}
            slidesToSlide={slidesToSlide}
          />
        </div>
        <div className={Styles.heading} data-aos="zoom-in" data-aos-offset="500" >
            <h3>Download</h3>
          <h1>Our</h1>
          <h1>Brochure</h1>
        </div>
      </section>
    </>
  );
};

export default Brouser;
