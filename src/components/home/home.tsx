import React from "react";
import { Button, Grid } from "react-mdl";
import "./home.css";
import { ProductTypes } from "./productTypes/productTypes";
import { Form } from "./form/form";
import { Contact } from "./contact/contact";
import {About} from "./about/about";
import {Client} from "./clients/clients";

export const Home = () => {
  return (
    <div className="container">
      <section className="headerVideoSection">
        <div className="borderLeft">
          <h5>Cooking Videos . Product Videos . Cinematography</h5>
          <h2>Lighthouse Productions</h2>
          <h3>Creating films that inspires millions</h3>
          <h4>So what's your dream? Let's make it a reality</h4>
          <Button
            raised
            accent
            ripple
            className="bannerButton"
            style={{ backgroundColor: "rgba(91, 171, 171, 1)" }}
          >
            WATCH HIGHLIGHT REEL
          </Button>
        </div>
      </section>
      <section style={{ padding: "30px" }}>
        <ProductTypes
          eventType="Products"
          video1="https://www.youtube.com/embed/GTwpmwoyOkU?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"
          video2="https://www.youtube.com/embed/xYypShy_orQ?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"
          video3=""
          video4=""
        />
        <ProductTypes
          eventType="Commercial"
          video1="https://www.youtube.com/embed/Tdye17_FAVQ?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"
          video2="https://www.youtube.com/embed/81o2HiWf9iY?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"
          video3="https://www.youtube.com/embed/BQ2dUv71gyQ?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"
          video4="https://www.youtube.com/embed/lxZ7pRUqtvY?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"
        />
      </section>
      <section style={{ padding: "60px 30px", display: 'flex', alignItems: 'center', flexDirection: 'column'}} id="about">
        <About />
        <Client />
      </section>
      <section
        style={{ padding: " 50px 30px", display: "flex", justifyContent: "center"}}
        className="contactForm"
        id="contact"
      >
        <Contact />
        <Form />
      </section>
      <section>
        <div className="footer">
          <Button
              href="#"
              style={{
                backgroundColor: "#5BABAB",
                color: "white",
              }}
          >
            Let's Connect
          </Button>
          <h6>© 2020 by DennekJr</h6>
        </div>
      </section>
    </div>
  );
};
