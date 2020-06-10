import React from "react";
import "../App.css";
import "../styles/about-styles.css";
import graphic from "./images/graphic-enlarged.png";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <hr className="divider" />
        <h2>About Me</h2>
        <div className="about-content">
          <img src={graphic} alt="graphic" />
          <div className="text">
            <p>Welcome!</p>
            <p>
              I'm Monika. I am a <span class="under">software tester</span> with
              a strong passion for software quality and user experience.
            </p>
            <p>I also love music, food, and as of lately, web UI/UX design.</p>
            <p>Check out my work below!</p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
