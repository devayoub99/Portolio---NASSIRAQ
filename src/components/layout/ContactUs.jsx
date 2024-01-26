import { useState } from "react";

import { socialMedia } from "../../data";
import SocialMediaIcon from "../SocialMediaIcon";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    msg: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevObj) => {
      const { name, value } = e.target;

      return {
        ...prevObj,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here when we send the collected data to server
  };

  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <h2 className="special-heading">
          Contact <span className="colored">us</span>
        </h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            cols="20"
            rows="5"
            placeholder="Your Message"
            className="input-field"
            name="msg"
            value={formData.msg}
            onChange={handleInputChange}
          />
          <div className="contact-ways">
            <input type="submit" value="Send" className="submit-btn" />
            <div className="social-media">
              {socialMedia.map((el) => (
                <SocialMediaIcon key={el.id} {...el} />
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
