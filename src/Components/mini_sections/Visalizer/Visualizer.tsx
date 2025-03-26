import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from './visualizer.module.css'
import arrow from '../../../assets/visualizer/arrows.png'
import visual from '../../../assets/visualizer/visual.gif'
import sideImg from "../../../assets/visualizer/interior-design-with-photoframes-couch 3 (2).png"
import imgUpload from "../../../assets/visualizer/image- 1.png"
const Visualizer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const contentData = {
    heading: "Bring Your Walls to Life with Aarvi Paints' AI Visualizer",
    paragraph: "Explore endless color possibilities for your home. Use our AI technology to preview and choose the perfect shades effortlessly!",
  }
  const handleNavigation = () => {
    navigate("/services/visualizer");
  };

  return (
    <>
      <div className={Styles.visulizer_main}>
        <div>
          <h2 className={Styles.heading} data-aos="zoom-in">{contentData.heading}</h2>

          <p className={Styles.Title} data-aos="zoom-in">{contentData.paragraph}</p>

          <div className={Styles.visualizer}>
            <img src={arrow} alt="Arrow" className={Styles.arrow} data-aos="fade-right" data-aos-offset="500" />
            <div className={Styles.visual} onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }} >
              <img src={visual} alt="Visual" data-aos="zoom-in" data-aos-offset="700" />
            </div>
            <div data-aos="fade-left" data-aos-offset="500">
              <img src={arrow} alt="Arrow" className={Styles.arrow2} />

            </div>
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      {isOpen && (
        <div className={Styles.modalOverlay}>
          <div className={Styles.modalContent}>
            <span className={Styles.closeButton} onClick={() => setIsOpen(false)}>&times;</span>
            <div className={Styles.modalBody}>
              <img src={sideImg} alt="Visualizer Preview" className={Styles.modalImage} />
              <div className={Styles.modalText}>
                <h2>{contentData.heading}</h2>
                <div className={Styles.uploadBox}>
                  <img src={imgUpload} alt="" />
                  <p>Upload Images</p>
                </div>
                <button className={Styles.btn} onClick={handleNavigation}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Visualizer;
