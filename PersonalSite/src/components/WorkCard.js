import React from "react";
import MMORPG from "../assets/MMRPG.png";
import Peak from "../assets/Peak.png";
import Potluck from "../assets/potluck.png";
import Texas from "../assets/texas.png";
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
import pp from "../assets/pp.png"

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
      <div className="project-card">
          <img src={pp} alt="peakphoto" />
          <h2 className="project-title" style={{ color: "white" }}>
            Peanut Pals
          </h2>
          <div className="pro-content">
            <div className="pro-details">
              <p>
                Peanut Pals. A mock service website offering mult-tier subscription options to premium services. Send us a message. Subscribe today. 
              </p>
            </div>
            <div className="pro-btns">
              <NavLink
                to="https://edberisha.github.io/PeanutPals/"
                className="btn"
              >
                Go To Project
              </NavLink>
            </div>
          </div>
        </div>
       
        <div className="project-card">
          <img src={Peak} alt="peakphoto" />
          <h2 className="project-title" style={{ color: "white" }}>
            Peak Artificial Intelligence
          </h2>
          <div className="pro-content">
            <div className="pro-details">
              <p>
                Single owner of Peak’s website development, producing the
                following website from scratch
              </p>
            </div>
            <div className="pro-btns">
              <NavLink
                to="https://peak-sleek-uyitp8ljz-peak-sentry.vercel.app/"
                className="btn"
              >
                Go To Project
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Potluck} alt="potluck photo" />
          <h2 className="project-title" style={{ color: "white" }}>
            PotLuck Planner
          </h2>
          <div className="pro-content">
            <div className="pro-details">
              <p>
                PotLuck Planner. Users can schedule upcoming events and assign
                food, drinks, and other item to guests.
              </p>
            </div>
            <div className="pro-btns">
              <NavLink
                to="https://github.com/jgrimes86/Potluck-Planner"
                className="btn"
              >
                Go To Project
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Texas} alt="Texas Hold 'Em Photo" />
          <h2 className="project-title" style={{ color: "white" }}>
            Texas Hold 'Em'
          </h2>
          <div className="pro-content">
            <div className="pro-details">
              <p>Classic Texas Hold 'Em.'</p>
            </div>
            <div className="pro-btns">
              <NavLink
                to="https://edberisha.github.io/TexasHoldEm/"
                className="btn"
              >
                Go To Project
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={MMORPG} alt="mmrpgphoto" />
          <h2 className="project-title" style={{ color: "white" }}>
            Math Mind RPG
          </h2>
          <div className="pro-content">
            <div className="pro-details">
              <p>
                Math Mind RPG - Where math meets adventure! Test your
                multiplication skills in this exciting role-playing game.
              </p>
            </div>
            <div className="pro-btns">
              <NavLink
                to="https://github.com/edberisha/MathMindRPG"
                className="btn"
              >
                Go To Project
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
