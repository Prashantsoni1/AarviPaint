// import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../theme/theme";
import BudgetIndex1 from "./budgetIndex1/budgetIndex1";
import BudgetIndex2 from "./budgetIndex2/budgetIndex2";
import BudgetIndex3 from "./budgetIndex3/budgetIndex3";
import Brouser from "../../../Components/mini_sections/brouser/brouser";
const Budget = () => {

  return (
    <ThemeProvider theme={theme}>
    <BudgetIndex1/>
    <BudgetIndex2/>
    <BudgetIndex3/>
    <Brouser/>
    </ThemeProvider>
  )
};

export default Budget;