import { useEffect, useState } from "react"

const Strength = (props) => {
  const [passwordStrength, setPasswordStrength] = useState("")
  const password = props.password;

  useEffect(() => {
    if (password !== "") {
      handlePasswordStrength()
    }
  }, [password])

  const handlePasswordStrength = () => {
    let power;
    let character = {
      upperCase: false,
      lowerCase: false,
      number: false,
      symbol: false
    }

    for (let i = 0; i < password.length; i++) {
      if (/[A-Z]/.test(password[i])) {
        character.upperCase = true
      } else if (/[a-z]/.test(password[i])) {
        character.lowerCase = true
      } else if (/\W/.test(password[i])) {
        character.symbol = true
      } else {
        character.number = true
      }
    }

    let differentTypesOfCharacters = Object.values(character).filter(value => value === true).length

    if (password.length > 8 && differentTypesOfCharacters === 4) {
      power = "STRONG"
    } else if (password.length > 8 && differentTypesOfCharacters > 2) {
      power = "MEDIUM"
    } else if (password.length > 8 && differentTypesOfCharacters === 2) {
      power = "WEAK"
    } else {
      power = "TOO WEAK!"
    }

    setPasswordStrength(power)
  }
  
  return (
    <div className="grid grid-cols-strength place-content-center items-center w-mobile-button bg-custom-black p-4">
        <p className="text-custom-gray w-fit">STRENGTH</p>
        <div className="flex gap-x-2 justify-end items-center">
        <p className="text-custom-light-gray text-xl">{passwordStrength}</p>
          <div className="w-stregth-indicator h-7 border-2"></div>
          <div className="w-stregth-indicator h-7 border-2"></div>
          <div className="w-stregth-indicator h-7 border-2"></div>
          <div className="w-stregth-indicator h-7 border-2"></div>
        </div>
    </div>
  )
}

export default Strength