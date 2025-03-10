
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme/theme";
import Home from "../Pages/Home/home";
import About from "../Pages/About/about";
import Services from "../Pages/Services/services";
import Products from "../Pages/Products/product";
import Contact from "../Pages/Contact/contact";
import BookingPage from "../Pages/Booking/booking";
import DealersPage from "../Pages/DealersInfo/dealersInfo";
import Login from "../Pages/Login/login";
import StickyNavbar from "../Components/Common/Navbar/navbar";
import Request from "../Components/mini_sections/request-form/reaquest";
import Footer from "../Components/Common/Footer/footer";
BookingPage
const AllRoutes: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <StickyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/dealers" element={<DealersPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Request/>
            <Footer/>
        </Router>
        </ThemeProvider>
    );
};

export default AllRoutes;


