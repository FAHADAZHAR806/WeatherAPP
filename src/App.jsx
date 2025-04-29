import React, { useState, useEffect, } from "react";
import './App.css';
import axios from "axios";
import ThemeContext from "./ThemeContext";
import UI from "./UI";
import Text from "./Text";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Lahore');
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const fetchWeather = async () => {
    try {
      const apiKey = "2cceac6b706c4a9fa56110424252304";
      // const apiUrl = ` https://api.weatherapi.com/v1/forecast.json?q=${city}&key=${apiKey}`;
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10`      

     
      

      const response = await axios.get(apiUrl);
      const responsee =await response.data
      setWeatherData(responsee);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);
  

  return (
    <>
   
    <ThemeContext.Provider value={{theme,toggleTheme}}  >
      <div style={{
          backgroundColor: theme === "light" ? "#f4f4f4" : "#1a1a1a",
          color: theme === "light" ? "#1a1a1a" : "#f4f4f4",
      }}>
          <Text setCity={setCity} />
      <UI weatherData={weatherData} onCitySelect={setCity} />
      </div>
      </ThemeContext.Provider>  
      
       </>
      
  );
}
