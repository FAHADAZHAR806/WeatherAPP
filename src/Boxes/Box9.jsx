import React from 'react'


export default function Box9({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;

  return (
    <>
     <div className=' grid grid-cols-1 gap-3 py-4'>
     <h4>💧 Humidity:</h4>
     <p className="text-2xl">{weatherData.current.humidity}%</p>
 
    
    </div>
    </>
  )
}
