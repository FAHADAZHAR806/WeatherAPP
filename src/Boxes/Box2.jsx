import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

export default function Box2() {
  const [selected, setSelected] = useState(null);

  console.log("map data:", selected);

  const center = {
    lat: 24.8607,
    lng: 67.0011,
  };

  const Marker = ({ text }) => (
    <div className="text-red-600 text-xl">🔼{text}</div>
  );

  return (
    <>
      <div className="w-[100%] h-[600px] relative">
        <h1 className="text-center text-2xl font-bold mb-4">
          🌦 Click to get Weather
        </h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={center}
          defaultZoom={10}
          onClick={(data) => setSelected(data )}
        >
          {selected && (
            <Marker lat={selected.lat} lng={selected.lng} text="You" />
          )}
        </GoogleMapReact>
      </div>
    </>
  );
}
