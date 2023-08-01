import { useState } from "react";

import Strength from "./Strength";

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
  }

  const handleClipboard = () => {
    navigator.clipboard.writeText(password)
    clicked ? setClicked(false) : setClicked(true)
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
        <svg xmlns="http://www.w3.org/2000/svg" className={clicked ? "w-6 h-6 fill-current text-white" : "w-6 h-6 fill-current text-custom-light-green"} onClick={handleClipboard}><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281h4.97v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"/></svg>
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
        <button className="flex border-box border-transparent border-2 justify-center gap-x-4 items-center py-3 w-mobile-button mb-4 bg-custom-light-green text-base font-medium cursor-pointer hover:bg-black hover:text-custom-light-green hover:border-2 hover:border-custom-light-green ">
          GENERATE <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="fill-current hover:text-custom-light-green"><path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
        </button>
      </form>
    </div>
  );
};

export default PasswordGenerator;
