import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {


    let [menuShow, setMenuShow] = useState(false)

    const handleMenu = () => {

        setMenuShow(!menuShow);
    }
    console.log(menuShow);

  return (
    <>
      <div className={`flex md:justify-between md:px-20 md:py-5 py-3 md:items-center gap-5 ${menuShow ? 'pb-40' : 'pb-3'}`}>
        <div className="">
            <img src={Logo} alt="" />
        </div>

        <div className="md:flex md:justify-between  w-[80%] ">
            <ul className={`md:flex md:gap-5 font-lato items-center  md:static  ${menuShow ? 'absolute top-20 left-36 pb-40 ' : 'absolute top-0 -left-72' }`}>
                <li className='hover:text-primary'>Home</li>
                <li className='hover:text-primary'>Pages</li>
                <li className='hover:text-primary'>Products</li>
                <li className='hover:text-primary'>Blog</li>
                <li className='hover:text-primary'>Shop</li>
                <li className='hover:text-primary'>Contact</li>
                <li className='md:ml-72 '>
                <div className="flex ">           
            <input className='border border-black outline-none '  type="Search" />                    
            <p className='border w-10 text-white items-center flex justify-center bg-biguni '><CiSearch /> </p>          
            </div>
                </li>
            </ul>
            
        </div>

        <div onClick={handleMenu} className="md:hidden">
            { menuShow === true ? <RxCross2 /> : <IoMenu />}
        </div>

        

      </div>
    </>
  )
}

export default Navbar
