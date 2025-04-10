import { useEffect, useState } from "react";

const contentData = [
  {
    id: 5,
    title: "Interior Emulsions",
    subtitle: "Effortless Elegance, Timeless Durability",
    description:
      "Aarvi Paints’ range of premium Interior Emulsions transforms your walls into a masterpiece with ease. Designed for effortless application and vibrant, long-lasting finishes, our water-based formulas ensure beauty that endures. Whether your style calls for ultimate sophistication (Diamond), classic charm (Pearl), versatile simplicity (Quartz), or budget-friendly brilliance (Crystal), Aarvi Paints caters to every dream and design.",
    desktopBg: "/assets/bg1.png",
    mobileBg: "/assets/bgmob1.png",
    link: "/products",
  },
  {
    id: 3,
    title: "Exterior Emulsions",
    subtitle: "Protection Meets Perfection",
    description:
      "Aarvi Paints’ Exterior Emulsions combine cutting-edge technology with stunning aesthetics to shield your home from the harshest elements while enhancing its beauty. Choose from weather-resistant elegance (Platinum Shield), timeless resilience (Golden Guard), adaptable strength (Silver Coat), or cost-effective durability (Bronze Shield). With superior UV protection and anti-fungal properties, your home will stay radiant and safeguarded for years.",
    desktopBg: "/assets/bg2.png",
    mobileBg: "/assets/bgmob2.png",
    link: "/products",
  },
  {
    id: 2,
    title: "Enamel",
    subtitle: "Protection Meets Perfection",
    description:
      "Aarvi Paints’ Exterior Emulsions combine cutting-edge technology with stunning aesthetics to shield your home from the harshest elements while enhancing its beauty. Choose from weather-resistant elegance (Platinum Shield), timeless resilience (Golden Guard), adaptable strength (Silver Coat), or cost-effective durability (Bronze Shield). With superior UV protection and anti-fungal properties, your home will stay radiant and safeguarded for years.",
    desktopBg: "/assets/bg3.png",
    mobileBg: "/assets/bgmob3.png",
    link: "/products",
  },
  {
    id: 4,
    title: "Waterproofing",
    subtitle: "Protection Meets Perfection",
    description:
      "Aarvi Paints’ Exterior Emulsions combine cutting-edge technology with stunning aesthetics to shield your home from the harshest elements while enhancing its beauty. Choose from weather-resistant elegance (Platinum Shield), timeless resilience (Golden Guard), adaptable strength (Silver Coat), or cost-effective durability (Bronze Shield). With superior UV protection and anti-fungal properties, your home will stay radiant and safeguarded for years.",
    desktopBg: "/assets/bg4.png",
    mobileBg: "/assets/bgmob4.png",
    link: "/services/waterproofing",
  },
  {
    id: 1,
    title: "Interior & Exterior Both",
    subtitle: "Seamless Beauty Inside and Out",
    description:
      "Aarvi Paints offers a versatile range of Interior & Exterior Emulsions that ensure your home shines in every corner. With innovative formulas that blend durability, vibrancy, and effortless application, our collection includes luxurious finishes (Opal Touch), enduring appeal (Sapphire Glow), all-weather performance (Amber Flex), and economical brilliance (Citrine Style). Aarvi Paints ensures your home makes a lasting impression, inside and out.",
    desktopBg: "/assets/bg5.png",
    mobileBg: "/assets/bgmob5.png",
    link: "/products",
  },
];

const ParallaxComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {[...contentData]
        .sort((a, b) => a.id - b.id)
        .map((item) => {
          const bgImage = isMobile ? item.mobileBg : item.desktopBg;
          return (
            <section
              key={item.id}
              className={`
                min-h-[90vh] bg-cover bg-center bg-no-repeat 
                flex md:items-center  px-6 py-20 md:py-0
                text-white [background-attachment:fixed]
              `}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h1 className="font-serif font-medium text-3xl md:text-6xl">
                  {item.title}
                </h1>
                <h3 className="font-serif font-medium text-xl md:text-2xl">
                  {item.subtitle}
                </h3>
                <p className="text-base md:text-lg w-full md:w-[90%]">
                  {item.description}
                </p>

                <div className="relative z-10 mt-4">
                  <a
                    href={item.link}
                    className="relative flex items-center justify-center gap-6 w-52 h-10 bg-white border border-black text-black rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r from-gray-100 via-orange-300 to-orange-400"
                  >
                    <div
                      className="absolute top-0 left-[-50%] w-24 h-full bg-center bg-cover transition-transform duration-700 ease-in-out z-0 hover:translate-x-[200%]"
                      style={{
                        backgroundImage: "url(/assets/logotop.png)",
                      }}
                    ></div>
                    <p className="relative z-10 text-center">View More</p>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default ParallaxComponent;
