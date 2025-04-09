import React from 'react';
import { useNavigate } from "react-router-dom";
import background from '../../../../../public/assets/product/background.png';
import Styles from './productDetails_index2.module.css';
import img1 from '../../../../../public/assets/product/image 27.png'
import icon1 from '../../../../../public/assets/product/waterdrop 1.png'
import icon2 from '../../../../../public/assets/product/measuring-jar 1.png'
import icon3 from '../../../../../public/assets/product/star 1.png'
import icon4 from '../../../../../public/assets/product/paint-roller 1.png'
import icon5 from '../../../../../public/assets/product/glass-jar 1.png'
const ProductDetails2 = () => {
    const navigate = useNavigate();
    const handleContactNavigation = () => {
        navigate("/contact");
    };
    return (
        <div >
            <div className={Styles.container}>
                
                <div className={Styles.box}>
                    <img src={img1} alt=""/>
                </div>
                <div className={Styles.containerRight}>
                    <div>
                        <div className={Styles.productHeading}>HD GLOSS PU EMULSION</div>
                        <div className={Styles.subHeading}>SUPER GLOSS EMULSION</div>
                    </div>

                    <div className={Styles.para}>A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a
                        long time. The paint’s high gloss and even smoother finish would make you want to stare at it
                        all day.</div>
                    <ul className={Styles.feature}>
                        <li>Smooth and glossy finish</li>
                        <li>Easily washable and highly durable</li>
                        <li>Non toxic and Lead free</li>
                        <li>5 years warranty</li>
                    </ul>
                    <div className={Styles.speciality}>
                        <div className={Styles.service}>
                            <img src={icon1} alt="" className={Styles.containerImg} />
                            <div className={Styles.title}>Water Base</div>
                        </div>
                        <div className={Styles.service}>
                            <img src={icon2} alt="" className={Styles.containerImg} />
                            <div className={Styles.title}>300/500 ml/L</div>
                        </div>
                        <div className={Styles.service}>
                            <img src={icon3} alt="" className={Styles.containerImg} />
                            <div className={Styles.title}>Glossy Finish</div>
                        </div>
                        <div className={Styles.service}>
                            <img src={icon4} alt="" className={Styles.containerImg} />
                            <div className={Styles.title}>140/160 sqft/L</div>
                        </div>
                        <div className={Styles.service}>
                            <img src={icon5} alt="" className={Styles.containerImg} />
                            <div className={Styles.title}>3 Years</div>
                        </div>
                    </div>
                    <button className={Styles.btn} onClick={handleContactNavigation}>Contact Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails2;