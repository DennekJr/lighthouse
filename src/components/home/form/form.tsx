import React from "react";
import { Textfield } from "react-mdl";
import "./form.styles.css";

export const Form = () => {
  return (
    <div className="formContainer">
      <form>
        <span>
          <label>Full Name</label>
          <input
            placeholder="First Name..."
            type="fname"
            style={{ width: "100%" }}
            className="formEmail"
          />
        </span>
        <span>
          <label>Email</label>
          <input
            placeholder="Email..."
            type="email"
            style={{ width: "100%" }}
            className="formEmail"
          />
        </span>
        <span>
          <label>Tell me more about your project</label>
          <Textfield
            onChange={() => {}}
            label="Extra details..."
            rows={6}
            style={{ width: "100%" }}
          />
        </span>
        <span style={{flexDirection: 'row', justifyContent: 'space-between'}} className="submitButton">
          <p className="formCopyright">
            This form is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
          <input type="submit" value="SEND" className="formSubmitButton"/>
        </span>
      </form>
    </div>
  );
};
