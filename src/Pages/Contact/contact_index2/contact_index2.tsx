
import React from "react";
import styles from './contact_index2.module.css';
import locationIcon from "../../../assets/contact/location 2.png"
import phoneIcon from "../../../assets/contact/phone-call 2.png"
import emailIcon from "../../../assets/contact/mail 2.png"
const ContactIndex2 = () => {
  return (
    <div className={styles.container}>
      {/* Map Section */}
      <div className={styles.map}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7576094956114!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzExLjYiTiA3NcKwNTEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1613821942694!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Details Section */}
      <div className={styles.contactDetails}>
        <div className={styles.head}>
          <div className={styles.heading}>Contact us</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.infoContainer}>
          <img src={locationIcon} alt="" />
          <p> 460 Badia keema, Dudhiya, Indore 452001</p>
        </div>
        <div className={styles.infoContainer}>
          <img src={phoneIcon} alt="" />
          <p> +91-9926822111</p>
        </div>
        <div className={styles.infoContainer}>
          <img src={emailIcon} alt="" />
          <p>
            <a href="mailto:aarvipoints@gmail.com">aarvipoints@gmail.com</a>
          </p>
        </div>

        <div>
          <h3>Social Link</h3>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactIndex2;
