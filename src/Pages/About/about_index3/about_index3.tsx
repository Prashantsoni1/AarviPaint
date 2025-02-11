import React from "react";
import "@fontsource/poppins";
import Styles from './about_index3.module.css'
import sideImg from '../../../assets/about/aboutIndex3/man-with-fan .png'
const AboutIndex3 = () => {
    return (
        <div className={Styles.mainContainer}>
            
            <div className={Styles.container1}>
                <div className={Styles.heading1}>READY TO WORK PASSION</div>
                <div className={Styles.heading2}>Bring color to your life as close to your heart with our range of Color Play</div>
                <p className={Styles.para}>We are experts, innovators, leaders and partners. We do more than paint. We partner 
                    with our customers to empower successful outcomes for every project, every time.</p>
                <p className={Styles.para}>Aarvi Paints offers product solutions for the trade and consumer market and has an 
                    extensive range of products all manufactured according to strict quality standards. 
                    Our product ranges are easy to identify and are positioned to address consumers’
                     specific needs.</p>
            </div>
            <div className={Styles.container2}>
                <img src={sideImg} alt="" className={Styles.sideImage}/>
            </div>
        </div>
    );
};

export default AboutIndex3;