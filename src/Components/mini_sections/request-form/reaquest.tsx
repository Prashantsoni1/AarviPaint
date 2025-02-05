import React from "react";
import Styles from "./request.module.css";
import playstore from "../../../assets/images/playstore.png";
import appstore from "../../../assets/images/appstore.png";
import phone from "../../../assets/request/reques-side.png";
import { Container } from "@mui/material";

const Request = () => {
  
  return (
    <>
    <Container>
      <div className={Styles.request_main}>
        <div className={Styles.request_section}>
          <div className={Styles.request_content}>
            <h2>Request a Quote</h2>
            <div className={Styles.request_form}>
              <div className={Styles.form_input}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>
              <div className={Styles.form_input}>
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Postal Code" />
              </div>
              <textarea placeholder="Message" rows={4} cols={50} />
              <button type="submit" className={Styles.hover_button}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <img src={phone} alt="baclground" className={Styles.side_phone} data-aos="zoom-in" data-aos-offset="500"/>
      </div>
      </Container>
    </>
  );
};

export default Request;
