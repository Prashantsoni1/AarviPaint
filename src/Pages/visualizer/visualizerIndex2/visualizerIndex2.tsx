import React, { useState } from "react";
import Styles from "./visualizerIndex2.module.css";
import wallImage from "../../../assets/color_Combination/image1-6541bf42c0fa4-removebg-preview (1) 2.png";
import backwardArrow from "../../../assets/color_Combination/return 1.png";
import forwardArrow from "../../../assets/color_Combination/return 2.png";
import paint from "../../../assets/color_Combination/paint-brush (1) 1.png";
import eraser from "../../../assets/color_Combination/school 1.png";
import plus from "../../../assets/color_Combination/add 1.png";
import minus from "../../../assets/color_Combination/minus-sign 1.png";
const VisualizerIndex2: React.FC = () => {
    const colorCodes: string[] = [
        "FF2020", "E52828", "B71212", "FF7D7D", "FFB9B9", "FFD3D3",
        "E6D128", "FFEC55", "DAE01E", "FFF706", "D1C352",
        "95CE3D", "33B496", "288571", "0694A4", "72D6F2",
        "41C5A8", "7FC1C9", "FF9B10", "FFB854", "FFCB83", "E3B472",
        "FF8010", "E48D00", "2081FF", "5AA2FF", "79B3FF", "95C3FF",
        "BCD9FF", "DEECFF", "8224E3", "BE8CFF", "FFCBAA", "FFE2D0",
        "FFC5C5", "FFD8D8"
    ];

    const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");


    const [recentColors, setRecentColors] = useState<string[]>([]);


    const handleColorClick = (color: string) => {
        const newColor = `#${color}`;
        setSelectedColor(newColor);


        setRecentColors((prevColors) => {
            const updatedColors = [color, ...prevColors.filter(c => c !== color)].slice(0, 7);
            return updatedColors;
        });
    };

    return (
        <div className={Styles.main}>
            <div className={Styles.container}>

                <div
                    className={Styles.wallimageContainer}

                >
                    <div className={Styles.imgContainer}>
                        <img src={wallImage} alt="wall" style={{ backgroundColor: selectedColor }} />
                    </div>
                    <div className={Styles.imgContent}>
                        <div className={Styles.editContainer}>
                            <img src={backwardArrow} alt="" />
                            <img src={forwardArrow} alt="" />
                        </div>
                        <div className={Styles.editContainer}>
                            <img src={paint} alt="" />
                            <img src={eraser} alt="" />
                        </div>
                        <div className={Styles.editContainer}>
                            <img src={plus} alt="" />
                            <img src={minus} alt="" />
                        </div>
                    </div>
                </div>


                <div className={Styles.rightContainer}>

                    {recentColors.length > 0 && (
                        <div className={Styles.recentContainer}>
                            <div className={Styles.heading1}>Recent Use</div>
                            <div className={Styles.recent_box}>
                                {recentColors.map((color, index) => (
                                    <div key={index} className={Styles.recent_div}>
                                        <div
                                            className={Styles.recent_item}
                                            style={{ backgroundColor: `#${color}` }}
                                        ></div>
                                        <div className={Styles.recent_itemCode}>{color}</div>
                                    </div>
                                ))}
                            </div>
                            <div className={Styles.line}></div>
                        </div>
                    )}


                    <div className={Styles.codesContainer}>
                        <div className={Styles.heading2}>ALL COLOURS</div>
                        <div className={Styles.allcodesBox}>
                            {colorCodes.map((color, index) => (
                                <div
                                    key={index}
                                    className={Styles.colorBox}
                                    onClick={() => handleColorClick(color)}
                                >
                                    <div
                                        className={Styles.color_item}
                                        style={{ backgroundColor: `#${color}`, cursor: "pointer" }}
                                    ></div>
                                    <div className={Styles.color_itemCode}>{color}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualizerIndex2;

