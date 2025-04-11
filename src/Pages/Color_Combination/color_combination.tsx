// import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import ColorCombinationIndex1 from './color_combinationIndex1/color_combinationIndex1';
import ColorCombinationIndex3 from './color_combinationIndex3/color_combinationIndex3';
import ColorCombinationIndex2 from './color_combinationIndex2/color_combinationIndex2';
import ColorCombinationIndex4 from './color_combinationIndex4/color_combinationIndex4';
import BookPaint from '../../Components/mini_sections/bookpaint';
const Color_Combination = () => {

  return (
    <ThemeProvider theme={theme}>
      <ColorCombinationIndex1/>
      <BookPaint/>
      <ColorCombinationIndex2/>
      <ColorCombinationIndex3/>
      <ColorCombinationIndex4/>
    </ThemeProvider>
  )
};

export default  Color_Combination;