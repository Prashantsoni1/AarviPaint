import React from "react";
import Styles from "./footer.module.css";
import logo from "../../../../../assets/images/logo.png";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import appstore from "../../../../../assets/images/appstore.png";
import playstore from "../../../../../assets/images/playstore.png";
import phone from "../../../../../assets/icons/phone-call (1).png";
import email from "../../../../../assets/icons/mail.png";
import location from "../../../../../assets/icons/location.png"
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <div className={Styles.footer_main}>
        <Container>
          <Grid container spacing={2} sx={{marginBottom:'10px'}}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className={Styles.footer_first}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <p>
                  Transform your living spaces with expert décor advice and
                  personalized interior design services. Let us bring your
                  vision to life with style and functionality.
                </p>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className={Styles.footer_second}>
                <h3>Services</h3>
                <div>
                  <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/products">Calculator</Link></li>
                    <li><Link to="/products">Terms & Condition</Link></li>
                    <li><Link to="/products">FAQ</Link></li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className={Styles.footer_third}>
                <h3>Contact</h3>
                <div>
                  <ul>
                    <li> 
                      <img src={phone} alt="" />
                      <a href="#">+91-9926822111</a>
                    </li>
                    <li>
                    <img src={email} alt="" />
                      <a href="#">aarvipaints@gmail.com</a>
                    </li>
                    <li>
                    <img src={location} alt="" />
                      <a href="#">460 Badia keema, Dudhiya , Indore 452001</a>
                    </li>
                    <li>
                      <a href="#"><Facebook fontSize="large" /></a>
                      <a href="#"> <Instagram fontSize="large" /></a>
                      <a href="#"><Twitter fontSize="large" /></a>
                      <a href="#"><WhatsApp fontSize="large" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className={Styles.footer_second}>
                <h3>Download Now!</h3>
                <p>Download now for a fast, seamless experience! </p>
                <div className={Styles.appstore}>
                  <a href="#">
                    <img src={playstore} className={Styles.stores} />
                  </a>
                  <a href="#">
                    <img src={appstore} className={Styles.stores} />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={Styles.copyright}>
            <p>© 2025 Aarvi Paints. All Rights Reserved.</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
