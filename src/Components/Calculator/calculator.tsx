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
import interiorWallPaint from "../../../public/assets/calculator/interior_Wall_Paint.png";
import exterior from "../../../public/assets/calculator/waterProofing.png";
import colorGuide from "../../../public/assets/calculator/colorGuide.jpeg";
import arrow from "../../../public/assets/calculator/down-arrow 2.png";
import styles from "./calculator.module.css";

const Calculator = () => {
    const contentData = {
        heading: "Plan Your Perfect Paint Budget",
        paragraph:
            "Take the guesswork out of painting costs. Measure, choose, and calculate effortlessly to design a budget that fits your vision and space. Transform your walls with confidence!",
    };

    const cardData = [
        {
            src: interiorWallPaint,
            alt: "Interior Wall Paint",
            title: "Paint Budget Calculator",
            link: "/paint-budget",
        },
        {
            src: exterior,
            alt: "Exterior Paint",
            title: "Waterproofing Calculator",
            link: "/waterproofing",
        },
        {
            src: colorGuide,
            alt: "Color Guide",
            title: "Home Color Guide",
            link: "/color-guide",
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 8 }} className="card_img">
            <Box textAlign="center" mb={6}>
                <div className={styles.heading_calcu}>
                    {contentData.heading}
                </div>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        maxWidth: "800px",
                        mx: "auto",
                        mb: 6,
                        fontFamily: "Poppins",
                        fontSize: 18,
                    }}
                >
                    {contentData.paragraph}
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {cardData.map((card, index) => (
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
                            <CardMedia
                                component="img"
                                height="400"
                                image={card.src}
                                alt={card.alt}
                                sx={{ objectFit: "cover" }}
                            />

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
                                    <Box className={styles.overlay} />
                                    <a href={card.link}>
                                        <p className={styles.caculator_btn}>{card.title}</p>
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
