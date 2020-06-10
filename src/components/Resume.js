import React from "react";
import "../App.css";
import "../styles/resume-styles.css";
import "../styles/about-styles.css";
import resume from "./images/resume.png";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <hr className="divider" />
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="text">
            <p>Download the PDF to see the full version!</p>
            <a href="www.google.ca">Download PDF</a>
          </div>
          <img src={resume} alt="resume" />
        </div>
      </div>
    );
  }
}
export default Resume;
