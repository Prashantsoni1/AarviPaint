// import React from "react";
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
  const images = [
    brouser,
    brouser2,
    brouser3,
    brouser4,
    brouser5,
    brouser6,
    brouser7,
  ];

  const carouselItems = images.map((image, index) => (
    <div
      key={index}
      data-aos="zoom-in"
      data-aos-offset="500"
      className="flex justify-center items-center w-full"
    >
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="w-[90vw] md:w-[275px] h-auto object-contain"
      />
    </div>
  ));

  const slidesToSlide = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };
  

  return (
    <section className="relative z-[999] flex items-center py-[50px] lg:flex-row flex-col-reverse">
      <div className="absolute left-0 md:left-[-20%]  top-0 w-full md:w-[75%] rotate-[-6deg]  lg:block">
        <img src={bg} alt="Background" className="w-full" />
      </div>

      <div className="w-[95%] lg:w-[70%] mx-auto">
        <CustomCarousel
          items={carouselItems}
          autoPlay={true}
          slidesToSlide={slidesToSlide}
        />
      </div>

      <div
        className="ml-0 lg:ml-5 mt-5 lg:mt-0 text-left"
        data-aos="zoom-in"
        data-aos-offset="500"
      >
        <h3 className="text-[30px] font-medium text-[#525252] m-0">Download</h3>
        <h1 className="text-[70px] lg:text-[75px] text-black leading-none m-0">
          Our
        </h1>
        <h1 className="text-[70px] lg:text-[75px] text-black leading-none m-0">
          Brochure
        </h1>
      </div>
    </section>
  );
};

export default Brouser;
