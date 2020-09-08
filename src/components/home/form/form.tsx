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
          <label>What type of project are you looking for?</label>
          <select className="formDropdown" style={{ width: "100%" }}>
            <option value="Select an Option...">Select an Option...</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </span>
        <span>
          <label>Budget</label>
          <input
            placeholder="Number..."
            type="number"
            style={{ width: "100%" }}
            className="formEmail"
          />
        </span>
        <span>
          <label>How did you hear about us?</label>
          <select className="formDropdown" style={{ width: "100%" }}>
            <option value="Select an Option...">Select an Option...</option>
            <option value="volvo">Personal Website</option>
            <option value="saab">Facebook</option>
            <option value="fiat">Instagram</option>
            <option value="audi">Youtube</option>
            <option value="audi">Twitter</option>
            <option value="audi">Google</option>
            <option value="audi">Personal Connection</option>
          </select>
        </span>
        <span>
          <label>Tell me more about this project</label>
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
