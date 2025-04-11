// import React from "react";
import Styles from './color_combinationIndex1.module.css'
import background from "../../../../public/assets/colorCombination/Group 165.png"
import sideImg from "../../../../public/assets/colorCombination/man-with-fan 2.png"
const ColorCombinationIndex1 = () => {

    return (

        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.content}>
                <div className={Styles.container1}>
                <h1 className={Styles.heading}>Color Palettes</h1>
                        <p className={Styles.para}>
                        Discover the perfect shades for your space with Aarvi Paints. From bold to subtle tones, explore our high-quality color collection and get inspired to transform your walls.
                        </p>
                    <div className={Styles.textContainer}>
                        
                    </div>
                </div>
                <div className={Styles.container2}>
                    <img src={sideImg} alt="" className={Styles.sideImg} />
                </div>
            </div>

        </div>

    )
};
export default ColorCombinationIndex1;
