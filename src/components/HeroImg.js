import "./HeroImgStyles.css";
import React from "react";
import officeimage from "../assets/office2.jpeg";
import { Link } from "react-router-dom";
import reactphoto from "../assets/react.svg.png";
import pythonphoto from "../assets/python.svg.png";
import sqlphoto from "../assets/sql.png";
import javascriptphoto from "../assets/javascript.png";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={officeimage} alt="officeimage" />
      </div>
      <div className="content">
        <p style={{ fontSize: "40px" }}>ED BERISHA</p>
        <h1 style={{ marginTop: "0px" }}>FULL STACK ENGINEER</h1>
        <div style={{ marginTop: "12px" }}>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a
            href="../../PersonalSite/resume.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
          >
            My Resume
          </a>
        </div>
        <div className="photos-container">
          <img src={reactphoto} alt="React" className="project-photo" />
          <img src={pythonphoto} alt="Python" className="project-photo" />
          <img
            src={javascriptphoto}
            alt="javascript"
            className="project-photo"
          />
          <img src={sqlphoto} alt="Sql" className="project-photo" />
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
