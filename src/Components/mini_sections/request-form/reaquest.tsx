import React, { useState } from "react";
import Styles from "./request.module.css";
import playstore from "../../../assets/images/playstore.png";
import appstore from "../../../assets/images/appstore.png";
import phone from "../../../assets/request/reques-side.png";

const Request = () => {
  // Step 1: Create a state to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
  });

  // Step 2: Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Log the form data (for now)
    console.log("Form Data:", formData);



    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      postalCode: "",
      message: "",
    });
  };
  return (
    <>
      <div className={Styles.request_main}>
        <div className={Styles.request_section}>
          <div className={Styles.request_content}>
            <h2>Request a Quote</h2>
            <div className={Styles.request_form} >
              <div className={Styles.form_input}>
                <input type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange} />
                <input type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange} />
              </div>
              <div className={Styles.form_input}>
                <input type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange} />
                <input type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange} />
              </div>
              <textarea name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange} />
              <button className={Styles.hover_button} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <img src={phone} alt="baclground" className={Styles.side_phone} data-aos="zoom-in" data-aos-offset="500" />
      </div>
    </>
  );
};

export default Request;
