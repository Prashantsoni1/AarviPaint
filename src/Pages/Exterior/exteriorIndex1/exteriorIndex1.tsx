// import React from "react";
import Styles from './exteriorIndex1.module.css'
import background from "../../../../public/assets/exterior/backgroundIndex1.png"
const ExteriorIndex1 = () => {

    return (

        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />

            <div className={Styles.content}>
                <div className={Styles.heading}>Enhance Your Home’s Exterior with Premium Textures</div>
                <div className={Styles.para}>
                    Transform your walls into a masterpiece with Aarvi Paints' exclusive interior textures. Whether you want a modern,
                    elegant, or artistic touch, our high-quality textured finishes add depth and style to any space.
                </div>

            </div>


        </div>

    )
};

export default ExteriorIndex1;