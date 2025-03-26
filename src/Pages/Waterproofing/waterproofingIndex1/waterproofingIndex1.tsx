
import React from "react";
import background from "../../../assets/waterproofing/Group 161.png"
import Styles from './waterproofingIndex1.module.css'
const WaterproofingIndex1 = () => {

    return (

        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.textContainer}>
                <div className={Styles.heading}>WATERPROOFING</div>
                <div className={Styles.para}>
                    At Aarvi Paints, we provide high-quality waterproofing solutions to safeguard
                    your walls, roofs, and surfaces from water damage, leakage, and dampness. Our
                    innovative products ensure long-lasting protection and enhance the durability
                    of your home and commercial spaces.
                </div>
            </div>
        </div>

    )
};

export default WaterproofingIndex1;