import React, { useState } from "react";
import "./AboutUs.css";
import { customFetch } from "../Utils";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await customFetch.post("/contactUs", formData);
      console.log("Form submitted:", response.data);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        <h1>About Us</h1>
        <p>Welcome to E-School, where education meets excellence!</p>
        <h3>Our Vision</h3>
        <p>
          At E-School, we envision fostering a learning environment that
          empowers students to discover their full potential and become
          responsible, compassionate, and lifelong learners.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide quality education that inspires critical
          thinking, creativity, and a passion for learning. We are dedicated to
          nurturing well-rounded individuals who are prepared to face the
          challenges of the future with confidence and integrity.
        </p>
        <h3>Who We Are</h3>
        <h6>History</h6>
        <p>
          E-School has a rich history. Over the years, we have evolved into a
          hub of academic and extracurricular excellence, guided by the
          principles of innovation, inclusivity, and community.
        </p>
        <h6>Faculty and Staff</h6>
        <p>
          Our dedicated team of experienced educators is committed to creating a
          supportive and engaging learning environment. They bring expertise,
          enthusiasm, and a genuine love for teaching to inspire students every
          day.
        </p>
        <h6>Facilities</h6>
        <p>
          E-School boasts state-of-the-art facilities designed to enhance the
          overall learning experience. From modern classrooms to well-equipped
          science labs, libraries, sports facilities, and more, we provide the
          resources necessary for holistic development.
        </p>
        <h3>Core Values</h3>
        <div>
          <li>
            Excellence: We strive for academic and personal excellence in all
            endeavors.
          </li>
          <li>
            Integrity: We uphold the highest standards of honesty, ethics, and
            accountability.
          </li>
          <li>
            Community: We foster a sense of belonging and collaboration within
            our school community.
          </li>
          <li>
            Innovation: We embrace creativity and forward-thinking to adapt to a
            changing world.
          </li>
        </div>
        <h3>Beyond Academics</h3>
        <p>
          Education at E-School goes beyond textbooks. We encourage students to
          explore their interests through a variety of extracurricular
          activities, clubs, and community service initiatives. Our goal is to
          develop well-rounded individuals with a love for learning and a sense
          of responsibility to the world around them.
        </p>
        <h3>Join Us in the Journey</h3>
        <p>
          We invite students, parents, and the community to join us in this
          exciting educational journey. Together, let's create a future where
          every student achieves their dreams and makes a positive impact on the
          world.
        </p>
        <p>
          Thank you for considering E-School for your educational needs. We look
          forward to being a part of your educational journey!
        </p>
        <hr />
        <hr />
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="btn-contact" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
