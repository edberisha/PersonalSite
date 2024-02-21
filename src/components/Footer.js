import React from "react";
import { FaHome, FaMailBulk, FaLinkedin } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
            />
            <p style={{ display: "inline", color: "#fff" }}>New York, NY</p>
          </div>

          <div className="email">
            <FaMailBulk
              size={20}
              style={{
                color: "#fff",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
            />
            <p style={{ display: "inline", color: "#fff" }}>
              edberisha95@gmail.com
            </p>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <FaLinkedin
              size={30}
              style={{
                color: "#fff",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
            />
            <p style={{ display: "inline", color: "#fff" }}>
              <a
                href="https://www.linkedin.com/in/ed-berisha"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff" }}
              >
                linkedin.com/in/ed-berisha
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
