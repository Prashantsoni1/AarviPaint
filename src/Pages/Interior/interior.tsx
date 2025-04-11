// import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import InteriorIndex1 from "./interiorIndex1/interiorIndex1";
import InteriorIndex2 from "./interiorIndex2/interiorIndex2";
import InteriorIndex3 from "./interiorIndex3/interiorIndex3";
import InteriorIndex4 from "./interiorIndex4/interiorIndex4";
import InteriorIndex5 from "./interiorINdex5/interiorIndex5";
const Interior = () => {

    return (
        <ThemeProvider theme={theme}>
            <InteriorIndex1 />
            <InteriorIndex2/>
            <InteriorIndex3/>
            <InteriorIndex4/>
            <InteriorIndex5/>
        </ThemeProvider>


    )
};

export default Interior;