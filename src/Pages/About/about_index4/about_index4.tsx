import React from "react";
import Styles from './about_index4.module.css';
import backgroundImg from '../../../../public/assets/about/aboutIndex4/Group 78.png';

const AboutIndex4 = () => {
    return (
        <div className={Styles.mainContainer}>
            <img src={backgroundImg} alt="Background" className={Styles.image} />
            <iframe className={Styles.video} width="390" height="180" src="https://www.youtube.com/embed/4AQM7-qm3lo?si=IF5JRw3MxiRv0KLM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default AboutIndex4;
