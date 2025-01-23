import Navbar from "../../Components/Common/Navbar/navbar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import InfiniteImageSlider from "../../Components/mini_sections/slider";
import ParallaxComponent from "../../Components/mini_sections/parallexcontainer";
import BookPaint from "../../Components/mini_sections/bookpaint";
const Home = () => {
    return (
      <ThemeProvider theme={theme}>
      <Navbar />
      {/* Your other components */}
      <InfiniteImageSlider/>
      <ParallaxComponent/>
      <BookPaint/>

    </ThemeProvider>
   
    );
  };
  
  export default Home;