import "./stylesApp.scss";
import React, { useCallback, useEffect, useState } from 'react';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./utils/Helper";

const App = () => {
  //all states
  const [password, setPassword] = useState("");
  const [passwordRange, setPasswordRange] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setincludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [strenght, setStrength] = useState('');
  const [copy, setCopy] = useState(false);
  const [color, setColor] = useState("#FF0000")


//which characters will be included in the generated password?
//password handeling with helper.js
//characterList is an empty string and changes evertytime the password changes
//characterList will be created when functin createPassword and setPassword

  const handleGeneratePassword = (e) => {
    let characterList = "";

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }
    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    setPassword(createPassword(characterList));
  };

  //the Math behind the randomness of the characters in the password
  //characterList is given as property because ...?
  
  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordRange; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    console.log(password);
    return password;
  };

  return (
    <div className="main-container">
      <h3>Password Generator</h3>
      <div className="password-container">
        <div className="generated-password-container">
          <div className="generated-password-field" > 
          <input value={password} onChange={createPassword} />
          </div>
        </div>

        {/* //SlIDER */}
        <div className="password-parameters">
          <div className="password-parameters-visable">
            <p>Charackter Lenght</p>
            <div className="password-parameters-length-number"></div>
          </div>
          <div
            className="password-parameters-length-slider"
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
              defaultValue="8"
              step="1"
            />
            <h6>{passwordRange}</h6>
          </div>

          {/* //Settings */}
          <div className="password-settings">
            <div className="password-settings-checkbox">
              <div className="password-setting-uppercase">
                <input
                  type="checkbox"
                  id="uppercase"
                  className="uppercase"
                  checked={includeUppercase}
                  value={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <label className="lable-name" htmlFor="uppercase">
                  {" "}
                  Include Uppercase Letters
                </label>
              </div>
              <div className="password-setting-lowercase">
                <input
                  type="checkbox"
                  id="lowercase"
                  className="lowercase"
                  checked={includeLowercase}
                  value={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
                <label className="lable-name" htmlFor="lowercase">
                  {" "}
                  Include Lowercase Letters
                </label>
              </div>
              <div className="password-setting-numbers">
                <input
                  type="checkbox"
                  id="numbers"
                  className="numbers"
                  checked={includeNumbers}
                  value={includeNumbers}
                  onChange={(e) => setincludeNumbers(e.target.checked)}
                />
                <label className="lable-name" htmlFor="numbers">
                  {" "}
                  Include Numbers
                </label>
              </div>
              <div className="password-setting-symbols">
                <input
                  type="checkbox"
                  id="symbols"
                  className="symbols"
                  checked={includeSymbols}
                  value={includeSymbols}
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
          <div className="password-strength">
            <p className="strenght-text">Strength</p>
            <div className="strength-level"></div>
          </div>
          <div className="password-button">
            <button onClick={handleGeneratePassword}>Generate</button>
            <span className="icon-btn"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
