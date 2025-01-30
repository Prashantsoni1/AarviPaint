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
import exterior from "../../assets/calculator/Exterior_Paint.png";
import colorGuide from "../../assets/calculator/Color_Guide.png";
import arrow from '../../assets/icons/right_arrow_blc.png'
import styles from './calculator.module.css'
const images = [
    { src: interiorWallPaint, alt: "Interior Wall Paint", title: "Paint Budget Calculator" },
    { src: exterior, alt: "Exterior Paint", title: "Waterproofing Calculator" },
    { src: colorGuide, alt: "Color Guide", title: "Home Color Guide" },
];

const Calculator = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box textAlign="center" mb={6}>
                <Typography
                    component="h1"
                    variant="h3"
                    color="black"
                    gutterBottom
                    sx={{ fontWeight: 400, mb: 3 , fontFamily: 'Poppins',fontSize: 25 }}
                >
                    Plan Your Perfect Paint Budget
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: "800px", mx: "auto", mb: 6 , fontFamily: 'Poppins',fontSize: 18 }}
                >
                    Take the guesswork out of painting costs. Measure, choose, and
                    calculate effortlessly to design a budget that fits your vision and
                    space. Transform your walls with confidence!
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



// import React from "react";
// import interiorWallPaint from '../../assets/calculator/interior_Wall_Paint.png';
// import exterior from '../../assets/calculator/Exterior_Paint.png';
// import colorGuide from '../../assets/calculator/Color_Guide.png';

// const images = [
//     { src: interiorWallPaint, alt: "Interior Wall Paint" },
//     { src: exterior, alt: "Exterior Paint" },
//     { src: colorGuide, alt: "Color Guide" }
// ];

// const Calculator: React.FC = () => {
//     return (
//         <>
//             <div>
//                 <h3>Plan your perfect paint budget</h3>
//                 <p>
//                     Take the guesswork out of painting costs. Measure, choose, and calculate
//                     effortlessly to design a budget that fits your vision and space. Transform
//                     your walls with confidence!
//                 </p>

//                 {/* Image Section */}
//                 <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
//                     {images.map((image, index) => (
//                         <img key={index} src={image.src} alt={image.alt} style={{ width: "200px", height: "150px" }} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Calculator;

