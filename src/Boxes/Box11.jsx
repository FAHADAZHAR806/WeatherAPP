import React from 'react'

export default function Box11({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;
  return (
    <div>
      <div className=' grid grid-cols-1 gap-3 py-4'>
     <h5>🌡Pressure</h5>

     <div className='w-30 h-30 rounded-full border-8 border-dashed'>
     <h2 className='relative  max-w-fit h-fit m-auto grid top-10'>{weatherData.current.pressure_mb} <br />mbs</h2>

     </div>
    </div>
    </div>
  )
}
