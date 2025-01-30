import React from "react";
import Styles from './visualizer.module.css'
import arrow from '../../../assets/visualizer/arrows.png'
import visual from '../../../assets/visualizer/visual.gif'


const Visualizer = () => {
  

  return (
    <>
    <div className={Styles.visulizer_main}>
        <div>
            <h2 className={Styles.heading} >Bring Your Walls to Life with Aarvi Paints' AI Visualizer</h2>

            <p className={Styles.Title}>Explore endless color possibilities for your home. Use our AI technology to preview and choose the perfect shades effortlessly!</p>

            <div className={Styles.visualizer}>
                <img src={arrow} alt="Arrow" className={Styles.arrow} />
                <div className={Styles.visual}>
                    <img src={visual} alt="Visual"/>
                </div>
                <img src={arrow} alt="Arrow" className={Styles.arrow2} />
            </div>
        </div>
    </div>
    </>
  );
};

export default Visualizer;
