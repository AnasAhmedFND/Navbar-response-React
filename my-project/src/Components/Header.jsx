import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { GiSelfLove } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
  return (
    <>
      <div className=" flex md:justify-between border items-center md:px-20 px-2 py-4 bg-[#7E33E0] text-white ">       
            <div className="flex  gap-10 items-center">                      
            <p className='flex items-center gap-2'><MdMailOutline /> mhhasanul@gmail.com</p>                         
            <p  className='flex items-center gap-2'><MdAddCall /> (12345)67890</p>            
            </div>        

         <div className="flex gap-5 items-center">
            <p className='flex items-center'>English <IoIosArrowDown /></p>            
            <p className='flex items-center'>USD <IoIosArrowDown /></p>
            <p className='flex items-center'>Login <RxPerson /></p>
            <p className='flex items-center'>Wishlist  <GiSelfLove /></p>
            <p><FiShoppingCart /></p>
         </div>
       </div>
    </>
  )
}

export default Header
