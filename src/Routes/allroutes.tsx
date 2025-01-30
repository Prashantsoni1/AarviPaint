
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout";
import Home from "../Pages/Home/home";
import About from "../Pages/About/about";
import Services from "../Pages/Services/services";
import Products from "../Pages/Products/product";
import Contact from "../Pages/Contact/contact";
const AllRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>   
    );
};

export default AllRoutes;

