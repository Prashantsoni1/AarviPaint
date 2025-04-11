
// import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import VisualizerIndex1 from "./visualizerIndex1/visualizerIndex1";
import VisualizerIndex2 from "./visualizerIndex2/visualizerIndex2";
const Visualizer = () => {

  return (
    <ThemeProvider theme={theme}>
     <VisualizerIndex1/>
     <VisualizerIndex2/>
    </ThemeProvider>


  )
};

export default Visualizer;