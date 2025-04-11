// import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import ProductIndex1 from "./product_index1/product_index1";
import ProductIndex2 from "./product_index2/product_index2";
const Products = () => {

  return (
    <ThemeProvider theme={theme}>
    <ProductIndex1/>
    <ProductIndex2/>
    </ThemeProvider>


  )
};

export default Products;
