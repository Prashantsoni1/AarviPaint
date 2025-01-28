import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CustomCarouselProps {
  items: React.ReactNode[]; // Array of items to display in the carousel
  autoPlay?: boolean; // Optional autoPlay prop
  slidesToSlide?: { desktop: number; tablet: number; mobile: number }; // Responsive slidesToSlide configuration
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  items,
  autoPlay = true,
  slidesToSlide = { desktop: 3, tablet: 2, mobile: 1 }, // Default values for slidesToSlide
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: slidesToSlide.desktop, // Adjusted for responsive slide count
      slidesToSlide: slidesToSlide.desktop, // Slides to slide
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: slidesToSlide.tablet, // Adjusted for responsive slide count
      slidesToSlide: slidesToSlide.tablet, // Slides to slide
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: slidesToSlide.mobile, // Adjusted for responsive slide count
      slidesToSlide: slidesToSlide.mobile, // Slides to slide
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // Render carousel on server-side
      infinite={true}
      autoPlay={autoPlay}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 0.7s ease-in-out" // Smooth slide transition
      transitionDuration={700} // Transition duration (in ms)
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
