import Styles from "./service.module.css";
import modal from "../../../../public/assets/service/service.png";
import arrow from '../../../../public/assets/icons/right_arrow_blc.png';

const Services = () => {
  const contentData = {
    heading: "Transform Your Home with Our Expert Painting Services.",
    paragraph: "Take the guesswork out of painting costs. Measure, choose, and calculate effortlessly to design a budget that fits your vision and space. Transform your walls with confidence!",
  };

  const serviceCards = [
    {
      title: "Interior",
      description: "Achieve a smooth, vibrant, and elegant finish with our premium interior emulsion paints.",
      link: "/services/interior",
    },
    {
      title: "Exterior",
      description: "Protect and beautify your home’s facade with our long-lasting, weather-resistant exterior paints.",
      link: "/services/exterior",
    },
  ];

  return (
    <div className={Styles.service_main}>
      <div className={Styles.service_discription}>
        <h2 className={Styles.heading}>{contentData.heading}</h2>
        <div className={Styles.service_card}>
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={index === 0 ? Styles.blur_card1 : Styles.blur_card2}
            >
              <div className={Styles.gradient_overlay}></div>
              <h2>{card.title}</h2>
              {/* <div style={{ width: "161px", height: "1px", backgroundColor: "#FFFFFF" }}></div> */}
              <div className={Styles.content}>
                <p>{card.description}</p>
                <div className={Styles.booking_button}>
                  <a href={card.link}>
                    <img src={arrow} alt="Arrow" className={Styles.arrow_icon} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={modal}
        alt="Service Modal"
        className={Styles.modal}
        data-aos="zoom-in"
        data-aos-offset="500"
      />
    </div>
  );
};

export default Services;
