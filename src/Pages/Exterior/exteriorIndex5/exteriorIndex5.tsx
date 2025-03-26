import React, { useState } from "react";
import Styles from './exteriorIndex5.module.css';
import img1 from "../../../assets/exterior/image1.png";
import img2 from "../../../assets/exterior/image2.png";
import img3 from "../../../assets/exterior/image3.png";
import img4 from "../../../assets/exterior/image4.png";
import img5 from "../../../assets/exterior/image5.png";
import img6 from "../../../assets/exterior/image6.png";
import img7 from "../../../assets/exterior/image7.png";
import img8 from "../../../assets/exterior/image8.png";

const ExteriorIndex5 = () => {
    const [images, setImages] = useState([img1, img2, img3, img4, img5, img6, img7, img8]);

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.container}>
                {/* {images.map((image, index) => (
                    <img key={index} src={image} alt={`Exterior ${index + 1}`} className={Styles.image} />
                ))} */}
                <img src={img1} alt="" className={Styles.img1}/>
                <img src={img2} alt="" className={Styles.img2}/>
                <img src={img3} alt="" className={Styles.img3}/>
                <img src={img4} alt="" className={Styles.img4}/>
                <img src={img5} alt="" className={Styles.img5}/>
                <img src={img6} alt="" className={Styles.img6}/>
                <img src={img7} alt="" className={Styles.img7}/>
                <img src={img8} alt="" className={Styles.img8}/>
            </div>
        </div>
    );
};

export default ExteriorIndex5;
