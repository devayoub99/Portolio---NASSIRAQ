import { useState } from "react";
import { motion as m } from "framer-motion";

import { socialMedia } from "../../data";
import { fadeInHeadingVariants, fadeInVariants } from "../../animations";

import SocialMediaIcon from "../SocialMediaIcon";

const fadeInIconsVariants = {
  from: {
    opacity: 0,
    x: 100,
  },
  to: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 * index,
    },
  }),
};

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
    <m.section
      className="contact-us"
      id="contact"
      initial="from"
      whileInView="to"
      viewport={{ once: true }}
    >
      <div className="container">
        <m.h2 className="special-heading" variants={fadeInHeadingVariants}>
          Contact{" "}
          <m.span
            className="colored"
            variants={fadeInHeadingVariants}
            custom={0.5}
          >
            us
          </m.span>
        </m.h2>
        <m.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
        >
          <m.input
            type="text"
            placeholder="Your Name"
            className="input-field"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            variants={fadeInVariants}
            custom={0.5}
          />
          <m.input
            type="email"
            placeholder="Your Email"
            className="input-field"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variants={fadeInVariants}
            custom={1}
          />
          <m.textarea
            cols="20"
            rows="5"
            placeholder="Your Message"
            className="input-field"
            name="msg"
            value={formData.msg}
            onChange={handleInputChange}
            variants={fadeInVariants}
            custom={1.5}
          />
          <div className="contact-ways">
            <input type="submit" value="Send" className="submit-btn" />
            <div className="social-media">
              {socialMedia.map((el, index) => (
                <SocialMediaIcon
                  key={el.id}
                  {...el}
                  variants={fadeInIconsVariants}
                  custom={index}
                />
              ))}
            </div>
          </div>
        </m.form>
      </div>
    </m.section>
  );
}
