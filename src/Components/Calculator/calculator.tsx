import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import "@fontsource/rubik-doodle-shadow";
import "@fontsource/poppins";
import interiorWallPaint from "../../assets/calculator/interior_Wall_Paint.png";
import exterior from "../../assets/calculator/waterProofing.png";
import colorGuide from "../../assets/calculator/colorGuide.jpeg";
import arrow from '../../assets/calculator/down-arrow 2.png'
import styles from './calculator.module.css'

const Calculator = () => {
    const images = [
        { src: interiorWallPaint, alt: "Interior Wall Paint", title: "Paint Budget Calculator" },
        { src: exterior, alt: "Exterior Paint", title: "Waterproofing Calculator" },
        { src: colorGuide, alt: "Color Guide", title: "Home Color Guide" },
    ];
    const contentData = {
        heading: "Plan Your Perfect Paint Budget",
        paragraph: " Take the guesswork out of painting costs. Measure, choose, and  calculate effortlessly to design a budget that fits your vision and space. Transform your walls with confidence!",
    }
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box textAlign="center" mb={6}>
                <Typography
                    component="h1"
                    variant="h3"
                    color="black"
                    gutterBottom
                    sx={{ fontWeight: 400, fontFamily: 'Poppins', fontSize: 25 }}
                >
                    {contentData.heading}
                </Typography>
                {/* Line below the heading */}
                <Box
                    sx={{
                        width: "420px",
                        height: "2px",
                        backgroundColor: "black",
                        margin: "0 auto",
                        borderRadius: "2px",
                        marginBottom: 3
                    }}
                />
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: "800px", mx: "auto", mb: 6, fontFamily: 'Poppins', fontSize: 18 }}
                >
                    {contentData.paragraph}
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                position: "relative",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                borderRadius: 2,
                            }}
                        >
                            {/* Image */}
                            <CardMedia
                                component="img"
                                height="400"
                                image={image.src}
                                alt={image.alt}
                                sx={{ objectFit: "cover" }}
                            />
                            {/* Index Number at Top Right */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 10,
                                    right: 10,
                                    color: "white",
                                    fontSize: "80px",
                                    fontWeight: "bold",
                                    fontFamily: "'Rubik Doodle Shadow'",
                                }}
                            >
                                {index + 1}
                            </Box>

                            {/* Gradient Overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background:
                                        "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                                }}
                            />
                            {/* Card Content (Optional) */}
                            {/* <CardContent
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    color: "white",
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                <Box className={styles.caculator_button} >
                                    <a href="#">
                                        <p className={styles.caculator_btn}>{image.title}</p>
                                        <img src={arrow} alt="arrow" />
                                    </a>  
                                    
                                </Box>
                            </CardContent> */}
                            <CardContent
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    color: "white",
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                <Box className={styles.caculator_button}>
                                    {/* Overlay Box on the Button */}
                                    <Box className={styles.overlay} />

                                    <a href="#">
                                        <p className={styles.caculator_btn}>{image.title}</p>
                                        <img src={arrow} alt="arrow" />
                                    </a>
                                </Box>
                            </CardContent>


                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Calculator;

