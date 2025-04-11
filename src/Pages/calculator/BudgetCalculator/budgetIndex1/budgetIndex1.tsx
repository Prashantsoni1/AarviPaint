// import React from "react";
import { useLocation } from "react-router-dom";
import Styles from './budgetIndex1.module.css';
import background from "../../../../../public/assets/waterproofingBudget/3d-room-interior-with-classic-design-furniture (1) 2.png";
import sideImg from "../../../../../public/assets/waterproofingBudget/front-view-young-woman-white-blouse-holding-big-calculator-white-desk-office-female-emotion-feeling-job-worker-white 1.png";

const BudgetIndex1 = () => {
    const location = useLocation();
    const waterProofingBudget = location.state?.waterProofingBudget || false;

    return (
        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.content}>
                <div className={Styles.container1}>
                    <div className={Styles.textContainer}>
                        <div className={Styles.heading}>
                            {waterProofingBudget ? "WATERPROOFING CALCULATOR" : "PAINT CALCULATOR"}
                        </div>
                        <div className={Styles.para}>
                            {waterProofingBudget
                                ? "Ensure lasting protection with the right waterproofing solution! Use our budget estimator to calculate costs based on your surface area, material type, and coverage needs. Stay leak-free and worry-free!"
                                : "Discover the Perfect Paints for Every Surface! Explore our wide range of high-quality wall paints, designed to add beauty and durability to your space. Find the perfect shade today!"}
                        </div>
                    </div>
                </div>
                <div className={Styles.container2}>
                    <img src={sideImg} alt="" className={Styles.sideImg} />
                </div>
            </div>
        </div>
    );
};

export default BudgetIndex1;
