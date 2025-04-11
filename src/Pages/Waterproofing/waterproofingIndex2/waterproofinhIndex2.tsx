// import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from './waterproofingIndex2.module.css'
import sideImage from "../../../../public/assets/waterproofing/ProtectionComposite_Residential_Crop 4.png";
const WaterproofingIndex2 = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/calculator/Budget", { state: { waterProofingBudget: true } });
    };
    return (

        <div className={Styles.main}>
            <div className={Styles.container}>
                <img src={sideImage} alt="" className={Styles.img}/>
                <div className={Styles.gradient}></div>
                <div className={Styles.content}>
                    <div className={Styles.heading}>Waterproofing Budget Calculator – Seal & Protect with Confidence!</div>
                    <div className={Styles.para}>Ensure lasting protection with the right waterproofing solution! Use our budget
                        estimator to calculate costs based on your surface area, material type, and coverage
                        needs. Stay leak-free and worry-free!</div>
                    <button className={Styles.btn} onClick={handleNavigation} >Calculate Now</button>
                </div>
            </div>
        </div>

    )
};

export default WaterproofingIndex2;