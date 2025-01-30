import React from "react";
import Styles from "./testimonal.module.css";
import CustomCarousel from "../carousel";
import testi1 from "../../../assets/testimonial/testi1.png";
import testi2 from "../../../assets/testimonial/testi2.png";
import testi3 from "../../../assets/testimonial/testi3.png";
import testi4 from "../../../assets/testimonial/testi4.png";
import testi5 from "../../../assets/testimonial/testi5.png";
import testi6 from "../../../assets/testimonial/testi6.png";
import bg from "../../../assets/images/bg.png";

const Testimonal = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  
  const testimonials = [
    {
      image: testi1,
      text: "Aarvi Paints’ wall putty gave my walls a smooth and flawless look. Perfect base for painting!",
      name: "Megha Linha",
    },
    {
      image: testi2,
      text: "I used Aarvi Paints’ emulsion, and the finish is just amazing! My home looks brand new.",
      name: "Rajesh Kumar",
    },
    {
      image: testi3,
      text: "The durability of Aarvi Paints' exterior paint is incredible. Even after years, it still looks fresh!",
      name: "Sneha Verma",
    },
    {
      image: testi4,
      text: "Aarvi Paints offers a great range of colors. I found the perfect shade for my living room!",
      name: "Amit Patel",
    },
    {
      image: testi5,
      text: "No more damp walls! Thanks to Aarvi Paints’ waterproof solutions. Highly recommended!",
      name: "Priya Sharma",
    },
    {
      image: testi6,
      text: "Their eco-friendly paints are safe for kids and pets. I love the quality and finish!",
      name: "Anjali Rao",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [testimonials.length]);

  const carouselItems = testimonials.map((testimonial, index) => (
    <div key={index}>
      <div className={Styles.main_testimonial}>
        <img
          src={testimonial.image}
          alt={`Slide ${index + 1}`}
          className={Styles["slider-image"]}
        />
        <div className={Styles.testimonial_discrption}>
          <p>"{testimonial.text}"</p>
          <h4>{testimonial.name}</h4>
        </div>
      </div>
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
        <div className={Styles.heading}>
          <h3>What Our</h3>
          <h1>Customer</h1>
          <h1>Say!</h1>
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

export default Testimonal;