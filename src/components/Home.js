import React from "react";
import "../App.css";
import "../styles/home-styles.css";
import circle from "./images/circle.png";
import profile from "./images/person-1.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-section">
          <div className="circle">
            <img src={circle} alt="circle" />
          </div>
          <div className="home-content">
            <div className="name">
              <h1>Monika Ibana</h1>
              <h3>Software QA Engineer</h3>
            </div>
            <div className="profile">
              <img src={profile} alt="profile" />
            </div>
          </div>
          <div className="links">
            <div className="github">
              <img src={github} alt="github" />
            </div>
            <div className="linkedin">
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
