import React, { useContext, useEffect, useState } from 'react'
import { apiData } from './ContextApi';
import Slider from "react-slick";

const Featured = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

 let info = useContext(apiData)
let filter = info.filter((item) => item.id >= 1 && item.id <= 6)
 
  return (
    <>
      <div className="mt-10 ">
        <h1 className='text-center text-2xl font-bold font-josefin mt-20 pb-10'>Featured Products</h1>

        <div className=' w-[70%] m-auto gap-3'>

          <Slider {...settings}>
    
          {
            filter.map((item)=>(
              <div className="gap-4 pb-20 ">
             <img className='border w-[250px]' src={item.thumbnail} alt="" />
             <h3>{item.title}</h3>
             <div className="">
              <h2><span className='border bg-'>-</span></h2>
             </div>
             <h3>{item.price}</h3>
          </div>
            ))
          }
          </Slider>
         

        </div>

      </div>
    </>
  )
}

export default Featured
