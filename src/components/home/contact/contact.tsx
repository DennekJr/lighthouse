import React from "react";
import "./contact.styles.css";

export const Contact = () => {
  return (
    <div className="contactContainer">
      <div>
        <h3>LIGHT HOUSE</h3>
      </div>
      <div className="contactDetails">
        <h4>What's your dream? Let's make it a reality.</h4>
        <h1>Contact</h1>
        <div className="contactIcons">
          <i className="fa fa-instagram" />
          <i className="fa fa-youtube" />
          <i className="fa fa-facebook" />
          <i className="fa fa-pinterest" />
          <i className="fa fa-linkedin" />
        </div>
        <h5>
          Based out of San Francisco, California Available for travel worldwide
        </h5>
      </div>
    </div>
  );
};
