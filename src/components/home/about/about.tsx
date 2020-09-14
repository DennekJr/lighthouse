import React from "react";
import "./about.styles.css";
import {SectionTitle} from "../../SectionTitle/SectionTitle";

export const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutHeading">
        <SectionTitle title={'About'}/>
      </div>
      <div className="aboutLighthouse">
        <span>
          Lighthouse Productions is a small team of videographers and editors
          with more than 3 years of experience in creating food videos, product
          videos and commercials. Our studio is based in Debrecen, Hungary.
        </span>
      </div>
      <div className="qualities">
        <h5>
          Talented chefs, appetising food.<br></br> Demonstration videos,
          commercials for indoor and outdoor products.
        </h5>
      </div>
      <div className="aboutLighthouse">
        <span>
          We work together with professional chefs, delivering a large scale of
          food videos for you, main or side dishes, desserts, fish, vegan &
          vegetarian recipes, salads, soups, ice creams, cakes, smoothies and
          cocktails. We created several food videos for YouTubers, nutritionist,
          mobile app owners and Amazon sellers.
        </span>
      </div>
      <div className="aboutLighthouse">
        <span>
          We can bring life to your product in or outside of our studio,
          highlighting the most important characteristics of your product in a
          pleasing video. If you don’t know what would make the most impact in
          selling your product, we can help you on that too.
        </span>
      </div>
    </div>
  );
};
