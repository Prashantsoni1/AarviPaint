import React from "react";
import Styles from "./service.module.css";
import modal from "../../../assets/service/service.png";

const Services = () => {
  return (
    <>
      <div className={Styles.service_main}>
        <div className={Styles.service_discription}>
          <h2>Transform Your Home with Our Expert Painting Services</h2>
          <p>
            We offer expert interior and exterior painting, decorative finishes,
            waterproof solutions, eco-friendly options, and professional color
            consultations, ensuring a flawless and hassle-free transformation
            for your home.
          </p>
          <div className={Styles.service_card}>
            <div className={Styles.blur_card}>
              <h2>Interior Paint</h2>
              <p>
                Achieve a smooth, vibrant, and elegant finish with our premium
                interior emulsion paints.
              </p>
              <div className={Styles.booking_button}>
                <a href="#">
                  <p className={Styles.booking_btn}>View More</p>
                </a>
              </div>
            </div>
            <div className={Styles.blur_card}>
              <h2>Interior Paint</h2>
              <p>
                Achieve a smooth, vibrant, and elegant finish with our premium
                interior emulsion paints.
              </p>
              <div className={Styles.booking_button}>
                <a href="#">
                  <p className={Styles.booking_btn}>View More</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <img src={modal} alt="" className={Styles.modal} />
      </div>
    </>
  );
};

export default Services;
