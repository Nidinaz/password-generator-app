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
    for (let i = 0; i < 20; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(newPassword);
  };

  return (
    <div className="main-container">
      <h3>Password Generator</h3>
      <div className="pwd-container">
        <div className="container-generated-pwd">
          <input type="text" placeholder="min 4 char" readOnly />
        </div>
        <div className="icon-copy">
          <FaCopy></FaCopy>
        </div>

        {/* //SlIDER */}
        <div className="pwd-parameters">
          <div className="pwd-parameters-visable">
            <p>Charackter Lenght</p>
            <div className="pwd-parameters-length-number"></div>
          </div>
          <div
            className="pwd-parameters-length-slider"
            data-min={4}
            data-max={32}
          >
            <input
              id="slider"
              type="range"
              min="4"
              max="32"
              defaultValue="16"
              step="1"
            />
          </div>

          {/* //Settings */}
          <div className="pwd-settings">
            <div className="pwd-settings-checkbox">
              <div className="pwd-setting-uppercase">
                <input type="checkbox" id="uppercase" />
                <label htmlFor="uppercase"> Include Uppercase Letters</label>
              </div>
              <div className="pwd-setting-lowercase">
                <input type="checkbox" id="lowercase" />
                <label htmlFor="lowercase"> Include Lowercase Letters</label>
              </div>
              <div className="pwd-setting-numbers">
                <input type="checkbox" id="numbers" />
                <label htmlFor="numbers"> Include Numbers</label>
              </div>
              <div className="pwd-setting-symbols">
                <input type="checkbox" id="symbols" />
                <label htmlFor="symbols"> Include Symbols</label>
              </div>
            </div>
          </div>
          {/* //STRENGTH */}
          <div className="pwd-strength">
            <p className="strenght-text"></p>
            <div className="strength-level"></div>
            <div className="pwd-button">
              <button onClick={generatePassword}>Generate</button>
              <span className="icon-btn"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
