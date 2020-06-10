import React from "react";
import "../styles/contact-styles.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <hr className="divider" />
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="text">
            <p>
              If you would like to chat, please email me at
              ibanamonika@gmail.com or connect with me on LinkedIn.
            </p>
            <p>Thanks for visiting!</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
