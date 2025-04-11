import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from '../../../../public/assets/visualizer/arrows.png';
import visual from '../../../../public/assets/visualizer/visual.gif';
import sideImg from "../../../../public/assets/visualizer/interior-design-with-photoframes-couch 3 (2).png";
import imgUpload from "../../../../public/assets/visualizer/image- 1.png";

const Visualizer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const contentData = {
    heading: "Bring Your Walls to Life with Aarvi Paints' AI Visualizer",
    paragraph: "Explore endless color possibilities for your home. Use our AI technology to preview and choose the perfect shades effortlessly!",
  };

  const handleNavigation = () => {
    navigate("/services/visualizer");
  };

  return (
    <>
      <div 
        className="w-full bg-[linear-gradient(127deg,#01010199,#01010199)] bg-[url('../../../../public/assets/visualizer/Visual.png')] bg-no-repeat bg-center bg-cover py-10 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(127deg, rgba(1,1,1,0.6), rgba(1,1,1,0.6)), url(../../../../public/assets/visualizer/Visual.png)'
        }}
      >
        <div className="container mx-auto px-2 md:px-4">
          <h2 
            className="text-2xl md:text-4xl font-normal text-white text-center mx-auto w-full md:w-3/5 leading-[34px] md:leading-[45px]"
            data-aos="zoom-in"
          >
            {contentData.heading}
          </h2>

          <p 
            className="text-sm text-white text-center mx-auto mt-3 md:mt-5 w-full md:w-1/2"
            data-aos="zoom-in"
          >
            {contentData.paragraph}
          </p>

          <div className="flex justify-center items-center gap-5 md:gap-10 mt-8">
            <img 
              src={arrow} 
              alt="Arrow" 
              className="w-28 md:w-64" 
              data-aos="zoom-in" 
              data-aos-offset="500" 
            />
            
            <div 
              className="cursor-pointer" 
              onClick={() => setIsOpen(true)}
            >
              <img 
                src={visual} 
                alt="Visual" 
                className="w-20 h-20 md:w-36 md:h-36 object-cover rounded-full bg-white p-2 md:p-3"
                data-aos="zoom-in" 
                data-aos-offset="700" 
              />
            </div>
            
            <div data-aos="zoom-in" data-aos-offset="500">
              <img 
                src={arrow} 
                alt="Arrow" 
                className="w-28 md:w-64 rotate-180" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl h-auto md:h-[450px] relative flex flex-col">
            <span 
              className="absolute top-3 right-4 text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </span>
            
            <div className="flex flex-col md:flex-row">
              <img 
                src={sideImg} 
                alt="Visualizer Preview" 
                className="w-full md:w-1/2 h-64 md:h-[450px] object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg" 
              />
              
              <div className="w-full md:w-1/2 p-6 flex flex-col items-center gap-6">
                <h2 className="text-xl md:text-2xl font-medium text-center p-2">
                  {contentData.heading}
                </h2>
                
                <div className="w-full md:w-[70%] border-2 border-dashed border-black h-48 rounded-lg flex flex-col justify-center items-center">
                  <img src={imgUpload} alt="" className="w-12 h-12" />
                  <p className="mt-3">Upload Images</p>
                </div>
                
                <button 
                  className="w-36 h-10 border border-[#007380] rounded-full bg-white hover:bg-gray-50 transition-colors"
                  onClick={handleNavigation}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Visualizer;