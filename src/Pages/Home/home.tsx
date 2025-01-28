import Navbar from "../../Components/Common/Navbar/navbar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import InfiniteImageSlider from "../../Components/mini_sections/slider";
import ParallaxComponent from "../../Components/mini_sections/parallexcontainer";
import BookPaint from "../../Components/mini_sections/bookpaint";
import Visualizer from "../../Components/mini_sections/Visalizer/Visualizer";
import CustomCarousel from "../../Components/mini_sections/carousel";
import Download from "../../Components/mini_sections/download/download";

const Home = () => {

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
      <ThemeProvider theme={theme}>
      <Navbar />
      <InfiniteImageSlider/>
      <BookPaint/>
      <Visualizer/>
      <ParallaxComponent/>
      <Download/>
      <CustomCarousel items={carouselItems} autoPlay={false} slidesToSlide={slidesToSlide} />
      

    </ThemeProvider>
   
    )
  };
  
  export default Home;