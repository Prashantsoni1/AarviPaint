import React from "react";
import Container from "@mui/material/Container";
import Styles from "./dealer.module.css";
import phone from "../../../assets/Dealer/shop.png";
import man from "../../../assets/Dealer/dealguid.png";

const Dealer = () => {
  
  return (
    <>
     <Container>
      <div className={Styles.Deal_main}>
        <div className={Styles.Deal_section}>
          <div className={Styles.Deal_content}>
            <h2>Find an Aarvi Paints Dealer Near You</h2>
            <p>Connect with the closest Aarvi Paints dealer for the best products and service, from our extensive network in your area.</p>
            <div className={Styles.booking_button}>
              <a href="#">
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
