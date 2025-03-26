import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import ExteriorIndex1 from "./exteriorIndex1/exteriorIndex1";
import ExteriorIndex2 from "./exteriorIndex2/exteriorIndex2";
import ExteriorIndex3 from "./exteriorIndex3/exteriorIndex3";
import ExteriorIndex4 from "./exteriorIndex4/exteriorIndex4";
import ExteriorIndex5 from "./exteriorIndex5/exteriorIndex5";
const Exterior = () => {

    return (
        <ThemeProvider theme={theme}>
            <ExteriorIndex1/>
            <ExteriorIndex2/>
            <ExteriorIndex3/>
            <ExteriorIndex4/>
            <ExteriorIndex5/>
        </ThemeProvider>


    )
};

export default Exterior;