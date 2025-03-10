import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../theme/theme";
import WaterproofingBudgetIndex1 from "./waterproofingbudgetIndex1/waterproofingbudgetIndex1";
import WaterproofingBudgetIndex2 from "./waterproofingbudgetIndex2/waterproofingbudgetIndex2";
const WaterproofingBudget = () => {

  return (
    <ThemeProvider theme={theme}>
    <WaterproofingBudgetIndex1/>
    <WaterproofingBudgetIndex2/>
    </ThemeProvider>


  )
};

export default WaterproofingBudget;