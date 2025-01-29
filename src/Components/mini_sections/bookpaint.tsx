import styles from "./bookpaint.module.css";
// import { Box, Grid, Typography, Button } from '@mui/material';
import manPainting from "../../assets/booking_img.png";
import image1 from "../../assets/house 1 (1).png";
import image2 from "../../assets/painting-brush 1.png";
import image3 from "../../assets/pantone 1 (1).png";
import arrow from "../../assets/icons/right_arrow_blc.png";

const steps = [
  {
    count: 1,
    image: image1,
    description:
      "Choose your house for painting with a variety of designs and options.",
  },
  {
    count: 2,
    image: image2,
    description: "Select the painting tools and materials needed for the job.",
  },
  {
    count: 3,
    image: image3,
    description: "Finalize the colors and patterns to personalize your space.",
  },
];

const BookPaint = () => {
  return (
    <>
      {/* <Box sx={{
        display: 'flex',       
        justifyContent: 'center', 
        alignItems: 'center',    
        margin:'80px 0'      
      }}>
    <Box   sx={{
   
    background: 'linear-gradient(127deg, rgba(231,232,237,1) 0%, rgba(242,192,142,1) 69%, rgba(235,172,109,1) 100%)',
    border: '2px solid',
    borderColor: 'primary.main',
    borderRadius: '8px',
    width: '80%',
  }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <img 
            src={manPainting} 
            alt="Man Painting" 
            style={{ width: '100%' }} 
          />
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ marginTop: '1rem' }}
          >
            Book your free site
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Easy Steps to Book Paint Online
          </Typography>

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
    </Box> */}

      <div className={styles.main_bg}>
        <img
          src={manPainting}
          alt="Man Painting"
          className={styles.service_img}
        />

        <div className={styles.booking_step}>
          <div>
            <p className={styles.booking_heading}>
              Easy Steps to Book Paint Online
            </p>

            <div className={styles.booking_steps_contain}>
              {steps.map((step, index) => (
                <div className={styles.booking_step_container}>
                  <div className={styles.booking_step_icon_count}>
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      style={{
                        width: "100%",
                        maxWidth: "50px",
                        height: "auto",
                      }}
                    />
                    <div className={styles.booking_count}>{step.count}</div>
                  </div>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.booking_button}>
          <a href="#">
            <p className={styles.booking_btn}>Book your free site</p>{" "}
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </>
  );
};

export default BookPaint;
