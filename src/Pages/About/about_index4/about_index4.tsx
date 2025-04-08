// import React from "react";
import Styles from "./about_index4.module.css";
// import backgroundImg from "../../../../public/assets/about/aboutIndex4/TVwall.jpg";
import Video from "../../../../public/assets/about/aboutIndex4/promo.mp4";

const AboutIndex4 = () => {
  return (
    <div className={Styles.mainContainer}>
      <video className={Styles.video} autoPlay loop muted playsInline>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default AboutIndex4;
