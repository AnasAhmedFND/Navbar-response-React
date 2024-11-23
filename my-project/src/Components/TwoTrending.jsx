import React, { createContext, useContext } from 'react'
import Product from '../assets/shopex/trending2.png'
import Product1 from '../assets/shopex/trending1.png'
import Cher from '../assets/product1.png'

import { apiData } from './ContextApi'
const TwoTrending = () => {

  let product = useContext(apiData);
  let apiProduct = product.filter((item) => item.id >= 10 && item.id <= 13 )
  let trndingProduct = product.filter((item) => item.id >= 7 && item.id <=9 )

  return (
    <>
      <div className="pb-10">
        <h1 className='mt-8 md:mt-16 text-center font-bold text-2xl font-josefin'>Trending Products</h1>
      
        <div className="container mx-auto mt-5 md:mt-10  flex md:col-span-4 flex-wrap col-span-2 justify-center  md:justify-between ">
        { apiProduct.map((item) => (

            <div className="p-2 shadow-xl w-[170px] md:w-[250px] ">
                <img className='bg-[#f5f5f8] w-full ' src={item.thumbnail} alt="" />
                <p className='text-center mt-2 text-[14px] '> {item.title} </p>
                <p className='text-center text-[12px] '>{item.price} <span className='text-[10px] text-[#444451] '> {item.rating} </span></p>
            </div>
    ))}
        </div>

        <div className="mt-5 container mx-auto flex flex-wrap md:col-span-3 justify-center md:justify-between gap-5 ">

          <div className=" w-[350px] bg-[#FFF6FB] p-5 h-[210px]        ">
            <h2 className='text-xl font-bold font-josefin '>23% off in all products</h2>
            <p className='text-primary'>Shop Now</p>
            <img className='relative left-36 bottom-10 w-[180px] ' src={Product} alt="" />
          </div>

          <div className=" w-[350px] bg-[#ececf2] p-5 h-[210px]  items-end      ">
            <h2 className='text-xl font-bold font-josefin '>23% off in all products</h2>
            <p className='text-primary'>Shop Now</p>
            <img className=' w-[260px] ml-10 relative bottom-5' src={Product1} alt="" />
          </div>

          <div className="flex flex-col gap-4 ">
            {
              trndingProduct.map((item) => (

            <div className="flex items-center gap-4">
              <img className='w-[60px] bg-[#f5f5f8] ' src={item.thumbnail} alt="" />
              <div className="">
                <h3>{item.title }</h3>
                <p>{item.price} </p>
              </div>
            </div>
              ))
            }

          </div>
        </div>


      </div>
    </>
  )
}

export default TwoTrending
