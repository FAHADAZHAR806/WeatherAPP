import React from "react";
import "boxicons";

export default function Box1({ weatherData }) {
  if (!weatherData) return <div>Loading...</div>;
  const Data = [
    {
      Time: "Now",
      img: (
        <img
          src={`https:${weatherData.current.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: <h1 className="text-[18px]">{weatherData.current.temp_c}&deg;</h1>,
    },
    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[0].time.split(" ")[1]}
        </span>
      ),
      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[0].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),

      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[0].temp_c}&deg;
        </h1>
      ),
    },
    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[1].time.split(" ")[1]}
        </span>
      ),
      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[1].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[1].temp_c}&deg;
        </h1>
      ),
    },

    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[2].time.split(" ")[1]}
        </span>
      ),

      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[2].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[2].temp_c}&deg;
        </h1>
      ),
    },

    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[3].time.split(" ")[1]}
        </span>
      ),

      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[3].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[3].temp_c}&deg;
        </h1>
      ),
    },

    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[4].time.split(" ")[1]}
        </span>
      ),

      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[4].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[4].temp_c}&deg;
        </h1>
      ),
    },

    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[5].time.split(" ")[1]}
        </span>
      ),

      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[5].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[5].temp_c}&deg;
        </h1>
      ),
    },

    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[6].time.split(" ")[1]}
        </span>
      ),

      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[6].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[6].temp_c}&deg;
        </h1>
      ),
    },

    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[7].time.split(" ")[1]}
        </span>
      ),

      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[7].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[7].temp_c}&deg;
        </h1>
      ),
    },

    {
      Time: (
        <span>
          {weatherData.forecast.forecastday[0].hour[8].time.split(" ")[1]}
        </span>
      ),

      img: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].hour[8].condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-10 h-10"
        />
      ),
      Value: (
        <h1 className="text-[18px]">
          {weatherData.forecast.forecastday[0].hour[8].temp_c}&deg;
        </h1>
      ),
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 py-4">
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          deleniti?
        </p>
        <hr />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 lg:grid-cols-10  ">
        {Data.map((item, index) => (
          <div key={index} className="grid grid-cols-1 grid-rows-3 ">
            {item.Time}
            {item.img}
            {item.Value}
          </div>
        ))}
      </div>
    </>
  );
}
