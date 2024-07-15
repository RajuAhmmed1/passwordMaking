import React, { useState, useEffect } from "react";

function PasswordMaking() {
  const [range, setRange] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [charset, setCharset] = useState(false);

  const generatePassword = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = ".+-*/?><'|}{~!@#$%^&";
    let allChars = letters;

    // Arrays to hold at least one of each type of character
    const selectedChars = [];

    // Ensure the password contains at least one of each selected type
    if (number) {
      for (let i = 0; i < Math.ceil(range / 3); i++) {
        selectedChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
      }
    }
    if (charset) {
      for (let i = 0; i < Math.ceil(range / 3); i++) {
        selectedChars.push(
          specialChars[Math.floor(Math.random() * specialChars.length)]
        );
      }
    }

    // Fill the rest of the password
    while (selectedChars.length < range) {
      selectedChars.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    // Shuffle the selected characters to ensure randomness
    for (let i = selectedChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selectedChars[i], selectedChars[j]] = [
        selectedChars[j],
        selectedChars[i],
      ];
    }

    return selectedChars.join("");
  };

  useEffect(() => {
    setPassword(generatePassword());
  }, [range, number, charset]);

  return (
    <div className="w-[45%] bg-blue-950 mx-auto p-10 my-10 h-[300px] flex flex-col rounded-lg text-white justify-center">
      <div className="flex flex-row w-full mt-8">
        <input
          className="w-[90%] h-auto px-5 py-2 outline-none rounded-l-3xl text-black"
          type="text"
          value={password}
          readOnly
        />
        <button
          className="bg-[#FFC000] rounded-r-3xl px-6 py-2"
          onClick={() => setPassword(generatePassword())}
        >
          Generate
        </button>
      </div>
      <div className="flex flex-row w-full my-12 items-center gap-5 justify-center">
        <div className="flex px-3">
          <input
            type="range"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            min="8"
            max="30"
          />
          <p className="px-2">Length: {range}</p>
        </div>
        <div>
          <input
            type="checkbox"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          <label className="px-2" htmlFor="">
            Number
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={charset}
            onChange={(e) => setCharset(e.target.checked)}
          />
          <label className="px-2">Special Character</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordMaking;
