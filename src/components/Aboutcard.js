import React from "react";
import edphoto from "../assets/edberisha.png";
import "./Aboutcard.css"; // Import CSS file for styling

const Aboutcard = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <img src={edphoto} alt="Ed Berisha" className="ed-photo" />
        <div className="text-container">
          <h2 style={{color:"white"}}>About Me</h2>
          <p>
            I'm a fullstack software engineer with frontend and 
            backend contract experience  at
            Peak Artificial Intelligence. My education includes my software
            engineering certification from the Flatiron School, as well as a
            Bachelors Degree in Economics from Fordham University. I'm seeking
            a software engineering position in the NYC-Metro area. 
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcard;
