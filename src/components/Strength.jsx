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
    let character = {
      upperCase: false,
      lowerCase: false,
      number: false,
      symbol: false
    }
  
    for (let i = 0; i < password.length; i++) {
      switch (true) {
        case /[A-Z]/.test(password[i]):
          character.upperCase = true;
          break;
        case /[a-z]/.test(password[i]):
          character.lowerCase = true;
          break;
        case /\W/.test(password[i]):
          character.symbol = true;
          break;
        default:
          character.number = true;
      }
    }
  
    const differentTypesOfCharacters = Object.values(character).filter(Boolean).length;
    const passwordStrengths = {
      4: "STRONG",
      3: "MEDIUM",
      2: "WEAK",
      1: "TOO WEAK!"
    };
  
    const power = password.length > 8 ? passwordStrengths[differentTypesOfCharacters] : "TOO WEAK!";
    setPasswordStrength(power);
  }

  const passwordStrengthMeter = (passwordStrength) => {
    const colors = {
      "TOO WEAK!": ["bg-custom-red"],
      "WEAK": ["bg-custom-orange", "bg-custom-orange"],
      "MEDIUM": ["bg-custom-yellow", "bg-custom-yellow", "bg-custom-yellow"],
      "STRONG": ["bg-custom-light-green", "bg-custom-light-green", "bg-custom-light-green", "bg-custom-light-green"],
    };
  
    const color = colors[passwordStrength] || [];
    const divs = Array(4).fill().map((_, i) => (
      <div key={i} className={`w-stregth-indicator h-7 ${color[i] || 'border-2'}`}></div>
    ));
  
    return <>{divs}</>;
  }
  
  return (
    <div className="grid grid-cols-strength place-content-center items-center w-mobile-button bg-custom-black p-4 md:w-desktop-button md:justify-between">
        <p className="text-custom-gray w-fit">STRENGTH</p>
        <div className="flex gap-x-2 justify-end items-center">
          <p className="text-custom-light-gray text-xl" translate="no">{passwordStrength}</p>
          {passwordStrengthMeter(passwordStrength)}
        </div>
    </div>
  )
}

export default Strength