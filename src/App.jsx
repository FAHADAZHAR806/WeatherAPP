import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios";
import UI from "./UI";
import Text from "./Text";

export default function App() 
  {
    const [weatherData, setWeatherData] = useState(null);
     const [city, setCity] = useState('Lahore');
   
     const fetchWeather = async () => {
       try {
         const apiKey = "6f67143b242f4dcab3a102200251604";
         const apiUrl = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`;
         const response = await axios.get(apiUrl);
         setWeatherData(response.data);
       } catch (error) {
         console.error('Error fetching weather:', error);
         setWeatherData(weatherData); 
       }
     };
   
     useEffect(() => {
       fetchWeather();
     }, [city]);
  
  return (
    <>
      <Text setCity={setCity} />
      <UI weatherData={weatherData} />
    </>
  );
}
