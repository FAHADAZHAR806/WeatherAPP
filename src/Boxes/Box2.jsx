import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

export default function Box2({ onCitySelect }) {
  const [userLocation, setUserLocation] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  useEffect(() => {
    const getCityFromCoordinates = async () => {
      if (selected) {
        try {
          const apiKey = "2cceac6b706c4a9fa56110424252304";
          const url = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${selected.lat},${selected.lng}`;
          const res = await fetch(url);
          const data = await res.json();
          if (data && data.length > 0) {
            const cityName = data[0].name;
            console.log("Selected City:", cityName);
            onCitySelect(cityName); // Send city to App.jsx
          }
        } catch (err) {
          console.error("Error getting city from coordinates:", err);
        }
      }
    };

    getCityFromCoordinates();
  }, [selected]);

  const Marker = ({ text }) => (
    <div className="text-red-600 text-xl">🔼{text}</div>
  );

  const defaultCenter = {
    lat: 24.8607,
    lng: 67.0011,
  };

  return (
    <div className="w-full h-[600px] relative">
      <h1 className="text-center text-2xl font-bold mb-4">
        🌦 Click to get Weather
      </h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={userLocation || defaultCenter}
        center={userLocation || defaultCenter}
        defaultZoom={10}
        onClick={(e) => setSelected({ lat: e.lat, lng: e.lng })}
      >
        {userLocation && (
          <Marker lat={userLocation.lat} lng={userLocation.lng} text="You" />
        )}
        {selected && (
          <Marker lat={selected.lat} lng={selected.lng} text="Clicked" />
        )}
      </GoogleMapReact>
    </div>
  );
}
