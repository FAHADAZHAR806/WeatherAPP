import React from 'react'

export default function Box10({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;

  return (
    <>
     <div className=' grid grid-cols-1 gap-3 py-4'>
     <h5>👁Visibility</h5>
     <h2 className='text-[18px]'>{weatherData.current.vis_km}km</h2>
    
     <h4>Humadity is making feeling higher</h4>
    </div>
    </>
  )
}
