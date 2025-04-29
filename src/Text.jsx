// Test.jsx
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
export default function Text({ setCity }) {
  const [inputCity, setInputCity] = useState("");

  const {toggleTheme}  = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      console.log("Setting city:", inputCity); // ← Check if this logs!
      setCity(inputCity.trim());
      setInputCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-6xl m-auto mt-4 p-2 lg:rounded-full text-white  gap-4 justify-center flex-wrap  sticky top-0  " 
    >
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city"
        className=" border-6 rounded-t-sm  border-blue-400 bg-blue-400  p-1 my-1 text-white "
      />
      <button
        type="submit"
        className="border-6 border-blue-400  rounded-b-sm p-1 my-1 bg-blue-400  text-white"
      >
        Get Weather
      </button>
      <button
        onClick={toggleTheme}
        className=" border-6 rounded-t-sm  border-blue-400 bg-blue-400  p-1 my-1 text-white "
      >
        Toggle Theme
      </button>
    </form>
  );
}
