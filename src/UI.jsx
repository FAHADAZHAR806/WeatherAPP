import Box1 from './Boxes/Box1'
import Box2 from './Boxes/Box2'
import Box3 from './Boxes/Box3'
import Box4 from './Boxes/Box4'
import Box5 from './Boxes/Box5'
import Box6 from './Boxes/Box6'
import Box7 from './Boxes/Box7'
import Box8 from './Boxes/Box8'
import Box9 from './Boxes/Box9'
import Box10 from './Boxes/Box10'
import Box11 from './Boxes/Box11'
export default function UI({weatherData, onCitySelect }) {
 
  return (
    <>
    <div className='grid grid-cols-1 w-full max-w-6xl m-auto  text-white'>
    <div className="grid grid-cols-1   lg:grid-cols-6 lg:grid-rows-4 gap-4 p-4 bg-gray-100">
  {/* I am BOX 1 */}
  <div className="bg-blue-300 col-span-2 lg:col-span-4 row-span-1 px-2 rounded-[4px]">
    <Box1 weatherData={weatherData} />
  </div>
  {/* I am Box2 */}
  <div className="bg-blue-300   row-span-3 col-span-2 px-2 rounded-[4px]">
<Box2 weatherData={weatherData} onCitySelect={onCitySelect}/>
  </div>

  {/* I am Box 3*/}
  <div className="bg-blue-300 row-span-3 col-span-2 px-2 rounded-[4px] ">
  <Box3 weatherData={weatherData}/>
  </div>
  {/* I am Box4 */}
  <div className="bg-blue-300 col-span-1 px-2 rounded-[4px]">
  <Box4 weatherData={weatherData}/>
  </div>
  {/* I am BOX-5 */}
  <div className="bg-blue-300 col-span-1  rounded-[4px]">
    <Box5 weatherData={weatherData} />
  </div>
  {/* I am BOX6 */}
  <div className="bg-blue-300 col-span-1 px-2 rounded-[4px]">
    <Box6 weatherData={weatherData}/>
  </div>
  {/* I am BOX 7 */}
  <div className="bg-blue-300 px-2 rounded-[4px]">
  <Box7 weatherData={weatherData}/>
  </div>

  {/* I am BOx-8 */}
  <div className="bg-blue-300 px-2 rounded-[4px] ">
 <Box8 weatherData={weatherData}/>
  </div>
  {/* I am Box-9 */}
  <div className="bg-blue-300 px-2 rounded-[4px]">
    
    <Box9 weatherData={weatherData} />
  </div>
  {/* I am Box-10 */}
  <div className="bg-blue-300 px-2 rounded-[4px]">
    <Box10 weatherData={weatherData}/>
  </div>
  {/* I am Box-11 */}
  <div className="bg-blue-300 px-2 rounded-[4px]">
   <Box11 weatherData={weatherData}/>
  </div>
  
</div>
    </div>


    </>
  )
}
