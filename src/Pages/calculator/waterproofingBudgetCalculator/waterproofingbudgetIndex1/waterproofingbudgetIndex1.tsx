import React from "react";
import Styles from './waterproofingbudgetIndex1.module.css'
import background from "../../../../assets/waterproofingBudget/3d-room-interior-with-classic-design-furniture (1) 2.png"
import sideImg from "../../../../assets/waterproofingBudget/front-view-young-woman-white-blouse-holding-big-calculator-white-desk-office-female-emotion-feeling-job-worker-white 1.png"
const WaterproofingBudgetIndex1 = () => {

    return (

        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.container1}>
                <div className={Styles.textContainer}>
                    <div className={Styles.heading}>WATERPROOFING CALCULATOR</div>
                    <div className={Styles.para}>
                        Discover the Perfect Paints for Every Surface!  Explore our wide range of high-quality
                        wall paints, designed to add beauty and durability to your space. Find the perfect shade today!
                    </div>
                </div>
            </div>
            <div className={Styles.container2}>
                <img src={sideImg} alt="" className={Styles.sideImg}/>
            </div>

        </div>

    )
};

export default WaterproofingBudgetIndex1;