import { useState } from "react";

import Strength from "./Strength";
import Button from "./Button";
import Password from "./Password";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(14);
  const [checkedValues, setCheckedValues] = useState([]);
  const [clicked, setClicked] = useState(false)

  const allowedUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'W', 'U', 'V', 'X', 'Y', 'Z'];
  const allowedLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'w', 'u', 'v', 'x', 'y', 'z'];
  const allowedSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', ',', ';'];
  const allowedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  /* 8- weak 10-medium 16(+)-strong */

  const handleChecked = (e) => {
    const { id, checked } = e.target;
    
    if (checked) {
      setCheckedValues(actual => [...actual, id]);
    } else {
      setCheckedValues(actual => {
        return [...actual.filter(checkbox => checkbox !== id)];
      })
    }
  }

  const generatePassword = (e, checkedValues, passwordLength) => {
    e.preventDefault();
    let allowedCharacters = [];

    if (checkedValues.length === 0) {
      allowedCharacters.push(...allowedUpperCaseLetters, ...allowedLowerCaseLetters, ...allowedNumbers)
    }

    checkedValues.forEach(checkbox => {
      switch (checkbox) {
        case "uppercase":
          allowedCharacters.push(
            ...allowedUpperCaseLetters
          )
          break;
        case "lowercase":
          allowedCharacters.push(
            ...allowedLowerCaseLetters
          )
          break;
        case "numbers":
          allowedCharacters.push(
            ...allowedNumbers
          )
          break;
        case "symbols":
          allowedCharacters.push(
            ...allowedSymbols
          )
          break;
      }
    });

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += allowedCharacters[Math.round(Math.random() * (allowedCharacters.length - 1))]
    }

    setPassword(generatedPassword)
    setClicked(false)
  }

  const handleClipboard = () => {
    navigator.clipboard.writeText(password)
    clicked ? setClicked(false) : setClicked(true)
  }

  return (
    <div className="w-mobile md:w-desktop flex flex-col items-center font-JetBrains">
      <h1 className="text-custom-gray bg-custom-black text-base w-fit mb-4" translate="no">
        Password Generator
      </h1>
      <Password
        password={password}
        clicked={clicked}
        handleClipboard={handleClipboard}
      />
      <form
        className="flex min-w-full flex-col items-center bg-custom-dark-gray mt-4"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-y-2 mt-4 md:w-desktop md:px-5">
          <h2 className="text-custom-light-gray" translate="no">Character Length</h2>
          <p className="grid-row-end place-self-end text-custom-light-green">
            {passwordLength}
          </p>
          <input
            type="range"
            step={1}
            min={8}
            max={20}
            className="col-start-1 col-end-3 accent-custom-light-green dark:bg-gray-700 cursor-pointer"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-custom-light-gray w-mobile-checkbox-inputs my-6 gap-y-4 md:w-desktop md:px-5">
          <label htmlFor="uppercase" translate="no">
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5 cursor-pointer"
              onChange={handleChecked}
            />
            Include Uppercase Letters
          </label>
          <label htmlFor="lowercase" translate="no">
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5 cursor-pointer"
              onChange={handleChecked}
            />
            Include Lowercase Letters
          </label>
          <label htmlFor="numbers" translate="no">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5 cursor-pointer"
              onChange={handleChecked}
            />
            Include Numbers
          </label>
          <label htmlFor="symbols" translate="no">
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5 cursor-pointer"
              onChange={handleChecked}
            />
            Include Symbols
          </label>
        </div>
      </form>
      <div className="flex flex-col items-center min-w-full gap-y-4 bg-custom-dark-gray">
        <Strength password={password} />
        <Button
          generatePassword={generatePassword}
          checkedValues={checkedValues}
          passwordLength={passwordLength}
        />
      </div>
    </div>
  );
};

export default PasswordGenerator;
