import { useState, useEffect } from "react";
import styles from "./interiorIndex5.module.css"
import m1 from "../../../assets/interior/m1.png"
import m2 from "../../../assets/interior/m2.png"
import m3 from "../../../assets/interior/m3.png"
import m4 from "../../../assets/interior/m4.png"
const mainCategories = [
    {
        name: "Living Room",
        sub: [
            { name: "MODERN", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "INDUSTRIAL", images: [m1, m2, m3, m4, m2, m3, m4] },
            { name: "TRADITIONAL", images: [m1, m2, m4, m1, m2, m3, m4] },
            { name: "CONTEMPORARY", images: [m1, m2, m3, m4, m1] },
        ],
    },
    {
        name: "Bedroom",
        sub: [
            { name: "MODERN", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "INDUSTRIAL", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "TRADITIONAL", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "CONTEMPORARY", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
        ],
    },
    {
        name: "Kid’s Room",
        sub: [
            { name: "Colorful", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "Themed", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "Educational", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
        ],
    },
    {
        name: "Kitchen",
        sub: [
            { name: "STRAIGHT MODULAR KITCHEN", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "U OR C SHAPED MODULAR KITCHEN", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "L SHAPE MODULAR KITCHEN", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "PARALLEL MODULAR KITCHEN", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
        ],
    },
    {
        name: "Bathroom",
        sub: [
            { name: "THREE FIXTURE BATHROOOMS", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "COMPARTMENT BATHROOMS", images: [m1, m2, m3, m4, m1, m2, m3, m4] },
            { name: "LARGE UTILITY BATHROOMS", images: [m1, m2, m1, m2, m3, m4] },
        ],
    },
];
const InteriorIndex5 = () => {
    const [selectedCategory, setSelectedCategory] = useState(mainCategories[0].name);
    const [selectedSubCategory, setSelectedSubCategory] = useState(mainCategories[0].sub[0].name);

    useEffect(() => {
        const firstSubCategory = mainCategories.find(cat => cat.name === selectedCategory)?.sub[0].name;
        if (firstSubCategory && selectedSubCategory !== firstSubCategory) {
            setSelectedSubCategory(firstSubCategory);
        }
    }, [selectedCategory]);

    return (
        <div className={styles.container}>
            {/* Main Navigation */}
            <div className={styles.mainNav}>
                {mainCategories.map((category) => (
                    <button
                        key={category.name}
                        className={`${styles.button} ${selectedCategory === category.name ? styles.active : ""}`}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Sub Navigation */}
            <div className={styles.subNav}>
                {mainCategories.find((cat) => cat.name === selectedCategory)?.sub.map((sub) => (
                    <button
                        key={sub.name}
                        className={`${styles.subButton} ${selectedSubCategory === sub.name ? styles.activeSub : ""}`}
                        onClick={() => setSelectedSubCategory(sub.name)}
                    >
                        {sub.name}
                    </button>
                ))}
            </div>

            {/* Display Images */}
            <div className={styles.imageGallery}>
                {mainCategories
                    .find((cat) => cat.name === selectedCategory)
                    ?.sub.find((sub) => sub.name === selectedSubCategory)
                    ?.images.map((img, index) => (
                        <img key={index} src={img} alt={selectedSubCategory} className={styles.image} />
                    ))}
            </div>
        </div>
    );
};

export default InteriorIndex5;
