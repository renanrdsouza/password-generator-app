//Hooks
import { useState } from "react";

//Components
import Strength from "./Strength";
import Button from "./Button";
import Password from "./Password";
import Form from "./Form";

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
      <Form
        passwordLength={passwordLength}
        handleChecked={handleChecked}
        setPasswordLength={setPasswordLength}
      />
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
