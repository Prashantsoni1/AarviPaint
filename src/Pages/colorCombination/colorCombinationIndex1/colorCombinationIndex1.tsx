
import React from "react";
import Styles from './colorCombinationIndex1.module.css'
import background from '../../../assets/color_Combination/contemporary-interior-design-ideas-for-your-home 2.png';
const Color_combinationIndex1 = () => {

    return (

        <div className={Styles.main}>
            <div className={Styles.background}>
                <img src={background} alt="background" className={Styles.backgroundImg} />
            </div>
            <div className={Styles.gradient_container}></div>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.heading}>Bring Your Walls to Life with Aarvi Paints' AI Visualizer</div>
                    <div className={Styles.para}>Explore endless color possibilities for your home. Use our AI technology to preview and choose the perfect shades effortlessly!</div>
                </div>
            </div>
        </div>

    )
};

export default Color_combinationIndex1;