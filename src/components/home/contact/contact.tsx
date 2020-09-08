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
        <div>
          <h4 style={{ fontWeight: "bolder" }}>Call Us</h4>
          <h4 style={{ fontWeight: "bold" }}>+36 70 617 8235</h4>
        </div>
        <div>
          <h4 style={{ fontWeight: "bolder" }}>Address</h4>
          <h4 style={{ fontWeight: "bold" }}>
            Ispotály utca 22, B/B, 2/6 <br /> Debrecen 4025, Hungary
          </h4>
        </div>
        <div className="contactIcons">
          <a href="https://www.instagram.com/thelighthouseprod/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCw_qytcogWgbeSgt2qfpzEQ/featured?view_as=subscriber">
            <i className="fa fa-youtube" />
          </a>
          <a href="https://www.facebook.com/thelighthouseprod">
            <i className="fa fa-facebook" />
          </a>
          <a href="https://wa.me/+36706178235">
            <i className="fa fa-whatsapp" />
          </a>
          <a href="https://www.linkedin.com/company/thelighthouseprod">
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};
