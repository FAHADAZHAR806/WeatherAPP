import React from 'react'

export default function Box5({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;

  return (
   <>
    <div className=' grid grid-cols-1 gap-3 py-4'>
     <h5>🌤 Sun Set</h5>
     <p className="text-2xl">{ new Date(weatherData.location.localtime).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true})}</p>

     <hr />
     <h4>sunrise 5 pm</h4>
    </div>
   </>
  )
}
