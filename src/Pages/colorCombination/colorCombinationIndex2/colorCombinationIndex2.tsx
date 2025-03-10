import React, { useState } from "react";
import Styles from "./colorCombinationIndex2.module.css";
import wallImage from "../../../assets/color_Combination/image1-6541bf42c0fa4-removebg-preview (1) 2.png";
import backwardArrow from "../../../assets/color_Combination/return 1.png";
import forwardArrow from "../../../assets/color_Combination/return 2.png";
import paint from "../../../assets/color_Combination/paint-brush (1) 1.png";
import eraser from "../../../assets/color_Combination/school 1.png";
import plus from "../../../assets/color_Combination/add 1.png";
import minus from "../../../assets/color_Combination/minus-sign 1.png";
const ColorCombinationIndex2: React.FC = () => {
    // List of predefined color codes
    const colorCodes: string[] = [
        "FF2020","E52828", "B71212", "FF7D7D", "FFB9B9", "FFD3D3",
        "E6D128", "FFEC55", "DAE01E", "FFF706", "D1C352",
        "95CE3D", "33B496", "288571", "0694A4", "72D6F2",
        "41C5A8", "7FC1C9", "FF9B10", "FFB854", "FFCB83", "E3B472",
        "FF8010", "E48D00", "2081FF", "5AA2FF", "79B3FF", "95C3FF",
        "BCD9FF", "DEECFF", "8224E3", "BE8CFF", "FFCBAA", "FFE2D0",
        "FFC5C5", "FFD8D8"
    ];

    // State to store the selected background color
    const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF"); // Default white

    // State to store recent colors (up to 3)
    const [recentColors, setRecentColors] = useState<string[]>([]);

    // Handle color selection
    const handleColorClick = (color: string) => {
        const newColor = `#${color}`;
        setSelectedColor(newColor);

        // Update recent colors, keeping only the last 3 unique ones
        setRecentColors((prevColors) => {
            const updatedColors = [color, ...prevColors.filter(c => c !== color)].slice(0, 5);
            return updatedColors;
        });
    };

    return (
        <div className={Styles.main}>
            <div className={Styles.container}>
                {/* Image container with dynamic background color */}
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

                {/* Right section */}
                <div className={Styles.rightContainer}>
                    {/* Recent Colors Section (only appears if there are recent colors) */}
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

                    {/* All Colors Section */}
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

export default ColorCombinationIndex2;










// import React from "react";
// import Styles from './colorCombinationIndex2.module.css'
// import wallImage from "../../../assets/color_Combination/image1-6541bf42c0fa4-removebg-preview (1) 2.png"
// const Color_combinationIndex2 = () => {

//     return (

//         <div className={Styles.main}>
//             <div className={Styles.container}>
//                 <div className={Styles.wallimageContainer}>
//                     <div className={Styles.imgContainer}>
//                         <img src={wallImage} alt="" />
//                     </div>
//                     <div>
//                         some content here
//                     </div>
//                 </div>
//                 <div className={Styles.rightContainer}>
//                     <div className={Styles.recentContainer}>
//                         <div className={Styles.heading1}>Recent Use</div>
//                         <div className={Styles.recent_box}>
//                             <div className={Styles.recent_item}></div>
//                             <div className={Styles.recent_itemCode}>FF2020</div>
//                         </div>
//                         <div className={Styles.line}></div>
//                     </div>
//                     <div className={Styles.codesContainer}>
//                         <div className={Styles.heading2}>ALL COLOURS</div>
//                         <div className={Styles.allcodesBox}>
//                             <div className={Styles.colorBox}>
//                                 <div className={Styles.color_item}></div>
//                                 <div className={Styles.color_itemCode}>FF2020</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// };

// export default Color_combinationIndex2;