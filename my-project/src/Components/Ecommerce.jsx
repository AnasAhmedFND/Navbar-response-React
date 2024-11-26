import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";

const Ecommerce = () => {
  return (
    <>
      <div className="container mx-auto">
       <div className="flex py-20">
       <div className="">
            <h3 className='font-bold text-primary '>Ecommerce Acceories & Fashion item </h3>
            <p className='text-[12px] text-[#8c8ca4] '>About 9,620 results (0.62 seconds)</p>
        </div>

        <div className="flex items-center ml-20">
            <p className='text-[12px] '>Per Page:</p>
            <input className='border border-black w-[50px] ml-2' type="text" />
        </div>

        <div className="flex items-center ml-10">
            <p className='text-[12px] '>Sort By:</p>
            <div className="border border-black w-[120px] flex items-center px-2 ml-2 ">
            <input className='w-[80%] ' type="text" placeholder='Best Match'  />
            <p className='w-[10%] text-[#b6b6ce] '> <IoIosArrowDown /></p>
            </div>
        </div>

        <div className="flex items-center ml-5">
            <p>View:</p>
            <p><HiViewGrid /></p>
            <p><MdViewList /></p>
            <input className='border border-black ml-5' type="text" />
        </div>
       </div>
      </div>
    </>
  )
}

export default Ecommerce
