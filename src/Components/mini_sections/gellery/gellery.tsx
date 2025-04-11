import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
      duration: 1000,
      once: true,
    });
  }, []);

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

  const carouselItems = images.map((image, index) => (
    <div
      key={index}
      data-aos="zoom-in"
      data-aos-offset="500"
      className="flex justify-center items-center w-full mb-6 "
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
    <section
      className="relative bg-[url('../../../../public/assets/images/footer.png')] mb-[200px] py-[50px] md:py-[30px] flex justify-end overflow-hidden"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Rotated Heading */}
      <div className="absolute left-[-50px] md:left-[-69px] top-[40%] -rotate-90 origin-left-top z-10">
        <h1 className="text-white text-[55px] md:text-[75px] leading-0 p-0 font-bold m-0">
          Gallery
        </h1>
      </div>

      {/* Carousel Section */}
      <div className="w-[80%] md:w-[90%] mr-2.5 md:mr-0">
        <CustomCarousel
          items={carouselItems}
          autoPlay={true}
          slidesToSlide={slidesToSlide}
        />
      </div>
    </section>
  );
};

export default Gellery;
