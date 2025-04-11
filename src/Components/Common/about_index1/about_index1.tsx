// import React from "react";
import bucketsgroup from "../../../../public/assets/about/aboutIndex1/paintbuckets.png";
import background from "../../../../public/assets/about/aboutIndex1/Lighting 1.png";
import "@fontsource/poppins";
import Styles from "./about_index1.module.css";

const AboutIndex1 = () => {
  const contentData = {
    heading: "ABOUT US",
    paragraph:
      "Bring color to your life as close to your heart with our range of Color Play",
  };
  return (
    <div className={Styles.main}>
      <img
        src={background}
        alt="background"
        className={Styles.backgroundImage}
      />
      <div className={Styles.container2}>
        <img
          src={bucketsgroup}
          alt="buckets group"
          className={Styles.bucketImg}
        />
      </div>
      <div className={Styles.overlay}>
        <div className={Styles.gradient_container}></div>
        <div className={Styles.container1}>
          <div>
            <div className={Styles.heading}>{contentData.heading}</div>
          </div>
          <p className={Styles.para}>{contentData.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIndex1;
