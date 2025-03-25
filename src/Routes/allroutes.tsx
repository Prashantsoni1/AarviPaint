import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import Home from "../Pages/Home/home";
import About from "../Pages/About/about";
import Services from "../Pages/Services/services";
import Products from "../Pages/Products/product";
import ProductsDetails from "../Pages/Products/productDetails/productDetails";
import Contact from "../Pages/Contact/contact";
import StickyNavbar from "../Components/Common/Navbar/navbar";
import Request from "../Components/mini_sections/request-form/reaquest";
import Footer from "../Components/Common/Footer/footer";
import Visualizer from "../Pages/visualizer/visualizer";
import Interior from "../Pages/Interior/interior";
import Exterior from "../Pages/Exterior/exterior";
import Waterproofing from "../Pages/Waterproofing/waterproofing";
import Budget from "../Pages/calculator/BudgetCalculator/budget";
import Color_Combination from "../Pages/Color_Combination/color_combination";
import ScrollToTop from "../Components/Common/scrollToTop/scrollToTop";
const Layout: React.FC = () => {
    const location = useLocation();
    const hideNavAndFooter = location.pathname === "/login"; 

    return (
        <>
            {!hideNavAndFooter && <StickyNavbar />}
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/visualizer" element={<Visualizer />} />
                <Route path="/services/interior" element={<Interior />} />
                <Route path="/services/exterior" element={<Exterior />} />
                <Route path="/services/waterproofing" element={<Waterproofing />} />
                <Route path="/products" element={<Products />} />
                <Route path="/colorCombination" element={<Color_Combination/>} />
                <Route path="/products/productDetails" element={<ProductsDetails />} />
                <Route path="/calculator/Budget" element={<Budget />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {!hideNavAndFooter && <Request />}
            {!hideNavAndFooter && <Footer />}
        </>
    );
};

const AllRoutes: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout />
            </Router>
        </ThemeProvider>
    );
};

export default AllRoutes;



