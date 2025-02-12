import React from "react";
import Styles from "./service.module.css";
import modal from "../../../assets/service/service.png";
import { WbSunny, Spa, Palette, Brush, Star, EnergySavingsLeaf } from "@mui/icons-material";
import arrow from '../../../assets/icons/right_arrow_blc.png'
import interior from '../../../assets/service/interior.png'
import exterior from '../../../assets/service/exterior.png'
const Services = () => {
  const contentData = {
    heading: "Transform Your Home with Our Expert Painting Services.",
    paragraph: " Take the guesswork out of painting costs. Measure, choose,  and  calculate effortlessly to design a budget that fits your vision and  space. Transform your walls with confidence!",
  }
  return (
    <>
      <div className={Styles.service_main}>
        <div className={Styles.service_discription}>
        <h2 className={Styles.heading}>{contentData.heading}</h2>
          <div className={Styles.service_card}>
            <div className={Styles.blur_card1}>
            <div className={Styles.gradient_overlay}></div> {/* Gradient div */}
              <h2>Interior Paint</h2>
              <div style={{ width: "161px", height: "1px", backgroundColor: "#FFFFFF" }}></div>
              <div className={Styles.content}>
                <p>Achieve a smooth, vibrant, and elegant finish with our premium interior emulsion paints.</p>
                <div className={Styles.booking_button}>
                  <a href="#">
                    <img src={arrow} alt="Arrow" className={Styles.arrow_icon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={Styles.blur_card2}>
            <div className={Styles.gradient_overlay}></div> {/* Gradient div */}
              <h2>Exterior Paint</h2>
              <div style={{ width: "161px", height: "1px", backgroundColor: "#FFFFFF" }}></div>
              <div className={Styles.content}>
                <p>Achieve a smooth, vibrant, and elegant finish with our premium interior emulsion paints.</p>
                <div className={Styles.booking_button}>
                  <a href="#">
                    <img src={arrow} alt="Arrow" className={Styles.arrow_icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={modal} alt="" className={Styles.modal}  data-aos="zoom-in" data-aos-offset="500" />
      </div>
    </>
  );
};

export default Services;
