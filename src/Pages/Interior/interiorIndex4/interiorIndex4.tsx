// import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from './interiorIndex4.module.css'
import sideImage from "../../../../public/assets/interior/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf 2.png";
const InteriorIndex4 = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/calculator/Budget");
    };
    return (

        <div className={Styles.main}>
            <div className={Styles.container}>
                <img src={sideImage} alt="" className={Styles.img} />
                <div className={Styles.content}>
                    <div className={Styles.heading}>Calculate Your Paint Budget – Smart Estimates for a Perfect Finish</div>
                    <div className={Styles.para}>Ensure lasting protection with the right waterproofing solution! Use our budget
                        estimator to calculate costs based on your surface area, material type, and coverage needs. Stay leak-free
                        and worry-free!</div>
                    <button className={Styles.btn} onClick={handleNavigation} >Calculate Now</button>
                </div>
            </div>
        </div>

    )
};

export default InteriorIndex4;