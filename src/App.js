import "./App.css";
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
    <div>
      <button onClick={generatePassword}>Generate Password</button>
      <p>{password}</p>
    </div>
  );
};

export default App;
