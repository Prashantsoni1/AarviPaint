import React from 'react';
import { Slide } from '@mui/material';
import styles from './slider.module.css';
import image1 from '../../assets/Interior (1) 1.png';
import image2 from '../../assets/Interior 1.png';

const InfiniteImageSlider = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const images = [
    image1,
    image2,
  ];
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % images.length);
    }, 3000  );
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles['slider-container']}>
      {images.map((image, index) => (
        <Slide 
          key={index} 
          direction="right" 
          in={activeStep === index} 
          mountOnEnter 
          unmountOnExit
          className={styles.slide}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`}
            className={styles['slider-image']}
          />
        </Slide>
      ))}
    </div>
  );
};

export default InfiniteImageSlider;
