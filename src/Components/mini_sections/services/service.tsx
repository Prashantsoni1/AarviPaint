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
      bgImage: "url('../../../../public/assets/service/interior.png')",
    },
    {
      title: "Exterior",
      description: "Protect and beautify your home's facade with our long-lasting, weather-resistant exterior paints.",
      link: "/services/exterior",
      bgImage: "url('../../../../public/assets/service/exterior.png')",
    },
  ];

  return (
    <div 
      className="w-full h-auto md:h-screen md:bg-[url('../../../../public/assets/service/service-bg1.png')] bg-[url('../../../../public/assets/service/service-bg2.png')] bg-center bg-cover mb-16 relative flex flex-col md:flex-row items-center justify-between text-white px-4 py-10 md:py-0"
    >
      <div className="w-full md:w-1/2 mx-auto md:ml-12 lg:ml-16 md:text-center  text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">{contentData.heading}</h2>
        
        <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl w-full md:w-80 h-64 overflow-hidden flex flex-col justify-end p-4"
              style={{ backgroundImage: card.bgImage, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl z-0"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-medium font-[Poppins] mb-2 border-b border-white w-1/3">
                  {card.title}
                </h2>
                
                <div className="flex items-center justify-between gap-2 mt-2">
                  <p className="text-sm text-gray-200 text-left w-[80%] leading-4">
                    {card.description}
                  </p>
                  
                  <div className="booking-button">
                    <a 
                      href={card.link}
                      className="bg-white border border-black w-12 h-12 flex justify-center items-center rounded-full overflow-hidden transition-all hover:bg-gray-100"
                    >
                      <img src={arrow} alt="Arrow" className="w-3/5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={modal}
        alt="Service Modal"
        className="hidden md:block w-auto h-screen absolute right-14 top-6"
        data-aos="zoom-in"
        data-aos-offset="500"
      />
    </div>
  );
};

export default Services;