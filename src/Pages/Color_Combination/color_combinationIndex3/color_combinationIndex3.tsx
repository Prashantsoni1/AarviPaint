import React, { useState } from "react";
import Styles from "./color_combinationIndex3.module.css";
import img1 from "../../../assets/colorCombination/armchair-green-living-room-with-copy-space__1_-removebg-preview 1.png";
import img2 from "../../../assets/colorCombination/3d-contemporary-living-room-interior-modern-furniture_1048-10264-removebg-preview 1.png";
import img3 from "../../../assets/colorCombination/armchair-living-room-with-copy-space_43614-908 1.png";
import img4 from "../../../assets/colorCombination/bed-arrangements-still-life_23-2150532985-removebg-preview (1) 1.png";
import img5 from "../../../assets/colorCombination/soft-pastel-hues-room-kids_23-2151690404 1.png";
import img6 from "../../../assets/colorCombination/soft-pastel-hues-room-kids_23-2151690318 1.png";
import img7 from "../../../assets/colorCombination/3d-rendering-house-model_23-2150799695 1.png";
import img8 from "../../../assets/colorCombination/3d-house-model-with-bright-lights_23-2149314221 1.png";
import img9 from "../../../assets/colorCombination/japanese-culture-house-entrance-with-fence_23-2149301053 1.png";

const ColorCombinationIndex3 = () => {
    const [imageData] = useState([
        { img: img1, colors: ["#007380", "#392A21"], defaultColor: "#288571" },
        { img: img2, colors: ["#FEFFEA", "#8E7C68"], defaultColor: "#FF9B10" },
        { img: img3, colors: ["#A5A5A5"] },
        { img: img4, colors: ["#A5A5A5"], defaultColor: "#15816A" },
        { img: img5, colors: ["#E4D9D3"] },
        { img: img6, colors: ["#C0B798"] },
        { img: img7, colors: ["#E6D3CD"], defaultColor: "#FFB9B9" },
        { img: img8, colors: ["#302D2E", "#D2D7D8"] },
        { img: img9, colors: ["#C1AEA4"] },
    ]);

    const colorCodes: string[] = [
        "FF2020", "E52828", "B71212", "FF7D7D", "FFB9B9", "FFD3D3",
        "E6D128", "FFEC55", "DAE01E", "FFF706", "D1C352",
        "95CE3D", "33B496", "288571", "0694A4", "72D6F2",
        "41C5A8", "7FC1C9", "FF9B10", "FFB854", "FFCB83", "E3B472",
        "FF8010", "E48D00", "2081FF", "5AA2FF", "79B3FF", "95C3FF",
        "BCD9FF", "DEECFF", "8224E3", "BE8CFF", "FFCBAA", "FFE2D0",
        "FFC5C5", "FFD8D8"
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedBgColor, setSelectedBgColor] = useState<string>("");

    const openPopup = (img: string, defaultColor?: string) => {
        setSelectedImage(img);
        setSelectedBgColor(defaultColor || "");
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage(null);
        setSelectedBgColor("");
    };

    const handleColorChange = (color: string) => {
        setSelectedBgColor(`#${color}`);
    };

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.container}>
                {imageData.map((item, index) => (
                    <div
                        key={index}
                        className={Styles.img}
                        onClick={() => openPopup(item.img, item.defaultColor)}
                    >
                        <img src={item.img} alt="" style={{ backgroundColor: item.colors[0] }} />
                        <div className={Styles.colorPalate}>
                            {item.colors.map((color, i) => (
                                <div key={i} className={Styles.color} style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className={Styles.popupOverlay} onClick={closePopup}>
                    <div className={Styles.popupContent} onClick={(e) => e.stopPropagation()}>
                        <div className={Styles.closeButton} onClick={closePopup}>✖</div>
                        <div className={Styles.leftContainer} style={{ backgroundColor: selectedBgColor }}>
                            {selectedImage && <img src={selectedImage} alt="Selected" />}
                        </div>
                        <div className={Styles.rightContainer}>
                            <div className={Styles.codesContainer}>
                                <div className={Styles.heading2}>ALL COLOURS</div>
                                <div className={Styles.allcodesBox}>
                                    {colorCodes.map((color, index) => (
                                        <div
                                            key={index}
                                            className={Styles.colorBox}
                                            onClick={() => handleColorChange(color)}
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
            )}
        </div>
    );
};

export default ColorCombinationIndex3;


