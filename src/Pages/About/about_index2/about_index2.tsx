// import React from "react";
import Styles from './about_index2.module.css';

import happyClientImg from '../../../../public/assets/about/aboutIndex2/public-relation 2.png';
import workJobImg from '../../../../public/assets/about/aboutIndex2/like 2.png';
import locationImg from '../../../../public/assets/about/aboutIndex2/location (1) 2.png';
import workMemberImg from '../../../../public/assets/about/aboutIndex2/group-chat 2.png';
import aboutImg from "../../../../public/assets/about/aboutIndex2/about_side.png";
import leftbg from '../../../../public/assets/about/aboutIndex2/leftbg.png';
import rightbg from '../../../../public/assets/about/aboutIndex2/rightbg.png';

const contentData = {
    heading: "ABOUT US",
    paragraphs: [
        "Aarvi paints was established in the year 2015 as a small company with the main objective of manufacturing of Water based Paints, Oil based Paints & Wall Putty and as time passedwe became one of the leading company in central India.",
        "So what does it take to go from being a relatively small paint company to being a leading competitor in Central India?",
        "It takes hard work and passion. It takes commitment and courage. It means marching ahead with fearless innovation.It involves taking risks and celebrating when they work.It means being keenly attuned to the needs of the customer.And still being invested in the environment.It requires investing in R and D, in technology, in your workforce.More importantly, it requires the unwavering belief in the product and resolute determination."
    ]
};

const serviceStats = [
    { img: happyClientImg, count: 1605, title: "Happy client" },
    { img: workJobImg, count: 10000, title: "Work Job" },
    { img: locationImg, count: 1825, title: "Location" },
    { img: workMemberImg, count: 250, title: "Work Member" }
];

const AboutIndex2 = () => {
    return (
        <div className={Styles.mainContainer}>
            <img src={leftbg} alt="" className={Styles.leftImage} />
            <img src={rightbg} alt="" className={Styles.rightImage} />

            <div className={Styles.container}>
                <div className={Styles.container2}>
                    <img src={aboutImg} alt="" className={Styles.sideImage} />
                </div>

                <div className={Styles.container2}>
                    <div className={Styles.contentSection}>
                        <div className={Styles.head}>
                            <div className={Styles.heading}>{contentData.heading}</div>
                            <div className={Styles.line}></div>
                        </div>

                        {contentData.paragraphs.map((para, index) => (
                            <p className={Styles.para} key={index}>{para}</p>
                        ))}

                        <div className={Styles.infoContainer}>
                            {serviceStats.map((stat, index) => (
                                <div className={Styles.service} key={index}>
                                    <img src={stat.img} alt="" className={Styles.containerImg} />
                                    <div className={Styles.count}>{stat.count}</div>
                                    <div className={Styles.title}>{stat.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIndex2;
