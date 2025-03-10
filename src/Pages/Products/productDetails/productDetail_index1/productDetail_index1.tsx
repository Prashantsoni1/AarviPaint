import React from 'react';
import background from '../../../../assets/product/background.png';
import Styles from './productDetail_index1.module.css';

const ProductDetails1 = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.background}>
        <img src={background} alt="background" className={Styles.backgroundImg} />
      </div>
      <div className={Styles.gradient_container}></div>
      <div className={Styles.content}>
        <div className={Styles.heading}>PRODUCT DETAIL</div>
        <div className={Styles.nav}>
          <li>Home /</li>
          <li>Products /</li>
          <li>Product Detail </li>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails1;
