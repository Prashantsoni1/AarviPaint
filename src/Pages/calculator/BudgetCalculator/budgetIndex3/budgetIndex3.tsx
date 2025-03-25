import React from "react";
import Styles from './budgetIndex3.module.css'

const BudgetIndex3 = () => {

    return (

        <div className={Styles.main}>
            <div className={Styles.container}>
                <div className={Styles.containerLeft}>

                </div>
                <div className={Styles.containerRight}>
                    <div className={Styles.heading}>Why Choose Aarvi Paints?</div>

                    <div className={Styles.para}>
                        At Aarvi Paints, we believe in transforming spaces with high-quality, affordable, and long-lasting paints.
                        Whether it’s a home, office, or commercial project, we ensure the best results with our premium products
                        and expert guidance.
                    </div>
                    <div className={Styles.feature}>
                        <ol>
                            <li className={Styles.points}>Premium Quality Paints – Long-lasting, vibrant colors with superior coverage.</li>
                            <li className={Styles.points}>Affordable Pricing – Options for every budget without compromising on quality.</li>
                            <li className={Styles.points}>Accurate Budget Estimation – Plan your costs efficiently with our smart tools.</li>
                            <li className={Styles.points}>Expert Assistance – Get professional guidance for the perfect finish.</li>
                            <li className={Styles.points}>Eco-Friendly & Safe – Low-VOC, non-toxic paints for a healthier space.</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>

    )
};

export default BudgetIndex3;