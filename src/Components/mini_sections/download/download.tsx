import React from "react";
import Styles from "./download.module.css";
import Container from "@mui/material/Container";
import playstore from "../../../assets/images/playstore.png";
import appstore from "../../../assets/images/appstore.png";
import phone from "../../../assets/downloads/app-img.png";

const Download = () => {
  return (
    <>
    <Container>
      <div className={Styles.download_main}>
        <div className={Styles.download_section}>
          <div className={Styles.download_content} data-aos="zoom-out-up" data-aos-offset="500">
            <h1>Download App Now!</h1>
            <p>
              Explore vibrant colors, visualize your space, and shop
              effortlessly. Transform your home with ease—download today!
            </p>
            <div className={Styles.appstore}>
              <a href="#">
                <img src={playstore} className={Styles.stores} />
              </a>
              <a href="#">
                <img src={appstore} className={Styles.stores} />
              </a>
            </div>
          </div>
        </div>
        <img src={phone} alt="baclground" className={Styles.side_phone} data-aos="zoom-out-up" data-aos-offset="500" />
      </div>
      </Container>
    </>
  );
};

export default Download;
