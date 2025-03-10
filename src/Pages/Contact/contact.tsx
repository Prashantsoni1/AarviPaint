
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import ContactIndex1 from "./contact_index1/contact_index1";
import ContactIndex2 from "./contact_index2/contact_index2";
const Contact = () => {

  return (
    <ThemeProvider theme={theme}>
      <ContactIndex1 />
      <ContactIndex2/>
    </ThemeProvider>


  )
};

export default Contact;