import React from 'react'

export default function Box7({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;

  return (
    <>
    <div className=' grid grid-cols-1 gap-3 py-2'>
     <h5>🎁 Precipitation</h5>
     <h2 className='text-[18px]'>{weatherData.current.precip_in}</h2>
     <h3 className='text-[14px]'>in last 24 hour</h3>
     <hr />
     <h4>Next Expected is 1mm</h4>
    </div>
    </>
  )
}
