import React from 'react';
import Styles from './productDetail_index3.module.css';
import img1 from '../../../../assets/product/armchair-green-living-room-with-copy-space (2) 2.png'
import img2 from '../../../../assets/product/white-sideboard-living-room-interior-with-copy-space 2.png'
const ProductDetails3 = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.title}>
                <div className={Styles.heading}>Description</div>
                <div className={Styles.line}></div>
            </div>
            <div className={Styles.content}>
                <div className={Styles.description}>
                    HD Gloss PU Emulsion | Super Gloss Emulsion is a premium high-sheen wall paint designed to give your
                    interiors a luxurious and long-lasting shine. Its ultra-smooth and high-gloss finish enhances the
                    beauty of any space, making your walls look elegant and vibrant. With superior washability and stain-resistant
                    properties, it ensures effortless cleaning while maintaining a fresh and spotless appearance. Highly durable
                    and resistant to wear and tear, this paint guarantees long-lasting protection. It is non-toxic and lead-free,
                    making it a safe choice for homes and commercial spaces. Backed by a 5-year warranty, HD Gloss PU Emulsion is
                    the perfect solution for those seeking a stunning, easy-to-maintain, and high-performance wall finish.
                </div>
                <div className={Styles.imgContainer}>
                    <img src={img1} alt="" className={Styles.img}/>
                </div>
                <div className={Styles.para}>HD Gloss PU Emulsion | Super Gloss Emulsion offers a luxurious, high-gloss finish that enhances the elegance
                    of any space. Its stain-resistant and washable properties ensure walls stay spotless and vibrant for years.</div>
                <div className={Styles.imgContainer}>
                    <img src={img2} alt="" className={Styles.img}/>
                </div>
                <div className={Styles.para}>Formulated for durability, this non-toxic, lead-free paint provides long-lasting protection with a smooth and
                    glossy surface. With a 5-year warranty, it's the perfect choice for beautiful and easy-to-maintain walls.</div>
            </div>
        </div>
    );
};

export default ProductDetails3;