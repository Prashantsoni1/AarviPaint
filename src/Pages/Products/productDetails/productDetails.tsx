import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../theme/theme";
import ProductDetails1 from "./productDetail_index1/productDetail_index1";
import ProductDetails2 from "./productDetails_index2/productDetails_index2";
import ProductDetails3 from "./productDetail_index3/productDetail_index3";
const ProductsDetails = () => {

  return (
    <ThemeProvider theme={theme}>

    <ProductDetails1/>
    <ProductDetails2/>
    <ProductDetails3/>
    </ThemeProvider>


  )
};

export default ProductsDetails;
