
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import Color_combinationIndex1 from "./colorCombinationIndex1/colorCombinationIndex1";
import Color_combinationIndex2 from "./colorCombinationIndex2/colorCombinationIndex2";
const Color_combination = () => {

  return (
    <ThemeProvider theme={theme}>
     <Color_combinationIndex1/>
     <Color_combinationIndex2/>
    </ThemeProvider>


  )
};

export default Color_combination;