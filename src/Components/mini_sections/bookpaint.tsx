import React, { useState, ChangeEvent } from "react";
import styles from "./bookpaint.module.css";
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
interface FormData {
  name: string;
  email: string;
  number: string;
  pincode: string;
  updateOnWhatsApp: boolean;
  homeowner: boolean;
  contractor: boolean;
}

const BookPaint = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    pincode: "",
    updateOnWhatsApp: false,
    homeowner: false,
    contractor: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        homeowner: name === "homeowner" ? checked : false,
        contractor: name === "contractor" ? checked : false,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleModal = () => {
    setShowModal(true);
  };

  // Handle toggle switch for WhatsApp updates
  const handleToggleWhatsApp = () => {
    setFormData((prevData) => ({
      ...prevData,
      updateOnWhatsApp: !prevData.updateOnWhatsApp,
    }));
  };
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
          <div className={styles.bookingBox} onClick={handleModal}>
            <p className={styles.booking_btn}>Book your free site</p>{" "}
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <h2>Book your free site visit</h2>
            <div className={styles.modalContent}>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Number"
                />
              </div>
              <div className={styles.inputRow}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Pin Code"
                />
              </div>
              {/* Capsule-Style Toggle Switch */}
              <div className={styles.toggleContainer}>
                <div className={styles.toggleSwitch} onClick={handleToggleWhatsApp}>
                  <div className={`${styles.toggleCircle} ${formData.updateOnWhatsApp ? styles.active : ""}`}></div>
                </div>
                <span>Update me on WhatsApp</span>
              </div>
              {/* Checkboxes */}
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="homeowner"
                    checked={formData.homeowner}
                    onChange={handleInputChange}
                  />
                  I am a homeowner looking for the perfect paint for my space.
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="contractor"
                    checked={formData.contractor}
                    onChange={handleInputChange}
                  />
                  I am a contractor searching for premium paints for my projects.
                </label>
              </div>
            </div>
            <div className={styles.modalButtons}>
              <button className={styles.button} onClick={closeModal}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookPaint;
