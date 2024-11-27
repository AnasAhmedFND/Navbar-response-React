import React from 'react'

import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";

const Ecommerce = () => {
  return (
    <>
      <div className="container mx-auto ">
       <div className="md:flex md:py-20 py-10 ">
       <div className="">
            <h3 className='font-bold text-primary '>Ecommerce Acceories & Fashion item </h3>
            <p className='text-[12px] text-[#8c8ca4] '>About 9,620 results (0.62 seconds)</p>
        </div>

      <div className="flex md:mt-0 mt-4">

        <div className="flex items-center md:ml-20">
            <p className=' '>Per Page:</p>
            <input className='border border-black w-[50px] ml-2 text-center' type="text" placeholder='5'/>
        </div>

        <div className="flex items-center md:ml-10  ml-5 ">
            <p className='text-[#78788f] '>Sort By:</p>
            <div className="border border-black w-[120px] flex items-center px-2 ml-2 ">
            <select   name="mod" id="quality">
              <option value="best-qua">Best Match</option>
              <option value="best-qua">Low to High</option>
              <option value="best-qua">High to Low</option>
              <option value="best-qua">New Arrivals</option>

            </select>
           
            </div>
        </div>
      </div>

        <div className="flex items-center md:ml-5 md:mt-0 mt-4">
            <p>View:</p>
            <p className='ml-2'><HiViewGrid /></p>
            <p className='ml-1'><MdViewList /></p>
            <input className='border outline-none ml-5 ' type="Search" />
        </div>
       </div>
      </div>
    </>
  )
}

export default Ecommerce
