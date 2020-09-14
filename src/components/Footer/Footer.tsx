import React from "react";
import { Button } from "react-mdl";
import { Contact } from "../home/contact/contact";
import { Form } from "../home/form/form";

export const Footer = () => {
  return (
    <div>
      <section
        style={{...styles.contact}}
        className="contactForm"
        id="contact"
      >
        <Contact />
        <Form />
      </section>
      <section style={{ ...styles.footer }}>
        <Button href="#" style={{ ...styles.button }}>
          Let's Connect
        </Button>
        <div>Copyright © Lighthouse Productions</div>
        <h6>© 2020 by DennekJr</h6>
      </section>
    </div>
  );
};

const styles: any = {
  contact:{
    padding: "50px 30px 150px 30px",
    backgroundColor: "antiquewhite",
    color: "#151515",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#5BABAB",
    color: "white",
  },
  footer: {
    backgroundColor: "#161616",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    left: 0,
    right: 0,
    padding: "20px",
  },
};
