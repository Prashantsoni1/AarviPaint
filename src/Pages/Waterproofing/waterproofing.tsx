
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import WaterproofingIndex1 from "./waterproofingIndex1/waterproofingIndex1";
import WaterproofingIndex2 from "./waterproofingIndex2/waterproofinhIndex2";
import WaterproofingIndex3 from "./waterproofingIndex3/waterproofingIndex3";
const Waterproofing = () => {

    return (
        <ThemeProvider theme={theme}>
            <WaterproofingIndex1 />
            <WaterproofingIndex2/>
            <WaterproofingIndex3/>
        </ThemeProvider>


    )
};

export default Waterproofing;