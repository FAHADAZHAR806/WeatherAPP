// Test.jsx
import { useState } from "react";
export default function Text({ setCity }) {
  const [inputCity, setInputCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      console.log("Setting city:", inputCity); // ← Check if this logs!
      setCity(inputCity.trim());
      setInputCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center m-6 flex gap-6 justify-center ">
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city"
      />
    <button
            type="submit"
            
           className="border-2 rounded-sm p-1 my-1">
            Get Weather
          </button>
    </form>
  );
}
