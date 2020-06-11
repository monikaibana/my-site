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
            <p>Download the PDF to view the full version!</p>
            <a
              className="download-button"
              href="https://monikaibana-site.s3.amazonaws.com/resume2020_v3.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>
          </div>
          <a
            href="https://monikaibana-site.s3.amazonaws.com/resume2020_v3.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={resume} alt="resume" />
          </a>
        </div>
      </div>
    );
  }
}
export default Resume;
