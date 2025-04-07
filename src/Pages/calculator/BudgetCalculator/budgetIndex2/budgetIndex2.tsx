import React, { useState, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import Styles from "./budgetIndex2.module.css";
import sideImg from "../../../../../../assets/waterproofingBudget/interior-design-with-photoframes-couch 3.png";

interface FormData {
    name: string;
    email: string;
    number: string;
    pincode: string;
    updateOnWhatsApp: boolean;
    homeowner: boolean;
    contractor: boolean;
}

const BudgetIndex2: React.FC = () => {
    const [selectedWorkType, setSelectedWorkType] = useState<string>("");
    const [selectedSpaceType, setSelectedSpaceType] = useState<string>("");
    const [selectedSurface, setSelectedSurface] = useState<string>("");
    const [carpetArea, setCarpetArea] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        number: "",
        pincode: "",
        updateOnWhatsApp: false,
        homeowner: false,
        contractor: false,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;

        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                homeowner: name === "homeowner" ? checked : false,
                contractor: name === "contractor" ? checked : false,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleCalculate = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const location = useLocation();
    const waterProofingBudget = location.state?.waterProofingBudget || false;

    // Handle toggle switch for WhatsApp updates
    const handleToggleWhatsApp = () => {
        setFormData((prevData) => ({
            ...prevData,
            updateOnWhatsApp: !prevData.updateOnWhatsApp,
        }));
    };
    const handleSubmit = ()=>{
        console.log(formData);
        setShowModal(false);
    }
    return (
        <div className={Styles.main}>
            <div className={Styles.container}>
                <div className={Styles.containerLeft}>
                    <div className={Styles.heading}>{waterProofingBudget ? "Get the Perfect Waterproofing Estimate" : "Get the Perfect Paint Estimate for Your Project"}</div>
                    <div className={Styles.wrapper}>
                        <div className={Styles.radioContainer}>
                            <label className={Styles.label}>Select your type of project*</label>
                            <div className={Styles.radioGroup}>
                                <label className={Styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="projectType"
                                        value="freshWork"
                                        checked={selectedWorkType === "freshWork"}
                                        onChange={() => setSelectedWorkType("freshWork")}
                                        className={Styles.radioInput}
                                    />
                                    Fresh Work
                                </label>
                                <label className={Styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="projectType"
                                        value="repairing"
                                        checked={selectedWorkType === "repairing"}
                                        onChange={() => setSelectedWorkType("repairing")}
                                        className={Styles.radioInput}
                                    />
                                    Repairing
                                </label>
                            </div>
                        </div>
                        {
                            waterProofingBudget ?
                                <div className={Styles.dropdownContainer}>
                                    <label className={Styles.label}>Select your surface*</label>
                                    <select
                                        className={Styles.input}
                                        value={selectedSurface}
                                        onChange={(e) => setSelectedSurface(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Select Surface
                                        </option>
                                        <option value="wood">Wood</option>
                                        <option value="metal">Metal</option>
                                        <option value="glass">Glass</option>
                                        <option value="concrete">Concrete</option>
                                        <option value="plastic">Plastic</option>
                                    </select>
                                </div>
                                :
                                <div className={Styles.radioContainer}>
                                    <label className={Styles.label}>Select the space *</label>
                                    <div className={Styles.radioGroup}>
                                        <label className={Styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="spaceType"
                                                value="freshWork"
                                                checked={selectedSpaceType === "freshWork"}
                                                onChange={() => setSelectedSpaceType("freshWork")}
                                                className={Styles.radioInput}
                                            />
                                            Interior
                                        </label>
                                        <label className={Styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="spaceType"
                                                value="repairing"
                                                checked={selectedSpaceType === "repairing"}
                                                onChange={() => setSelectedSpaceType("repairing")}
                                                className={Styles.radioInput}
                                            />
                                            Exterior
                                        </label>
                                    </div>
                                </div>
                        }

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
                        <div className={Styles.btn}>
                            <button className={Styles.button} onClick={handleCalculate}>
                                Calculate Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className={Styles.containerRight}>
                    <img src={sideImg} alt="" className={Styles.sideImg} />
                </div>
            </div>

            {showModal && (
                <div className={Styles.modalOverlay}>
                    <div className={Styles.modal}>
                        <span className={Styles.closeButton} onClick={closeModal}>&times;</span>
                        <h2>Your Estimate is Almost Ready</h2>
                        <div className={Styles.modalContent}>
                            <div className={Styles.inputRow}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={Styles.inputModal}
                                    placeholder="Full Name"
                                />
                                <input
                                    type="text"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    className={Styles.inputModal}
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className={Styles.inputRow}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={Styles.inputModal}
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    className={Styles.inputModal}
                                    placeholder="Pin Code"
                                />
                            </div>
                            {/* Capsule-Style Toggle Switch */}
                            <div className={Styles.toggleContainer}>
                                <div className={Styles.toggleSwitch} onClick={handleToggleWhatsApp}>
                                    <div className={`${Styles.toggleCircle} ${formData.updateOnWhatsApp ? Styles.active : ""}`}></div>
                                </div>
                                <span>Update me on WhatsApp</span>
                            </div>
                            {/* Checkboxes */}
                            <div className={Styles.checkboxGroup}>
                                <label className={Styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="homeowner"
                                        checked={formData.homeowner}
                                        onChange={handleInputChange}
                                    />
                                    I am a homeowner looking for the perfect paint for my space.
                                </label>
                                <label className={Styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="contractor"
                                        checked={formData.contractor}
                                        onChange={handleInputChange}
                                    />
                                    I am a contractor searching for premium paints for my projects.
                                </label>
                            </div>
                        </div>
                        <div className={Styles.modalButtons}>
                            <button className={Styles.button} onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BudgetIndex2;