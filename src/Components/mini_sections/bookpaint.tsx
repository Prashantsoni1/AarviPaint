import React, { useState, ChangeEvent } from "react";
import manPainting from "../../../public/assets/booking_img.png";
import image1 from "../../../public/assets/house 1 (1).png";
import image3 from "../../../public/assets/painting-brush 1.png";
import image2 from "../../../public/assets/pantone 1 (1).png";
import arrow from "../../../public/assets/icons/right_arrow_blc.png";

const steps = [
  {
    count: 1,
    image: image1,
    description: "Sign up for site visit and home evaluation, free of cost",
  },
  {
    count: 2,
    image: image2,
    description: "Approve our Digital Quotation and choose your wall colour",
  },
  {
    count: 3,
    image: image3,
    description: "Witness flawless wall finish delivered on time by our experts",
  },
];

interface FormData {
  name: string;
  email: string;
  number: string;
  pincode: string;
  updateOnWhatsApp: boolean;
  homeowner: boolean;
  contractor: boolean;
}

const BookPaint = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    pincode: "",
    updateOnWhatsApp: false,
    homeowner: false,
    contractor: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        homeowner: name === "homeowner" ? checked : false,
        contractor: name === "contractor" ? checked : false,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleModal = () => {
    setShowModal(true);
  };

  const handleToggleWhatsApp = () => {
    setFormData((prevData) => ({
      ...prevData,
      updateOnWhatsApp: !prevData.updateOnWhatsApp,
    }));
  };

  return (
    <>
      <div className="w-[85%] relative rounded-2xl p-0 md:pr-5 my-16 mx-auto flex flex-col md:flex-row items-center bg-gradient-to-br from-[#e7e8ed] via-[#f2c08e] to-[#ebac6d] shadow-lg">
        <img
          src={manPainting}
          alt="Man Painting"
          className="w-full md:w-[35%] p-0 m-0 md:block hidden"
        />

        <div className="w-full md:w-[65%] p-4">
          <p className="text-center text-xl md:text-2xl border-b border-black w-full md:w-[53%] mx-auto pt-5">
            Easy Steps to Book Paint Online
          </p>

          <div className="flex  justify-between items-center text-center mt-3 mb-1 gap-6 md:gap-0">
            {steps.map((step, index) => (
              <div 
                className="flex flex-col items-center w-full md:w-[30%]" 
                key={index}
                data-aos="zoom-in" 
                data-aos-offset="500"
              >
                <div className="relative rounded-full border border-black w-18 h-18 md:w-[100px] md:h-[100px] my-6 flex justify-center items-center">
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className="w-8 h-8 md:w-12 md:h-12 filter invert"
                  />
                  <div className="absolute -bottom-2 bg-black text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs">
                    {step.count}
                  </div>
                </div>
                <p className="w-full md:w-[92%] text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative md:absolute bottom-8 left-0 w-full md:w-auto mb-6 md:mb-0">
          <div 
            className="bg-[#ebac6d] shadow-inner h-10 flex items-center pl-5 pr-3 text-black rounded-r-full md:rounded-l-none rounded-full gap-4 md:gap-10 relative overflow-hidden z-50 transition-all duration-300 cursor-pointer hover:bg-[#eea55c] hover:shadow-[#0000004d_4px_4px_12px,_inset_0px_0px_10px_rgba(0,0,0,0.404)]"
            onClick={handleModal}
          >
            <p className="relative z-10">Book your free site</p>
            <img src={arrow} alt="arrow" className="w-5 relative z-10" />
            <div className="absolute top-0 -left-[60%] w-24 h-full bg-[url('../../../public/assets/logotop.png')] bg-cover bg-center transition-transform duration-800 ease-in-out z-0 hover:translate-x-[250%]"></div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-5 rounded-xl w-full max-w-md md:max-w-2xl relative">
            <span 
              className="absolute top-3 right-4 text-2xl cursor-pointer bg-transparent border-none"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text-xl font-bold mb-4">Book your free site visit</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full md:w-[48%] border border-gray-300 rounded-2xl p-3"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="w-full md:w-[48%] border border-gray-300 rounded-2xl p-3"
                  placeholder="Number"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full md:w-[48%] border border-gray-300 rounded-2xl p-3"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full md:w-[48%] border border-gray-300 rounded-2xl p-3"
                  placeholder="Pin Code"
                />
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div 
                  className={`w-12 h-6 rounded-full border-2 ${formData.updateOnWhatsApp ? 'border-green-500' : 'border-gray-300'} relative cursor-pointer transition-all`}
                  onClick={handleToggleWhatsApp}
                >
                  <div 
                    className={`absolute top-1/2 w-5 h-5 bg-green-500 rounded-full transform -translate-y-1/2 transition-all ${formData.updateOnWhatsApp ? 'left-7' : 'left-1'}`}
                  ></div>
                </div>
                <span className="text-sm font-[Poppins] font-normal">Update me on WhatsApp</span>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <label className="flex items-start gap-2 text-sm font-[Poppins] font-normal">
                  <input
                    type="checkbox"
                    name="homeowner"
                    checked={formData.homeowner}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  I am a homeowner looking for the perfect paint for my space.
                </label>
                <label className="flex items-start gap-2 text-sm font-[Poppins] font-normal">
                  <input
                    type="checkbox"
                    name="contractor"
                    checked={formData.contractor}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  I am a contractor searching for premium paints for my projects.
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button 
                className="w-full md:w-[40%] border border-black rounded-full py-2 px-4 transition-colors hover:bg-gray-100"
                onClick={closeModal}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookPaint;