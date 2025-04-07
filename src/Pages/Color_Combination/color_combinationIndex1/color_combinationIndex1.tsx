import React from "react";
import Styles from './color_combinationIndex1.module.css'
import background from "../../../../public/assets/colorCombination/Group 165.png"
import sideImg from "../../../../public/assets/colorCombination/man-with-fan 2.png"
const ColorCombinationIndex1 = () => {

    return (

        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.content}>
                <div className={Styles.container1}>
                    <div className={Styles.textContainer}>
                        <div className={Styles.heading}>COLOR Combination</div>
                        <div className={Styles.para}>
                            Explore our color guide to find the perfect shades for your space. From vibrant hues to subtle tones,
                            Aarvi Paints offers a wide range of high-quality colors to match every style and mood. Browse our
                            collection and get inspired to transform your walls with stunning finishes.
                        </div>
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
