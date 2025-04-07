import React from "react";
import Container from "@mui/material/Container";
import Styles from "./dealer.module.css";
import phone from "../../../../public/assets/Dealer/shop.png";
import man from "../../../../public/assets/Dealer/dealguid.png";

const Dealer = () => {
  const contentData ={
    heading : "Find an Aarvi Paints Dealer Near You",
    paragraph: "Connect with the closest Aarvi Paints dealer for the best products and service, from our extensive network in your area.",
}
  return (
    <>
     <Container>
      <div className={Styles.Deal_main}>
        <div className={Styles.Deal_section}>
          <div className={Styles.Deal_content}>
            <h2>{contentData.heading}</h2>
            <p>{contentData.paragraph}</p>
            <div className={Styles.booking_button}>
              <a href="/dealers">
                <p className={Styles.booking_btn}>Find Now</p>
              </a>
            </div>
          </div>
        </div>
        <img src={man} alt="baclground" className={Styles.side_man} data-aos="zoom-in" data-aos-offset="500"/>
        <img src={phone} alt="baclground" className={Styles.side_shop} data-aos="zoom-in" data-aos-offset="500"/>
      </div>
      </Container>
    </>
  );
};

export default Dealer;
