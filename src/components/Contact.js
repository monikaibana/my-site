import React from "react";
import "../styles/contact-styles.css";
import "../styles/global-styles.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="white-section">
        <hr className="divider" />
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              If you would like to chat, please email me at&nbsp;
              <a className="email" href="mailto:ibanamonika@gmail.com">
                <span className="under">ibanamonika@gmail.com</span>
              </a>
              &nbsp;or connect with me on&nbsp;
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/monikaibana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="under">LinkedIn.</span>
              </a>
            </p>
            <p>Thanks for visiting!</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
