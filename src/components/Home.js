import React from "react";
import "../App.css";
import "../styles/home-styles.css";
import "../styles/global-styles.css";
import circle from "./images/circle.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";

class Home extends React.Component {
  render() {
    return (
      <div className="gray-section">
        <div className="gray-box">
          <div className="circle">
            <img src={circle} alt="circle" />
          </div>
          <div className="home-content">
            <div className="name">
              <h1>Monika Ibana</h1>
              <h3>Software QA Engineer</h3>
            </div>
            <div className="profile">
              <img
                src="https://monikaibana-site.s3.amazonaws.com/person-1.png"
                alt="profile"
              />
            </div>
          </div>
          <div className="links">
            <div className="github">
              <a
                href="https://github.com/monikaibana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/monikaibana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  href="https://www.linkedin.com/in/monikaibana"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
