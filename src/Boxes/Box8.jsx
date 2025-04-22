import React from 'react'

export default function Box8({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;

  return (
 <>
 <div className=' grid grid-cols-1 gap-3 py-3'>
     <h5>🐾 Feels like</h5>
     <h2 className='text-[18px]'>{weatherData.current.feelslike_c}&deg;</h2>
     <h4 className='pt-20'>Humadity is making feeling higher</h4>
    </div>
 </>
  )
}


