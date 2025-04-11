// import React from "react";
import CustomCarousel from "../carousel";
import testi1 from "../../../../public/assets/testimonial/testi1.png";
import testi2 from "../../../../public/assets/testimonial/testi2.png";
import testi3 from "../../../../public/assets/testimonial/testi3.png";
import testi4 from "../../../../public/assets/testimonial/testi4.png";
import testi5 from "../../../../public/assets/testimonial/testi5.png";
import testi6 from "../../../../public/assets/testimonial/testi6.png";
import bg from "../../../../public/assets/images/bg.png";

const Testimonal = () => {
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

  const carouselItems = testimonials.map((testimonial, index) => (
    <div key={index} data-aos="zoom-in" data-aos-offset="500">
      <div className="bg-white rounded-[20px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] w-[275px] sm:w-[90%] mx-auto mb-[30px]">
        <img
          src={testimonial.image}
          alt={`Slide ${index + 1}`}
          className="w-[275px] sm:w-full h-[200px] object-cover rounded-t-[20px]"
        />
        <div className="text-center px-5 py-3">
          <p className="text-sm">"{testimonial.text}"</p>
          <h4 className="mt-2 font-semibold">{testimonial.name}</h4>
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
    <section className="relative z-[999] flex flex-col lg:flex-row items-center justify-between py-[50px] px-2">
      <div className="absolute top-0 left-[15%] lg:block hidden w-[75%] rotate-[-6deg]">
        <img src={bg} alt="Background" className="w-full" />
      </div>

      <div
        className="relative text-left mb-6 lg:mb-0 lg:ml-5"
        data-aos="zoom-in"
        data-aos-offset="500"
      >
        <h3 className="text-[30px] font-medium text-[#525252] m-0">What Our</h3>
        <h1 className="text-[70px] lg:text-[75px] text-black m-0 leading-none">Customer</h1>
        <h1 className="text-[70px] lg:text-[75px] text-black m-0 leading-none">Say!</h1>
      </div>

      <div className="w-full lg:w-[70%]">
        <CustomCarousel
          items={carouselItems}
          autoPlay={true}
          slidesToSlide={slidesToSlide}
        />
      </div>
    </section>
  );
};

export default Testimonal;
