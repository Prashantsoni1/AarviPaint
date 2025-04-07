import React from "react";
import Styles from "./download.module.css";
import Container from "@mui/material/Container";
import playstore from "../../../../public/assets/images/playstore.png";
import appstore from "../../../../public/assets/images/appstore.png";
import phone from "../../../../public/assets/downloads/app-img.png";

const Download = () => {
  const contentData ={
    heading : "Download App Now!",
    paragraph: "Explore vibrant colors, visualize your space, and shop effortlessly. Transform your home with ease—download today!",
}
  return (
    <>
    <Container>
      <div className={Styles.download_main}>
        <div className={Styles.download_section}>
          <div className={Styles.download_content} data-aos="zoom-out-up" data-aos-offset="500">
            <h1>{contentData.heading}</h1>
            <p>
              {contentData.paragraph}
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
