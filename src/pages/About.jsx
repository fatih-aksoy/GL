import React from "react";
import aboutImage from "../assets/aboutImage.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quod
          dolores commodi a perferendis aspernatur, error corporis! Possimus
          dicta tenetur dolores laborum, esse commodi illo pariatur architecto
          quod delectus eveniet?
        </p>
      </div>
    </div>
  );
};

export default About;
