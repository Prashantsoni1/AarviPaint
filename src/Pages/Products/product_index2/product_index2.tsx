import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from './product_index2.module.css';
import img1 from '../../../assets/product/image 27.png'
import img2 from '../../../assets/product/image 28.png'
import img3 from '../../../assets/product/0 1.png'
import img4 from '../../../assets/product/image (6).png'
import rightArrow from '../../../assets/product/down-arrow (1) 5.png'

const products = [
    {
        id: 1,
        name: "HD GLOSS PU EMULSION",
        type: "Interior & Exterior Both",
        description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
        features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
        image: img1,
    },
    {
        id: 2,
        name: "HD ACRYLIC PLASTIC EMULSION",
        type: "Interior Emulsion",
        description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
        features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
        image: img2,
    },
    {
        id: 3,
        name: "SAFEWALL PREMIUM EMULSION",
        type: "Exterior Emulsion",
        description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
        features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
        image: img3,
    },
    {
        id: 4,
        name: "WEATHERSAFE LITE EMULSION",
        type: "Interior & Exterior Both",
        description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
        features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
        image: img4,
    },
];
const categories = [
    { name: "Emulsion", options: ["Interior & Exterior Both", "Interior Emulsion", "Exterior Emulsion"] },
    { name: "Enamel", options: ["Interior & Exterior Both"] },
    { name: "Primer", options: ["Interior & Exterior Both"] },
    { name: "Wallputty", options: ["Interior & Exterior Both"] },
];
const ProductIndex2 = () => {
   
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    const toggleDropdown = (category: string) => {
        setOpenDropdowns((prev) =>
            prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
        );
    };

    const filterProducts = (type: string) => {
        setSelectedType(type);
        if (type === "") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.type === type);
            setFilteredProducts(filtered);
        }
    };
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/products/productDetails");
    };
    const handleContactNavigation = () => {
        navigate("/contact");
    };

    return (
        <div className={Styles.main}>
            <div className={Styles.category}>
                <div className={Styles.container}>
                    <div className={Styles.leftHeading}>Category</div>
                    <div className={Styles.lineleft}></div>
                    {/* Emulsion */}
                    <div className={Styles.categoryItem}>
                        <div className={Styles.type} onClick={() => toggleDropdown("Emulsion")}>
                            <div>Emulsion</div>
                            <div className={`${Styles.downArrow} ${openDropdowns.includes("Emulsion") ? Styles.rotate : ""}`}>
                                <img src={rightArrow} alt="→" />
                            </div>
                        </div>
                        {openDropdowns.includes("Emulsion") && (
                            <div className={Styles.dropdown}>
                                <div className={Styles.dropdownItem} onClick={() => filterProducts("Interior & Exterior Both")}>
                                    Interior & Exterior Both
                                </div>
                                <div className={Styles.dropdownItem} onClick={() => filterProducts("Interior Emulsion")}>
                                    Interior Emulsion
                                </div>
                                <div className={Styles.dropdownItem} onClick={() => filterProducts("Exterior Emulsion")}>
                                    Exterior Emulsion
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Enamel */}
                    <div className={Styles.categoryItem}>
                        <div className={Styles.type} onClick={() => toggleDropdown("Enamel")}>
                            <div>Enamel</div>
                            <div className={`${Styles.downArrow} ${openDropdowns.includes("Enamel") ? Styles.rotate : ""}`}>
                                <img src={rightArrow} alt="→" />
                            </div>
                        </div>
                        {openDropdowns.includes("Enamel") && (
                            <div className={Styles.dropdown}>
                                <div className={Styles.dropdownItem} onClick={() => filterProducts("Interior & Exterior Both")}>
                                    Interior & Exterior Both
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Primer */}
                    <div className={Styles.categoryItem}>
                        <div className={Styles.type} onClick={() => toggleDropdown("Primer")}>
                            <div>Primer</div>
                            <div className={`${Styles.downArrow} ${openDropdowns.includes("Primer") ? Styles.rotate : ""}`}>
                                <img src={rightArrow} alt="→" />
                            </div>
                        </div>
                        {openDropdowns.includes("Primer") && (
                            <div className={Styles.dropdown}>
                                <div className={Styles.dropdownItem} onClick={() => filterProducts("Interior & Exterior Both")}>
                                    Interior & Exterior Both
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Wallputty */}
                    <div className={Styles.categoryItem}>
                        <div className={Styles.type} onClick={() => toggleDropdown("Wallputty")}>
                            <div>Wallputty</div>
                            <div className={`${Styles.downArrow} ${openDropdowns.includes("Wallputty") ? Styles.rotate : ""}`}>
                                <img src={rightArrow} alt="→" />
                            </div>
                        </div>
                        {openDropdowns.includes("Wallputty") && (
                            <div className={Styles.dropdown}>
                                <div className={Styles.dropdownItem} onClick={() => filterProducts("Interior & Exterior Both")}>
                                    Interior & Exterior Both
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={Styles.contact}>
                    <div className={Styles.contactHeading}>Contact Us</div>
                    <button className={Styles.btn} onClick={handleContactNavigation}>Contact Now</button>
                </div>
            </div>

            <div className={Styles.products}>
                <div className={Styles.head}>
                    <div className={Styles.productHeading}>
                        Product List
                    </div>
                    <div className={Styles.line}></div>
                </div>
                <div className={Styles.productList}>
                    {filteredProducts.map(product => (
                        <div className={Styles.productDescription} key={product.id}>
                            <div className={Styles.left1}>
                                <div className={Styles.imgcontainer}>
                                    <img src={product.image} alt="" className={Styles.img} />
                                </div>
                            </div>
                            <div className={Styles.right}>
                                <div className={Styles.rightHeading1}>
                                    {product.name}
                                </div>
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
    )
};

export default ProductIndex2;
