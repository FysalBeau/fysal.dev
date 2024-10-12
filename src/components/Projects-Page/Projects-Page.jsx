import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./Projects-Page.css";

const ProjectsPage = () => {
  useEffect(() => {
    const menuBtns = document.querySelectorAll(".menu-button");

    const handleClick = function () {
      //----- open only one menu --------------
      const activeAccordion = document.querySelector(".menu-button.open");
      if (activeAccordion && activeAccordion !== this) {
        activeAccordion.nextElementSibling.style.height = 0;
        activeAccordion.classList.remove("open");
      }
      //------------------------------------------------

      this.classList.toggle("open");
      const content = this.nextElementSibling;
      if (this.classList.contains("open")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = 0;
      }
    };

    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", handleClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      menuBtns.forEach((menuBtn) => {
        menuBtn.removeEventListener("click", handleClick);
      });
    };
  }, []); // Empty dependency array to run only once

  return (
    <div className="container">
      <h1>//Projects</h1>

      <div className="accordion-container">
        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              Data Science Capstone
              <img
                src="./assets/icons/data-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/data-cap-graphic.png"
              alt="Project 1"
            />
            <h3>
              Created: Winter 2023{" "}
              <span>
                {" "}
                <img
                  className="project-1-redirect"
                  src="./assets/icons/redirect.svg"
                  alt="Redirct"
                />
              </span>
            </h3>

            <p>
              Research paper diving deep into Debt as a Socioeconomic
              Determinant of Cancer Incidence
            </p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              MkrsUnion
              <img
                src="./assets/icons/mkrsunion-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/mkrsunion-graphic.png"
              alt="Project 2"
            />
            <h3>
              Created: Winter 2022
              <span>
                {" "}
                <img
                  className="project-1-redirect"
                  src="./assets/icons/redirect.svg"
                  alt="Redirct"
                />
              </span>
            </h3>{" "}
            <p>
              Mkrs Union is a makerspace manager web app for the Taylor Family
              Digital Library Makerspace.
            </p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              Alphabody
              <img
                src="./assets/icons/yoga-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/alphabody-graphic.png"
              alt="Project 3"
            />
            <h3>
              Created: Fall 2022{" "}
              <img
                className="project-1-redirect"
                src="./assets/icons/redirect.svg"
                alt="Redirct"
              />
            </h3>{" "}
            <p>
              Web application that uses user pose gestures as password input to
              unlock their phone.
            </p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
            <span className="title">
              VR Therapy
              <img
                src="./assets/icons/vr-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/vrtherapy-graphic.png"
              alt="Project 4"
            />
            <h3>
              Created: Fall 2022{" "}
              <img
                className="project-1-redirect"
                src="./assets/icons/redirect.svg"
                alt="Redirct"
              />
            </h3>{" "}
            <p>
              Virtual reality therapy. User can select a level of their choice
              to receive a therapy session. Online functionality.
            </p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              Sarcasm Detection in Social Media Text
              <img
                src="./assets/icons/sarcasm-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/sarcasm-detection-graphic.png"
              alt="Project 5"
            />
            <h3>
              Created: Winter 2023{" "}
              <img
                className="project-1-redirect"
                src="./assets/icons/redirect.svg"
                alt="Redirct"
              />
            </h3>{" "}
            <p>
              Machine Learning Research Project diving deep into Sarcasm
              Detection in Social Media Texts.
            </p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              Tug-Of-War
              <img
                src="./assets/icons/tug-of-war-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/tug-of-war-graphic.png"
              alt="Project 6"
            />
            <h3>
              Created: Fall 2022{" "}
              <img
                className="project-1-redirect"
                src="./assets/icons/redirect.svg"
                alt="Redirct"
              />
            </h3>{" "}
            <p>Tug Of War style mobile game. Two player functionality.</p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              Paper Crane - Screen Locker
              <img
                src="./assets/icons/paper-crane-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/paper-crane-graphic.png"
              alt="Project 7"
            />
            <h3>
              Created: Fall 2022{" "}
              <img
                className="project-1-redirect"
                src="./assets/icons/redirect.svg"
                alt="Redirct"
              />
            </h3>{" "}
            <p>
              Web application simulating a lock screen where the user makes an
              origami to unlock their phone.
            </p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              Posture Alert
              <img
                src="./assets/icons/posture-alert-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/posture-alert-graphic.png"
              alt="Project 8"
            />
            <h3>
              Created: Fall 2022{" "}
              <img
                className="project-1-redirect"
                src="./assets/icons/redirect.svg"
                alt="Redirct"
              />
            </h3>{" "}
            <p>
              Device that notifies a user if their posture is bad. Made with
              Arduino.
            </p>
          </div>
        </div>

        <div className="accordion">
          <button className="menu-button">
          <span className="title">
              Student Pressure Levels Study 
              <img
                src="./assets/icons/student-pressure-icon.svg"
                alt="icon"
                className="menu-icon"
              />
            </span>
            <span className="icon">
              <img
                src="./assets/icons/cross.svg"
                alt="cross"
                className="cross-icon"
              />
            </span>
          </button>
          <div className="content">
            <img
              className="project1"
              src="./assets/images/student-pressure-graphic.png"
              alt="Project 9"
            />
            <h3>
              Created: Winter 2023{" "}
              <img
                className="project-1-redirect"
                src="./assets/icons/redirect.svg"
                alt="Redirct"
              />
            </h3>{" "}
            <p>
              Exploring the daily routines and pressure levels of STAT423
              Students in Winter 2023: A Survey-Based Study.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
