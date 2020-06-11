import React from "react";
import "../App.css";
import "../styles/global-styles.css";
import "../styles/work-styles.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="gray-section" style={{ paddingTop: "10vh" }}>
        <div
          className="gray-box"
          style={{ minHeight: "825px", paddingTop: "30px" }}
        >
          <hr className="divider" style={{ marginLeft: "5.5vw" }} />
          <h2 className="gray-header">Projects</h2>
          <div className="gray-content">
            <div className="white-card">
              <div className="coop-one">
                <img
                  className="coop-image"
                  src="https://www.hit-play.com/wp-content/uploads/2019/09/Website-Loyalty-One-Atrium-hitplay.jpg"
                  alt="hitplay"
                ></img>
                <div className="blurb" style={{ paddingBottom: "5px" }}>
                  As a member of the software product team at Hitplay, I was the
                  sole QA analyst on the pivot project. I established SQA
                  metholodigies, created a software test stategy, and built a
                  functional automated web UI test suite using JavaScript.{" "}
                </div>
                <img
                  className="company-logo"
                  src="https://hit-play.com/wp-content/uploads/2019/09/hitplayLogo-Black.png"
                  alt="hitplay logo"
                  style={{ height: "25px" }}
                ></img>
              </div>
            </div>
            <div className="white-card">
              <div className="coop-two">
                <img
                  className="coop-image"
                  src="https://images.ctfassets.net/a3qyhfznts9y/3oqOvifWLAtjIKiqwg9y1v/149d4c3d04bd4a0774334af9b89c1fb3/haven-overview-ca_3x.jpg?w=1960&h=1960&q=80&fm=webp"
                  alt="ecobee"
                ></img>
                <div className="blurb">
                  At ecobee, I worked on the smart light switch, the Switch+. I
                  developed automated tests for the light switch firmware, as
                  well as researched and provided a proof of concept for an
                  automation test fixture for end to end testing of motion
                  sensors.
                </div>
                <img
                  className="company-logo"
                  src="https://www.ecobee.com/wp-content/themes/ecobee/dist/images/ecobee_logo_colour.jpg"
                  alt="ecobee logo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
