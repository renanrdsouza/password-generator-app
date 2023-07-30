import { useState } from "react";

import iconCopy from "../assets/images/icon-copy.svg";
import arrow from "../assets/images/icon-arrow-right.svg";
import Strength from "./Strength";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(14);
  const [checkedValues, setCheckedValues] = useState([]);

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
  }

  return (
    <div className="w-mobile flex flex-col items-center font-JetBrains">
      <h1 className="text-custom-gray bg-custom-black text-base w-fit mb-4">
        Password Generator
      </h1>
      <div className="flex justify-between items-center px-5 py-4 bg-custom-dark-gray min-w-full">
        <p className="flex items-center text-custom-light-gray text-xl font-medium h-8">
          {password}
        </p>
        <img src={iconCopy} alt="copy icon" className="max-w-fit" />
      </div>
      <form
        className="flex min-w-full flex-col items-center bg-custom-dark-gray mt-4" onSubmit={
          (e) => generatePassword(e, checkedValues, passwordLength)
        }
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-y-2 mt-4">
          <h2 className="text-custom-light-gray">Character Length</h2>
          <p className="grid-row-end place-self-end text-custom-light-green">
            {passwordLength}
          </p>
          <input
            type="range"
            step={1}
            min={8}
            max={20}
            className="col-start-1 col-end-3 accent-custom-light-green dark:bg-gray-700"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-custom-light-gray w-mobile-checkbox-inputs my-8 gap-y-4">
          <label htmlFor="uppercase">
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Uppercase Letters
          </label>
          <label htmlFor="lowercase">
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Lowercase Letters
          </label>
          <label htmlFor="numbers">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Numbers
          </label>
          <label htmlFor="symbols">
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              className="me-5 appearance-none h-5 w-5 border-2 checked:bg-custom-light-green checked:border-0 checked:content-check-icon checked:after:block p-0.5"
              onChange={handleChecked}
            />
            Include Symbols
          </label>
        </div>
        <Strength password={password} />
        <button className="flex justify-center gap-x-4 items-center py-4 w-mobile-button mb-4 bg-custom-light-green text-base font-medium cursor-pointer">
          GENERATE <img src={arrow} alt="arrow right" />
        </button>
      </form>
    </div>
  );
};

export default PasswordGenerator;
