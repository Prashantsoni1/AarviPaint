import React, { useState } from "react";
import Styles from './waterproofingbudgetIndex2.module.css'
import sideImg from '../../../../assets/waterproofingBudget/interior-design-with-photoframes-couch 3.png'
const WaterproofingBudgetIndex2 = () => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedSurface, setSelectedSurface] = useState("");
    const [carpetArea, setCarpetArea] = useState("");
    return (

        <div className={Styles.main}>
            <div className={Styles.container}>
                <div className={Styles.containerLeft}>
                    <div className={Styles.heading}>Get the Perfect Waterproofing Estimate </div>
                    <div className={Styles.radioContainer}>
                        <label className={Styles.label}>Select your type of project*</label>
                        <div className={Styles.radioGroup}>
                            <label className={Styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="projectType"
                                    value="freshWork"
                                    checked={selectedType === "freshWork"}
                                    onChange={() => setSelectedType("freshWork")}
                                    className={Styles.radioInput}
                                />
                                Fresh Work
                            </label>
                            <label className={Styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="projectType"
                                    value="repairing"
                                    checked={selectedType === "repairing"}
                                    onChange={() => setSelectedType("repairing")}
                                    className={Styles.radioInput}
                                />
                                Repairing
                            </label>
                        </div>
                    </div>
                    <div className={Styles.dropdownContainer}>
                        <label className={Styles.label}>Select your surface*</label>
                        <select
                            className={Styles.dropdown}
                            value={selectedSurface}
                            onChange={(e) => setSelectedSurface(e.target.value)}
                        >
                            <option value="" disabled>
                                -- Select Surface --
                            </option>
                            <option value="wood">Wood</option>
                            <option value="metal">Metal</option>
                            <option value="glass">Glass</option>
                            <option value="concrete">Concrete</option>
                            <option value="plastic">Plastic</option>
                        </select>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label className={Styles.label}>Enter carpet area in SQFT*</label>
                        <input
                            type="text"
                            className={Styles.input}
                            placeholder="Enter area"
                            value={carpetArea}
                            onChange={(e) => setCarpetArea(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className={Styles.button}>Calculate Now</button>
                    </div>

                </div>

                <div className={Styles.containerRight}>
                    <img src={sideImg} alt="" className={Styles.sideImg} />
                </div>
            </div>
        </div>

    )
};

export default WaterproofingBudgetIndex2;