import { useState } from "react"

const Strength = (props) => {
  const password = props.password;
  let upperCase = false;
  let lowerCase = false;
  let number = false;
  let symbol = false;
  const [passwordStregnth, setPasswordStrength] = useState("")

  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      number = true;
    } else if (password[i] == password[i].toLowerCase()) {
      lowerCase = true;
    } else if (password[i] == password[i].toUpperCase()) {
      upperCase = true;
    } else {
      symbol = true;
    }
  }
  

  return (
    <div className="grid grid-cols-strength place-content-center items-center w-mobile-button bg-custom-black p-4">
        <p className="text-custom-gray w-fit">STRENGTH</p>
        <div className="flex gap-x-2 justify-end items-center">
          <p className="text-custom-light-gray text-xl">TOO WEAK!</p>
          <div className="w-stregth-indicator h-7 border-2"></div>
          <div className="w-stregth-indicator h-7 border-2"></div>
          <div className="w-stregth-indicator h-7 border-2"></div>
          <div className="w-stregth-indicator h-7 border-2"></div>
        </div>
    </div>
  )
}

export default Strength