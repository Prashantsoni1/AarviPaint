import styles from "./gellery.module.css";
import CustomCarousel from "../../mini_sections/carousel";



const Gellery = () => {
    const carouselItems = [
        <div>Item 1</div>,
        <div>Item 2</div>,
        <div>Item 3</div>,
        <div>Item 4</div>,
      ];
      const slidesToSlide = {
        desktop: 1,  // 3 items per slide on desktop
        tablet: 2,   // 2 items per slide on tablet
        mobile: 1,   // 1 item per slide on mobile
      };
  return (
    <>
      
        <section >
          <div>
          <CustomCarousel items={carouselItems} autoPlay={false} slidesToSlide={slidesToSlide} />

          </div>
        </section>
      
    </>
  );
};

export default Gellery;
