import React from "react";
import MMORPG from "../assets/MMRPG.png";
import Peak from "../assets/Peak.png";
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
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
      </div>
    </div>
  );
};

export default WorkCard;
