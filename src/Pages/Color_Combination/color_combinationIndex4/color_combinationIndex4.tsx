import React from "react";
import Styles from "./color_combinationIndex4.module.css";

const ColorCombinationIndex4: React.FC = () => {
    const colorCodes: string[] = [
        "FF2020", "E52828", "B71212", "FF7D7D", "FFB9B9", "FFD3D3",
        "E6D128", "FFEC55", "DAE01E", "FFF706", "D1C352",
        "95CE3D", "33B496", "288571", "0694A4", "72D6F2",
        "41C5A8", "7FC1C9", "FF9B10", "FFB854", "FFCB83", "E3B472",
        "FF8010", "E48D00", "2081FF", "5AA2FF", "79B3FF", "95C3FF",
        "BCD9FF", "DEECFF", "8224E3", "BE8CFF", "FFCBAA", "FFE2D0",
        "FFC5C5", "FFD8D8"
    ];



    return (
        <div className={Styles.main}>
            <div className={Styles.container}>

                <div className={Styles.leftContainer}>
                    <div className={Styles.heading}>Color Inspiration & Selection Guide</div>
                    <div className={Styles.para}>
                        Colors can redefine your space, create ambiance, and bring life to every corner. Dive into our exclusive selection of trending
                        color combinations for 2025, designed to inspire and elevate your interiors. Whether you seek a soothing retreat, a contemporary
                        touch, or a bold statement, Aarvi Paints offers the perfect hues to match your vision.
                    </div>
                </div>

                {/* Right section */} 
                <div className={Styles.rightContainer}>

                    {/* All Colors Section */}
                    <div className={Styles.codesContainer}>
                        <div className={Styles.allcodesBox}>
                            {colorCodes.map((color, index) => (
                                <div
                                    key={index}
                                    className={Styles.colorBox}

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

export default ColorCombinationIndex4;
