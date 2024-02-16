import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/ContactStyles.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-info">
          <h1>Ed Berisha</h1>
          <h1>EdBerisha95@gmail.com</h1>
          <h1>
            <a
              href="https://linkedin.com/in/ed-berisha"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn 
            </a>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
