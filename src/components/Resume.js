import React from "react";
import "../App.css";
import "../styles/resume-styles.css";
import "../styles/global-styles.css";
import resume from "./images/resume.png";

class Resume extends React.Component {
  render() {
    return (
      <div className="white-section">
        <hr className="divider" />
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="resume-text">
            <p>Download the PDF to see the full version!</p>
            <a className="download-button" href="www.google.ca">
              Download PDF
            </a>
          </div>
          <a href="www.google.ca">
            <img src={resume} alt="resume" />
          </a>
        </div>
      </div>
    );
  }
}
export default Resume;
