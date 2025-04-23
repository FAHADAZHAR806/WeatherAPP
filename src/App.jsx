import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import UI from "./UI";
import Text from "./Text";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Lahore');

  const fetchWeather = async () => {
    try {
      const apiKey = "2cceac6b706c4a9fa56110424252304";
      const apiUrl = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`;
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <>
      <Text setCity={setCity} />
      <UI weatherData={weatherData} onCitySelect={setCity} />
    </>
  );
}
