import "./stylesApp.scss";
import { FaCopy } from "react-icons/fa";
import React, { useState } from "react";

const App = () => {
  //useState to change password and save the new state
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    //characters define the items used to
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    //emty string where the new password is made
    //charAt function to select a random character from a string
    //Math.random() produces a random number
    //and characters.length
    //Math.floor makes sure that it's a whole number
    let newPassword = "";
    for (let i = 0; i < 14; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(newPassword);
  };

  return (
    <div className="main-container">
      <div className="pwd-container">
        <p className="pwd-container-generated">{password}</p>
        <span className="copy-icon">
          <FaCopy />
        </span>
      </div>

      <div className="pwd-parameters">
        <div className="pwd-parameters-visable"></div>
        <div className="pwd-parameters-handle"></div>
        <div className="pwd-parameters-input">
          <div className="pwd-parameters-input-checkmark"></div>
          <p className="pwd-parameters-input-text"></p>
        </div>
        <div className="pwd-strength">
          <p className="strenght-text"></p>
          <div className="strength-level"></div>
          <div>
            <button onClick={generatePassword}>Generate</button>
            <span className="icon-btn"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
