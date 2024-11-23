import React, { useContext, useEffect, useState } from 'react'
import { apiData } from './ContextApi';
import Slider from "react-slick";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import Plus from '../assets/plus.png'
import './Featured.css'


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
      <h1 className='text-center text-2xl font-bold font-josefin mt-20 pb-10 text-[#151875]'>Featured Products</h1>


      <div className=" md:w-[80%] mx-auto pb-14 md:col-span-4   ">
       <Slider {...settings}>{
        filter.map((item) => (
          <div className="  group w-[240px]   md:px-2  bg-white ">

          <div className="flex flex-col justify-center border  pb-12 pt-5  relative overflow-hidden bg-[#e9e9ec]  rounded-t-lg ">
              <img className='w-[70%]  md:ml-8  mt-5  ' src={item.thumbnail} alt="" />
              <button  className='absolute -bottom-16  left-1/2 -translate-x-1/2 px-5 py-2 bg-green-400 w-[60%] rounded-xl text-[10px]  text-white duration-700 ease-in-out group-hover:bottom-4  '>View Details</button>
              <div className="flex gap-5 absolute top-2 -left-36  duration-700 group-hover:left-2 ">
                <p className='border p-2 rounded-full bg-[#e1e1eb] text-blue-400'><RiShoppingCartLine />  </p>
                <p className='border p-2 rounded-full bg-[#e1e1eb] text-blue-400'> <FaRegHeart /></p>
                <img className='border p-2 rounded-full bg-[#e1e1eb] text-blue-400 ' src={Plus} alt="" />
              </div>
          </div>
  
          <div className=" border  text-center group-hover:bg-blue-600 group-hover:text-white       ">
              <h2 className='text-primary text-md group-hover:text-white'>{item.title}</h2>
              <p className='relative bottom-4 '>  <span className='text-green-500 font-bold text-5xl'>-</span> <span className='text-primary font-bold text-5xl'>-</span> <span className='text-blue-700 font-bold text-5xl'>-</span>    </p>
              <p className=' relative bottom-3 text-sm '>Code . Y523201</p>
              <p className=' relative bottom-3 text-sm '>{item.price}</p>
           
          </div>              
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
