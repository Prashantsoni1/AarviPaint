import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from './waterproofingIndex3.module.css';
import wallprotectionImg from "../../../assets/waterproofing/closeup-shot-female-using-paint-rollers-with-color-blue_181624-2615 1.png";
import tankPaintIng from "../../../assets/waterproofing/waterproofing-services-500x383 2.png";
import wetAreaImg from "../../../assets/waterproofing/worker-applying-waterproofing-paint-floor-bathroom_191163-1493 2.png";
import baseMentImg from "../../../assets/waterproofing/medium-shot-man-working-wall_23-2148384429 2.png";
import industrialImg from "../../../assets/waterproofing/house-painters-with-paint-roller-house_1398-1570 2.png";
import img1 from "../../../assets/product/image 27.png";

interface Product {
    id: number;
    name: string;
    type: string;
    description: string;
    features: string[];
    image: string;
    colorCode1: string;
    colorCode2: string;
}

interface CategoryData {
    type: string;
    description: string;
    features: string[];
    image: string;
    products: Product[];
}

const initialCategories: Record<string, CategoryData> = {
    "Wall Protection": {
        type: "Interior & Exterior Wall Protection",
        description: "Over time, walls can develop cracks and become prone to water seepage, leading to damp patches, mold growth, and paint peeling. Our advanced wall waterproofing solutions create a strong barrier that blocks moisture, ensuring your walls remain dry, beautiful, and durable for years.",
        features: [
            "Prevents Dampness & Peeling – Keeps walls dry and paint intact.",
            "Anti-Fungal & Anti-Mold – Stops mold and mildew growth.",
            "Breathable Formula – Allows walls to release trapped moisture."
        ],
        image: wallprotectionImg,
        products: [
            {
                id: 1,
                name: "HD GLOSS PU EMULSION",
                type: "Interior & Exterior Both",
                description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
                features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
                image: img1,
                colorCode1: "#15816A",
                colorCode2: "#33B496",
            },
        ],
    },
    "Tank/Terrace Shield": {
        type: "Tank & Terrace Waterproofing",
        description: "Tank and terraces face harsh sunlight, heavy rains, and temperature variations, leading to cracks and leakage. Our waterproofing solutions create a seamless, protective layer that blocks water seepage and extends the life of your roof.",
        features: [
            "UV & Weather Resistant – Withstands extreme climatic conditions.",
            "Flexible & Crack-Free Coating – Expands and contracts with temperature changes.",
            "Energy Efficient – Reduces heat absorption, keeping interiors cooler."
        ],
        image: tankPaintIng ,
        products: [
            {
                id: 1,
                name: "HD GLOSS PU EMULSION",
                type: "Interior & Exterior Both",
                description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
                features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
                image: img1,
                colorCode1: "#15816A",
                colorCode2: "#33B496",
            },
        ],
    },
    "Wet Area": {
        type: "Bathroom & Kitchen Waterproofing",
        description: "Bathrooms and kitchens are the most moisture-prone areas in any building. Leaks from pipes, tiles, and flooring can lead to long-term water damage. Our waterproofing solutions seal gaps, tile joints, and surfaces, preventing leaks and dampness.",
        features: [
            "Leak-Proof Coating – Prevents water from seeping into floors and walls.",
            "Chemical & Heat Resistant – Durable against cleaning agents and high temperatures.",
            "Mold & Stain Protection – Prevents water stains, fungus, and discoloration."
        ],
        image: wetAreaImg,
        products: [
            {
                id: 1,
                name: "HD GLOSS PU EMULSION",
                type: "Interior & Exterior Both",
                description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
                features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
                image: img1,
                colorCode1: "#15816A",
                colorCode2: "#33B496",
            },
        ],
    },
    "Basement Guard": {
        type: "Basement & Foundation Waterproofing",
        description: "Basements and foundations are highly susceptible to underground water seepage, leading to cracks, structural weakening, and mold growth. Our deep-penetration waterproofing solutions strengthen the foundation and keep moisture out.",
        features: [
            "Deep Penetration Formula – Strengthens concrete and prevents capillary water rise.",
            "Prevents Structural Damage – Enhances the foundation’s durability.",
            "Mold & Fungus Protection – Keeps the basement dry and fresh."
        ],
        image: baseMentImg,
        products: [
            {
                id: 1,
                name: "HD GLOSS PU EMULSION",
                type: "Interior & Exterior Both",
                description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
                features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
                image: img1,
                colorCode1: "#15816A",
                colorCode2: "#33B496",
            },
        ],
    },
    "Industrial Safety": {
        type: "Industrial & Commercial Waterproofing",
        description: "Factories, warehouses, and office buildings require heavy-duty waterproofing due to high exposure to weather, chemicals, and mechanical wear. Our solutions provide long-lasting protection, ensuring safety and durability.",
        features: [
            "High-Performance Coating – Resists water, oil, and chemicals.",
            "Long-Lasting Durability – Designed for industrial-grade strength.",
            "Low Maintenance – Reduces repair costs and downtime."
        ],
        image: industrialImg ,
        products: [
            {
                id: 1,
                name: "HD GLOSS PU EMULSION",
                type: "Interior & Exterior Both",
                description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
                features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
                image: img1,
                colorCode1: "#15816A",
                colorCode2: "#33B496",
            },
        ],
    },
};

const WaterproofingIndex3: React.FC = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string>("Wall Protection");
    const [categories] = useState(initialCategories);

    const handleNavigation = () => {
        navigate("/products/productDetails");
    };

    const categoryData = categories[selectedCategory];

    return (
        <div className={Styles.main}>
            <div className={Styles.container}>
                <div className={Styles.nav}>
                    {Object.keys(categories).map((category) => (
                        <div
                            key={category}
                            className={`${Styles.navItem} ${selectedCategory === category ? Styles.active : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>

                <div className={Styles.product}>
                    <div>
                        <img src={categoryData.image} alt="Product Display" className={Styles.sideImg}/>
                    </div>
                    <div className={Styles.productDetails}>
                        <div className={Styles.descriptionBox}>
                            <div className={Styles.productType}>{categoryData.type}</div>
                            <div className={Styles.productDescription1}>{categoryData.description}</div>
                            <div className={Styles.productFeature}>
                                <div className={Styles.featureHeading1}>Key Benefits:</div>
                                <ol>
                                    {categoryData.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className={Styles.availableProduct}>
                            <div className={Styles.heading2}>Water Proofing Product</div>
                            <div>
                                {categoryData.products.map((product) => (
                                    <div className={Styles.productDescription} key={product.id}>
                                        <div
                                            className={Styles.left1}
                                            style={{
                                                background: `linear-gradient(144.76deg, ${product.colorCode1} 48%, ${product.colorCode2} 99.96%)`,
                                            }}
                                        >
                                            <div className={Styles.imgcontainer}>
                                                <img src={product.image} alt={product.name} className={Styles.img} />
                                            </div>
                                        </div>
                                        <div className={Styles.right}>
                                            <div className={Styles.rightHeading1}>{product.name}</div>
                                            <div className={Styles.info}>
                                                <div className={Styles.rightHeading2}>{product.type}</div>
                                                <div className={Styles.para}>{product.description}</div>
                                            </div>
                                            <div className={Styles.feature}>
                                                <div className={Styles.featureHeading}>Key Features</div>
                                                <ul className={Styles.featureList}>
                                                    {product.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className={Styles.btnDiv}>
                                                <button className={Styles.btn2} onClick={handleNavigation}>Know More</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterproofingIndex3;