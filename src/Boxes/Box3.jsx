import React from "react";

export default function Box3({ weatherData }) {
  if (!weatherData) return <div>Loading...</div>;
  const Data = [
    {
      day: <span>{new Date(weatherData.forecast.forecastday[0].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[0].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[0].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[0].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[0].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[1].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[1].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[1].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[1].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[1].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[2].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[2].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[2].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[2].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[2].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[3].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[3].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[3].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[3].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[3].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[4].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[4].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[4].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[4].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[4].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date (weatherData.forecast.forecastday[5].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[5].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[5].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[5].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[5].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[6].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[6].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[6].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[6].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[6].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[7].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[7].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[7].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[7].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[7].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[8].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[8].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[8].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[8].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[8].day.maxtemp_c}&deg;</span>
      ),
    },
    {
      day: <span>{new Date(weatherData.forecast.forecastday[9].date).toLocaleDateString("en-US", { weekday: "long" })}</span>,
      icon: (
        <img
          src={`https:${weatherData.forecast.forecastday[9].day.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-8 h-8"
        />
      ),
      temp: (
        <span>{weatherData.forecast.forecastday[9].day.mintemp_c}&deg;</span>
      ),
      text: (
        <span>{weatherData.forecast.forecastday[9].day.condition.text}</span>
      ),
      Degree: (
        <span>{weatherData.forecast.forecastday[9].day.maxtemp_c}&deg;</span>
      ),
    },
  ];

  return (
    <>
      <h1 className="py-4 ">☁ 10-Days Forcast</h1>
      <hr />

      {Data.map((item, index) => (
        <div>
          <div key={index} className="grid grid-cols-5 text-[14px]  py-4  ">
            <h3>{item.day}</h3>
            <span>{item.icon}</span>
            <span>{item.temp}</span>
            <span >{item.text}</span>
            <span>{item.Degree}</span>
          </div>
          <hr />
        </div>
      ))}

      {/* {
        weatherData?.forecast?.forecastday?.map((item,index) =>(
          <div key={item.date}>
            <p>{item.date}</p>
          </div>
        ))
      } */}
    </>
  );
}
