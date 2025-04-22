import React from 'react'

export default function Box4({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;
  return (
    <>
    <div className=' grid grid-cols-1 gap-3 py-4'>
     <h5>🌤 UV index</h5>
     <p className="text-2xl">{weatherData.current.uv}%</p>
     <h3>Moderate</h3>
     <hr />
     <h4>Use Sun Protection until 5 pm</h4>
    </div>
    </>
  )
}
