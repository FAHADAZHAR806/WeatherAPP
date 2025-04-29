import React from 'react'

export default function Box6({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;
  return (
    <><div className=' grid grid-cols-1 py-4 gap-3 '>
    <h5>🌬 Wind</h5>
    <div className="relative w-34 h-34 rounded-full border-10  border-dashed ">
  <span className="absolute top-0 left-1/2 transform -translate-x-1/2  font-bold">N</span>
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2  font-bold">S</span>
  <h2 className='relative left-10 top-10'>{weatherData.current.wind_kph}</h2>

  <span className="absolute top-1/2 right-0 transform -translate-y-1/2  font-bold">E</span>
  <span className="absolute top-1/2 left-0 transform -translate-y-1/2  font-bold">W</span>
</div>
   </div>
    </>
  )
}
