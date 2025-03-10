import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";
import AboutIndex1 from '../../Components/Common/about_index1/about_index1';
import AboutIndex2 from './about_index2/about_index2';
import AboutIndex3 from './about_index3/about_index3';
import AboutIndex4 from './about_index4/about_index4';
const About = () => {

  return (
    <ThemeProvider theme={theme}>
      <AboutIndex1 />
      <AboutIndex2/>
      <AboutIndex3/>
      <AboutIndex4/>
    </ThemeProvider>


  )
};

export default About;