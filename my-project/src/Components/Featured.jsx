import React, { useEffect, useState } from 'react'


const Featured = () => {
  let [apidata, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setApiData(data.products))

  },[])
    
  return (
    <>
      <div className="mt-10 ">
        <h1 className='text-center text-2xl font-bold font-josefin'>Featured Products</h1>
        <div className="flex flex-wrap gap-5 items-center justify-around">
          {apidata.map((item)=>(
           <img className='border w-[250px]' src={item.thumbnail} alt="" />
          ))}


        </div>

      </div>
    </>
  )
}

export default Featured
