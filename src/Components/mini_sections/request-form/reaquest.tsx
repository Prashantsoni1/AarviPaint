import  { useState ,FormEvent} from "react";
import Styles from "./request.module.css";

import phone from "../../../../public/assets/request/reques-side.png";
import { requestForm } from "../../../types";
import { requestQuote } from "../../../api/requestQuote";
import { Container } from "@mui/material";

const Request = () => {
 
  const [formData, setFormData] = useState<requestForm>({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await requestQuote(formData);

    if (response.success) {
      console.log("Form submitted successfully:", response.data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        postalCode: "",
        message: "",
      });
    } else {
      console.error("Error:", response.message);
    }
  };
  return (
    <>
    <Container>
      <div className={Styles.request_main}>
        <div className={Styles.request_section}>
          <div className={Styles.request_content}>
            <h2>Request a Quote</h2>
            <div className={Styles.request_form} >
              <div className={Styles.form_input}>
                <input type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange} />

                <input type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange} />
              </div>
              <div className={Styles.form_input}>
                <input type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange} />
                <input type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange} />
              </div>
              <textarea name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange} rows={4}  />
              <button className={Styles.hover_button} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <img src={phone} alt="baclground" className={Styles.side_phone} data-aos="zoom-in" data-aos-offset="500" />
      </div>
      </Container>
    </>
  );
};

export default Request;
