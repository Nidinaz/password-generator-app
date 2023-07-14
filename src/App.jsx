import "./stylesApp.scss";
import { FaCopy } from "react-icons/fa";
import React, { useState } from "react";
import { generatePassword } from "./utils/Helper";

const App = () => {
  //useState to change password and save the new state
  const [password, setPassword] = useState("");
  const [passwordRange, setPasswordRange] = useState();
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setincludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  // const generateNewPassword = () => {
  //   const pwd =
  //     passwordRange > 3
  //       ? generatePassword(
  //           passwordRange,
  //           includeUppercase,
  //           includeLowercase,
  //           includeNumbers,
  //           includeSymbols
  //         )
  //       : generatePassword(
  //           includeUppercase,
  //           includeLowercase,
  //           includeNumbers,
  //           includeSymbols,
  //           3
  //         );
  //   setPassword(pwd);
  // };

  //   const generateNewPassword = () => {
  //     const pwd = rangeValue > 3 ? generatePassword(passwordProps, rangeValue) : generatePassword(passwordProps, 3);
  //     setPassword(pwd);
  // }

  // const generatePassword = () => {
  // // characters define the items used to
  // const characters =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  // // emty string where the new password is made
  // // charAt function to select a random character from a string
  // // Math.random() produces a random number
  // // and characters.length
  // // Math.floor makes sure that it's a whole number
  //   let newPassword = "";
  //   for (let i = 0; i < 15; i++) {
  //     newPassword += characters.charAt(
  //       Math.floor(Math.random() * characters.length)
  //     );
  //   }
  //   setPassword(newPassword);
  // };

  const handleGeneratePassword = (e) => {

  }
  //   const generateNewPassword = () => {
  //     const pwd = rangeValue > 3 ? generatePassword(passwordProps, rangeValue) : generatePassword(passwordProps, 3);
  //     setPassword(pwd);
  // }

  return (
    <div className="main-container">
      <h3>Password Generator</h3>
      <div className="pwd-container">
        <div className="container-generated-pwd">
          <div className="generated-pwd">{password}</div>
          <div className="icon-copy">
            <FaCopy></FaCopy>
          </div>
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
            value={passwordRange}
            onChange={(e) => setPasswordRange(e.target.value)}
              id="slider"
              type="range"
              min="4"
              max="32"
              defaultValue="10"
              step="1"
            />
            <h6>{passwordRange}</h6>
          </div>

          {/* //Settings */}
          <div className="pwd-settings">
            <div className="pwd-settings-checkbox">
              <div className="pwd-setting-uppercase">
                <input
                  type="checkbox"
                  id="uppercase"
                  className="uppercase"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <label className="lable-name" htmlFor="uppercase">
                  {" "}
                  Include Uppercase Letters
                </label>
              </div>
              <div className="pwd-setting-lowercase">
                <input
                  type="checkbox"
                  id="lowercase"
                  className="lowercase"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
                <label className="lable-name" htmlFor="lowercase">
                  {" "}
                  Include Lowercase Letters
                </label>
              </div>
              <div className="pwd-setting-numbers">
                <input type="checkbox" id="numbers" className="numbers" checked={includeNumbers}
                  onChange={(e) => setincludeNumbers(e.target.checked)} />
                <label className="lable-name" htmlFor="numbers">
                  {" "}
                  Include Numbers
                </label>
              </div>
              <div className="pwd-setting-symbols">
                <input type="checkbox" id="symbols" className="symbols" checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)} />
                <label className="lable-name" htmlFor="symbols">
                  {" "}
                  Include Symbols
                </label>
              </div>
            </div>
          </div>
          {/* //STRENGTH */}
          <div className="pwd-strength">
            <p className="strenght-text">Strength</p>
            <div className="strength-level"></div>
          </div>
          <div className="pwd-button">
            <button onClick={handleGeneratePassword}>Generate</button>
            <span className="icon-btn"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
