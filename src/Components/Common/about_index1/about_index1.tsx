import React from "react";
import bucketsgroup from '../../../assets/about/aboutIndex1/paintbucketsgroup.png';
import background from '../../../assets/about/aboutIndex1/background.png';
import "@fontsource/poppins";
import Styles from './about_index1.module.css';

const AboutIndex1 = () => {
    return (
        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.overlay}> 
                <div className={Styles.gradient_container}></div>
                <div className={Styles.container1}>
                    <div>
                    <div className={Styles.heading}>ABOUT US</div>
                    <div className={Styles.line}></div>
                    </div> 
                    <p className={Styles.para}>Bring color to your life as close to your heart with our range of Color Play</p>
                </div>
                <div className={Styles.container2}><img src={bucketsgroup} alt="buckets group" /></div>
            </div>
        </div>
    );
};

export default AboutIndex1;