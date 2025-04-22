import React from 'react'
import 'boxicons'

export default function Box1({weatherData}) {
  if (!weatherData) return <div>Loading...</div>;
  const Data=[
    {
      Time:"Now",
      img:<box-icon name="sun" type="solid" color="yellow"></box-icon>,
      Value:<h1 className='text-[18px]'>{weatherData.current.temp_c}&deg;</h1>


    },
    {
      Time:"Now",
      img:<box-icon name="sun" type="solid" color="yellow"></box-icon>,
      Value:"Current temp"

    },
    {
      Time:"Now",
      img:<box-icon name="sun" type="solid" color="yellow"></box-icon>,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon type='solid' name='cloud-rain' color="yellow"></box-icon> ,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon name="moon" type="solid" color="white"></box-icon>,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon name="moon" type="solid" color="white"></box-icon>,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon name="moon" type="solid" color="white"></box-icon>,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon name="moon" type="solid" color="white"></box-icon>,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon name="moon" type="solid" color="white"></box-icon>,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon name="moon" type="solid" color="white"></box-icon>,
      Value:"Current temp"

    },

    {
      Time:"Now",
      img:<box-icon name="moon" type="solid" color="white"></box-icon>,
      Value:"Current temp"

    },

    

  ]
  return (
    <>
    <div className='grid grid-cols-1 grid-rows-2 py-4'>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, deleniti?</p>
<hr />
    </div>
    <div className='grid grid-cols-11  '>
        {Data.map((item,index)=>(
          <div key={index} className='grid grid-cols-1 grid-rows-3 '>
          {item.Time}
          {item.img}
          {item.Value}
        </div>
        ))}
       
    </div>
    </>
  )
}
