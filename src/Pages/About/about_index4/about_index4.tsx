import React from "react";
import Styles from './about_index4.module.css';
import backgroundImg from '../../../assets/about/aboutIndex4/Group 78.png';

const AboutIndex4 = () => {
    return (
        <div className={Styles.mainContainer}>
            <img src={backgroundImg} alt="Background" className={Styles.image} />
        </div>
    );
};

export default AboutIndex4;
