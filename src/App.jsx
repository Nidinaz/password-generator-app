import "./stylesApp.scss";
import { FaCopy } from "react-icons/fa";
import React, { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./utils/Helper";

const App = () => {

  const [password, setPassword] = useState("");
  const [passwordRange, setPasswordRange] = useState();
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setincludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    let characterList = "";

    if(includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if(includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if(includeSymbols) {
      characterList = characterList + specialCharacters;
    }
    if(includeNumbers) {
      characterList = characterList + numbers;
    }

    setPassword(createPassword(characterList))
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length

    for(let i = 0; i < passwordRange; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
  }
  return password
}


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
                <input
                  type="checkbox"
                  id="numbers"
                  className="numbers"
                  checked={includeNumbers}
                  onChange={(e) => setincludeNumbers(e.target.checked)}
                />
                <label className="lable-name" htmlFor="numbers">
                  {" "}
                  Include Numbers
                </label>
              </div>
              <div className="pwd-setting-symbols">
                <input
                  type="checkbox"
                  id="symbols"
                  className="symbols"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
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
