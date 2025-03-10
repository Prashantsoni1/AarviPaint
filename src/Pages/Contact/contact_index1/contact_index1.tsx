import React from "react";
import Styles from "./contact_index1.module.css";
import background from "../../../assets/contact/contact bg 1.png";

const ContactIndex1 = () => {
    return (
        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.textContainer}>
                <div className={Styles.heading}>CONTACT US</div>
                <div className={Styles.para}>
                    Have questions or need assistance? Get in touch with us! Our team is here
                    to help with inquiries about our products, services, or any other concerns.
                    Reach out via phone, email, or by filling out the contact form below. We’ll
                    get back to you as soon as possible!
                </div>
            </div>
        </div>
    );
};

export default ContactIndex1;
