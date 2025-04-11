// import Navbar from "../../Components/Common/Navbar/navbar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import InfiniteImageSlider from "../../Components/mini_sections/slider";
import ParallaxComponent from "../../Components/mini_sections/parallexcontainer";
import BookPaint from "../../Components/mini_sections/bookpaint";
import Visualizer from "../../Components/mini_sections/Visalizer/Visualizer";
import Download from "../../Components/mini_sections/download/download";

import Gellery from "../../Components/mini_sections/gellery/gellery";
import Brouser from "../../Components/mini_sections/brouser/brouser";
import Testimonal from "../../Components/mini_sections/testimonal/testimonal"
import Calculator from "../../Components/Calculator/calculator";
import Services from "../../Components/mini_sections/services/service"
const Home = () => {

    return (
      <ThemeProvider theme={theme}>
      <InfiniteImageSlider/>
      <BookPaint/>
      <Visualizer/>
      <Services/>
      <ParallaxComponent/>
      <Calculator/>
      <Gellery/>
      
      <Download/>
      <Brouser/>
      <Testimonal/>

    </ThemeProvider>

   
    )
  };
  
  export default Home;