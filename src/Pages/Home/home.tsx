import Navbar from "../../Components/Common/Navbar/navbar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import InfiniteImageSlider from "../../Components/mini_sections/slider";
import ParallaxComponent from "../../Components/mini_sections/parallexcontainer";
import BookPaint from "../../Components/mini_sections/bookpaint";
import Visualizer from "../../Components/mini_sections/Visalizer/Visualizer";
import Dealer from "../../Components/mini_sections/dealer/dealer";
import Download from "../../Components/mini_sections/download/download";
import Request from "../../Components/mini_sections/request-form/reaquest";
import Footer from "../../Components/Common/Footer/footer";
import Gellery from "../../Components/mini_sections/gellery/gellery";
import Brouser from "../../Components/mini_sections/brouser/brouser";
import Testimonal from "../../Components/mini_sections/testimonal/testimonal"
import Calculator from "../../Components/Calculator/calculator";
import MobileNavbar from "../../Components/Common/BottomNavbar/bottomNavbar";
import Services from "../../Components/mini_sections/services/service"
const Home = () => {

    return (
      <ThemeProvider theme={theme}>
      <Navbar />
      <InfiniteImageSlider/>
      <BookPaint/>
      <Visualizer/>
      <Services/>
      <ParallaxComponent/>
      <Dealer/>
      <Gellery/>
      <Calculator/>
      <Download/>
      <Brouser/>
      <Testimonal/>
      <Request/>
      <Footer/>
      <MobileNavbar/>

    </ThemeProvider>

   
    )
  };
  
  export default Home;