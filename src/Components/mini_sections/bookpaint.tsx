// import styles from './bookpaint.module.css'
import { Box, Grid, Typography, Button } from '@mui/material';
import manPainting from '../../assets/man_painting.png';
import image1 from '../../assets/house 1 (1).png';
import image2 from '../../assets/painting-brush 1.png';
import image3 from '../../assets/pantone 1 (1).png';

const steps = [
  {
    image: image1,
    description: 'Choose your house for painting with a variety of designs and options.',
  },
  {
    image: image2,
    description: 'Select the painting tools and materials needed for the job.',
  },
  {
    image: image3,
    description: 'Finalize the colors and patterns to personalize your space.',
  },
];

const BookPaint = () => {
  return (
    <Box sx={{
        display: 'flex',       
        justifyContent: 'center', 
        alignItems: 'center',    
        height: '50vh',       
      }}>
    <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9' ,border: '2px solid',borderColor: 'primary.main', borderRadius: '8px',  width:'80%'}}>
      {/* Main Container */}
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <img 
            src={manPainting} 
            alt="Man Painting" 
            style={{ width: '100%', maxWidth: '400px' }} 
          />
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ marginTop: '1rem' }}
          >
            Book your free site
          </Button>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Easy Steps to Book Paint Online
          </Typography>

          {/* Steps Section */}
          {steps.map((step, index) => (
            <Grid 
              container 
              alignItems="center" 
              spacing={2} 
              key={index} 
              sx={{ marginBottom: '1rem' }}
            >
              <Grid item>
                <Box 
                  sx={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img 
                    src={step.image} 
                    alt={`Step ${index + 1}`} 
                    style={{ width: '100%', maxWidth: '50px', height: 'auto' }} 
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {step.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default BookPaint;