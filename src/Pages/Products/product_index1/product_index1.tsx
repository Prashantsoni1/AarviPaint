import React from "react";
import Styles from './product_index1.module.css';
import background from '../../../../public/assets/product/background.png';
const ProductIndex1 = () => { 
    const contentData = {
        heading: "PRODUCTS",
        paragraph: "Discover the Perfect Paints for Every Surface!  Explore our wide range of high-quality wall paints, designed to add beauty and durability to your space. Find the perfect shade today!",
    }
    return (
        <div className={Styles.main}>
            <img src={background} alt="background" className={Styles.backgroundImage} />
            <div className={Styles.overlay}>
                <div className={Styles.gradient_container}></div>
                <div className={Styles.container1}>
                   
                    <div className={Styles.heading}>{contentData.heading}</div>
                    <p className={Styles.para}>{contentData.paragraph}</p>
                </div>
                <div className={Styles.container2}>
                    
                </div>
            </div>
            
        </div>
    )
};

export default ProductIndex1;




