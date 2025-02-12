import React from "react";
import Styles from './about_index4.module.css';
import backgroundImg from '../../../assets/about/aboutIndex4/Group 78.png';
// import aarvi_video from '../../../assets/about/aboutIndex4/aarvi.mp4';

const AboutIndex4 = () => {
    return (
        <div className={Styles.mainContainer}>
            <img src={backgroundImg} alt="Background" className={Styles.image} />
        </div>
    );
};

export default AboutIndex4;
