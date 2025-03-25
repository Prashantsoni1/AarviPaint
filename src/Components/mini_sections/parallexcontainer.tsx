import styles from "./parallex.module.css";

const contentData = [
  {
    id: 1,
    title: "Interior Emulsions",
    subtitle: "Effortless Elegance, Timeless Durability",
    description:
      "Aarvi Paints’ range of premium Interior Emulsions transforms your walls into a masterpiece with ease. Designed for effortless application and vibrant, long-lasting finishes, our water-based formulas ensure beauty that endures. Whether your style calls for ultimate sophistication (Diamond), classic charm (Pearl), versatile simplicity (Quartz), or budget-friendly brilliance (Crystal), Aarvi Paints caters to every dream and design.",
    styleClass: "parallax-container",
    link: "/products",
  },
  {
    id: 2,
    title: "Exterior Emulsions",
    subtitle: "Protection Meets Perfection",
    description:
      "Aarvi Paints’ Exterior Emulsions combine cutting-edge technology with stunning aesthetics to shield your home from the harshest elements while enhancing its beauty. Choose from weather-resistant elegance (Platinum Shield), timeless resilience (Golden Guard), adaptable strength (Silver Coat), or cost-effective durability (Bronze Shield). With superior UV protection and anti-fungal properties, your home will stay radiant and safeguarded for years.",
    styleClass: "parallax-container2",
    link: "/products",
  },
  {
    id: 3,
    title: "Interior & Exterior Emulsions",
    subtitle: "Seamless Beauty Inside and Out",
    description:
      "Aarvi Paints offers a versatile range of Interior & Exterior Emulsions that ensure your home shines in every corner. With innovative formulas that blend durability, vibrancy, and effortless application, our collection includes luxurious finishes (Opal Touch), enduring appeal (Sapphire Glow), all-weather performance (Amber Flex), and economical brilliance (Citrine Style). Aarvi Paints ensures your home makes a lasting impression, inside and out.",
    styleClass: "parallax-container3",
    link: "/products",
  },
  {
    id: 4,
    title: "Waterproofing",
    subtitle: "Protection Meets Perfection",
    description:
      "Aarvi Paints’ Exterior Emulsions combine cutting-edge technology with stunning aesthetics to shield your home from the harshest elements while enhancing its beauty. Choose from weather-resistant elegance (Platinum Shield), timeless resilience (Golden Guard), adaptable strength (Silver Coat), or cost-effective durability (Bronze Shield). With superior UV protection and anti-fungal properties, your home will stay radiant and safeguarded for years.",
    styleClass: "parallax-container4",
    link: "/services/waterproofing",
  },

];

const ParallaxComponent = () => {
  return (
    <>
      {contentData.map((item) => (
        <section key={item.id} className={`${styles["parallax-container"]} ${styles[item.styleClass]}`}>
          <div>
            <h1>{item.title}</h1>
            <h3>{item.subtitle}</h3>
            <p>{item.description}</p>
            <div className={styles.booking_button}>
              <a href={item.link}>
                <p className={styles.booking_btn}>View More</p>
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ParallaxComponent;
