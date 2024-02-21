import React from "react";
import edphoto from "../assets/edberisha.png";
import "./Aboutcard.css"; // Import CSS file for styling

const Aboutcard = () => {
  return (
    <div className="about-container">
      <div style={{ marginRight: "85px" }} className="about-card">
        <img src={edphoto} alt="Ed Berisha" className="ed-photo" />
        <div className="text-container">
          <h2 style={{ color: "white" }}>About Me</h2>
          <p>
            I'm a fullstack software engineer with frontend and backend contract
            experience at Peak Artificial Intelligence. My education includes my
            software engineering certification from the Flatiron School, as well
            as a Bachelors Degree in Economics from Fordham University. I'm
            seeking a software engineering position in the NYC-Metro area.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div className="text-container">
          <h2 style={{ textAlign: "center", color: "white" }}>
            Technical Stack
          </h2>

          <p style={{ fontSize: "25px", textAlign: "center" }}>Python:</p>
          <ul style={{ marginBottom: "10px" }}>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Web Frameworks: Flask</li>
            <li>Object-Relational Mapping (ORM): SQLAlchemy</li>
            <li>Data Analysis and Visualization: pandas</li>
            <li>Authorization: Flask-Security, Flask-JWT</li>
            <li>Password Hashing: bcrypt</li>
          </ul>
          <p style={{ fontSize: "25px", textAlign: "center" }}>JavaScript:</p>
          <ul>
            <li>Document Object Model (DOM) Manipulation</li>
            <li>Object-Oriented JavaScript (OOJS)</li>
            <li>Frontend Frameworks/Libraries: React.js</li>
            <li>Backend Frameworks: Node.js</li>
            <li>Asynchronous JavaScript: Async/Await</li>
            <li>Package Management: npm, yarn</li>
            <li>Data Fetching: Fetch API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutcard;
