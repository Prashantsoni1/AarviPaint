import React from "react";
import happyClientImg from '../../../assets/about/aboutIndex2/public-relation 2.png'
import workJobImg from '../../../assets/about/aboutIndex2/like 2.png'
import locationImg from '../../../assets/about/aboutIndex2/location (1) 2.png'
import workMemberImg from '../../../assets/about/aboutIndex2/group-chat 2.png'
import Styles from './about_index2.module.css'
import img1 from '../../../assets/about/aboutIndex2/image 21.png'
import img2 from '../../../assets/about/aboutIndex2/image 33.png'
import img3 from '../../../assets/about/aboutIndex2/image 34.png'
import img4 from '../../../assets/about/aboutIndex2/image 35.png'
import img5 from '../../../assets/about/aboutIndex2/image 36.png'
import img6 from '../../../assets/about/aboutIndex2/living-room-interior_1048-9888 4.png'
import img7 from '../../../assets/about/aboutIndex2/traditional-house-architecture.png'
const AboutIndex2 = () => {
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.container1}>
                <img src={img3} alt="" className={Styles.img} />
                <img src={img2} alt="" className={Styles.img} />
                <img src={img4} alt="" className={Styles.img} />
                <img src={img7} alt="" className={Styles.img} />
                <img src={img1} alt="" className={Styles.img} />
                <img src={img5} alt="" className={Styles.img} />
                <img src={img6} alt="" className={Styles.img} />
            </div>

            <div className={Styles.container2}>
                <div className={Styles.heading}>ABOUT US</div>
                <p className={Styles.para}>Aarvi paints was established in the year 2015 as a small company with the main objective
                    of manufacturing of Water based Paints, Oil based Paints & Wall Putty and as time passed
                    we became one of the leading company in central India.</p>
                <p className={Styles.para}>So what does it take to go from being a relatively small paint company to being a
                    leading competitor in Central India?</p>
                <p className={Styles.para}>It takes hard work and passion. It takes commitment and courage. It means marching ahead
                    with fearless innovation. It involves taking risks and celebrating when they work. It means
                    being keenly attuned to the needs of the customer. And still being invested in the environment.
                    It requires investing in R and D, in technology, in your workforce. More importantly, it
                    requires the unwavering belief in the product and resolute determination.</p>
                <div className={Styles.infoContainer}>
                    <div className={Styles.service}>
                        <img src={happyClientImg} alt="" className={Styles.containerImg} />
                        <div className={Styles.count}>1605</div>
                        <div className={Styles.title}>Happy client</div>
                    </div>
                    <div className={Styles.service}>
                        <img src={workJobImg} alt="" className={Styles.containerImg} />
                        <div className={Styles.count}>10000</div>
                        <div className={Styles.title}>Work Job</div>
                    </div>
                    <div className={Styles.service}>
                        <img src={locationImg} alt="" className={Styles.containerImg} />
                        <div className={Styles.count}>1825</div>
                        <div className={Styles.title}>Location</div>
                    </div>
                    <div className={Styles.service}>
                        <img src={workMemberImg} alt="" className={Styles.containerImg} />
                        <div className={Styles.count}>250</div>
                        <div className={Styles.title}>Work Member</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIndex2;