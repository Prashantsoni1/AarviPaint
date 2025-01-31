import styles from "./bookpaint.module.css";
// import { Box, Grid, Typography, Button } from '@mui/material';
import manPainting from "../../assets/booking_img.png";
import image1 from "../../assets/house 1 (1).png";
import image2 from "../../assets/painting-brush 1.png";
import image3 from "../../assets/pantone 1 (1).png";
import arrow from "../../assets/icons/right_arrow_blc.png";
const steps = [
  {
    count: 1,
    image: image1,
    description:
      "Choose your house for painting with a variety of designs and options.",
  },
  {
    count: 2,
    image: image2,
    description: "Select the painting tools and materials needed for the job.",
  },
  {
    count: 3,
    image: image3,
    description: "Finalize the colors and patterns to personalize your space.",
  },
];


const BookPaint = () => {
  return (
    <>
      
      <div className={styles.main_bg}>
        <img
          src={manPainting}
          alt="Man Painting"
          className={styles.service_img}
        />

        <div className={styles.booking_step}>
          <div>
            <p className={styles.booking_heading}>
              Easy Steps to Book Paint Online
            </p>

            <div className={styles.booking_steps_contain}>
              {steps.map((step, index) => (
                <div className={styles.booking_step_container} data-aos="zoom-in" data-aos-offset="500">
                  <div className={styles.booking_step_icon_count} >
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      style={{
                        width: "100%",
                        maxWidth: "50px",
                        height: "auto",
                      }}
                    />
                    <div className={styles.booking_count}>{step.count}</div>
                  </div>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.booking_button}>
          <a href="/booking">
            <p className={styles.booking_btn}>Book your free site</p>{" "}
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </>
  );
};

export default BookPaint;
