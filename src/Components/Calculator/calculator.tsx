import React from "react";
import "@fontsource/rubik-doodle-shadow";
import "@fontsource/poppins";
import interiorWallPaint from "../../../public/assets/calculator/interior_Wall_Paint.png";
import exterior from "../../../public/assets/calculator/waterProofing.png";
import colorGuide from "../../../public/assets/calculator/colorGuide.jpeg";
import arrow from "../../../public/assets/calculator/down-arrow 2.png";
import styles from "./calculator.module.css";

const Calculator = () => {
    const contentData = {
        heading: "Plan Your Perfect Paint Budget",
        paragraph:
            "Take the guesswork out of painting costs. Measure, choose, and calculate effortlessly to design a budget that fits your vision and space. Transform your walls with confidence!",
    };

    const cardData = [
        {
            src: interiorWallPaint,
            alt: "Interior Wall Paint",
            title: "Paint Budget Calculator",
            link: "/paint-budget",
        },
        {
            src: exterior,
            alt: "Exterior Paint",
            title: "Waterproofing Calculator",
            link: "/waterproofing",
        },
        {
            src: colorGuide,
            alt: "Color Guide",
            title: "Home Color Guide",
            link: "/color-guide",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 card_img">
            <div className="text-center mb-12">
                <div className={styles.heading_calcu}>{contentData.heading}</div>
                <p className="text-gray-600 text-[18px] max-w-3xl mx-auto font-poppins">
                    {contentData.paragraph}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={card.src}
                            alt={card.alt}
                            className="w-full h-[450px] object-cover"
                        />

                        <div
                            className="absolute top-2 right-4 text-white text-[80px] font-bold"
                            style={{ fontFamily: "'Rubik Doodle Shadow'" }}
                        >
                            {index + 1}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10" />

                        <div className="absolute bottom-0 w-full text-white text-center px-2">
                            <div className={styles.caculator_button}>
                                <div className={styles.overlay} />
                                <a href={card.link}>
                                    <p className={styles.caculator_btn}>{card.title}</p>
                                    <img src={arrow} alt="arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
