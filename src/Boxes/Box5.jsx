import React from 'react'

export default function Box5({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;

  return (
   <>
    <div className=' grid grid-cols-1 gap-3 py-4'>
     <h5>🌤 Sun Set</h5>
     <p className="text-2xl">{weatherData.location.localtime}</p>
     <hr />
     <h4>sunrise 5 pm</h4>
    </div>
   </>
  )
}
