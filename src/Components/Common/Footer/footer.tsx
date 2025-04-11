// import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import logo from "../../../../public/assets/images/logo.png";
import appstore from "../../../../public/assets/images/appstore.png";
import playstore from "../../../../public/assets/images/playstore.png";
import phone from "../../../../public/assets/icons/phone-call (1).png";
import email from "../../../../public/assets/icons/mail.png";
import location from "../../../../public/assets/icons/location.png";

const Footer = () => {
  const services = [
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Calculator", path: "/products" },
    { label: "Terms & Condition", path: "/products" },
    { label: "FAQ", path: "/products" },
  ];

  const contacts = [
    { icon: phone, text: "+91-9926822111", link: "#" },
    { icon: email, text: "aarvipaints@gmail.com", link: "#" },
    {
      icon: location,
      text: "460 Badia keema, Dudhiya , Indore 452001",
      link: "#",
    },
  ];

  const socialIcons = [
    { icon: <Facebook fontSize="large" />, link: "#" },
    { icon: <Instagram fontSize="large" />, link: "#" },
    { icon: <Twitter fontSize="large" />, link: "#" },
    { icon: <WhatsApp fontSize="large" />, link: "#" },
  ];

  return (
    <div className="bg-[url('/assets/images/footer.png')] bg-no-repeat bg-cover pt-5 pb-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          {/* First column */}
          <div className="text-center md:text-left">
            <img src={logo} alt="logo" className="w-[150px] mx-auto md:mx-0 mb-2" />
            <p className="text-gray-700 text-sm">
              Transform your living spaces with expert décor advice and personalized interior design services. Let us bring your vision to life with style and functionality.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-black font-semibold mb-2 relative inline-block after:absolute after:top-1/2 after:-right-[55px] after:w-[50px] after:h-[1px] after:bg-gray-600 after:translate-y-[-50%]">Services</h3>
            <ul className="pl-5 text-sm text-gray-700">
              {services.map((item, i) => (
                <li key={i} className="mb-1">
                  <Link to={item.path} className="text-gray-700">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black font-semibold mb-2 relative inline-block after:absolute after:top-1/2 after:-right-[55px] after:w-[50px] after:h-[1px] after:bg-gray-600 after:translate-y-[-50%]">Contact</h3>
            <ul className="pl-5 text-sm text-gray-700">
              {contacts.map((item, i) => (
                <li key={i} className="flex items-center gap-2 mb-2">
                  <img src={item.icon} alt="" className="w-[20px]" />
                  <a href={item.link} className="w-[90%] text-gray-700">{item.text}</a>
                </li>
              ))}
              <li className="flex gap-3 items-center mt-2">
                {socialIcons.map((item, i) => (
                  <a key={i} href={item.link} className="text-gray-700">{item.icon}</a>
                ))}
              </li>
            </ul>
          </div>

          {/* App Links */}
          <div className="text-center md:text-left">
            <h3 className="text-black font-semibold mb-2 relative inline-block after:absolute after:top-1/2 after:-right-[55px] after:w-[50px] after:h-[1px] after:bg-gray-600 after:translate-y-[-50%]">Download Now!</h3>
            <p className="text-sm text-gray-700">Download now for a fast, seamless experience!</p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#"><img src={playstore} alt="playstore" className="w-[110px]" /></a>
              <a href="#"><img src={appstore} alt="appstore" className="w-[110px]" /></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center border-t border-gray-600 pt-2 text-gray-600 text-sm">
          <p>© 2025 Aarvi Paints. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
