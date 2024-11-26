import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


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
            <ul className={`md:flex md:gap-5 font-lato items-center   md:static  ${menuShow ? 'absolute top-20 left-34 pb-40 ' : 'absolute top-0 -left-72' }`}>
                <li className='hover:text-primary'><Link to='/'>Home</Link></li>
                <li className='hover:text-primary'> Pages </li>
                <li className='hover:text-primary'><Link to='/product'>Products</Link> </li>
                <li className='hover:text-primary'><Link to='/blog' >Blog</Link></li>
                <li className='hover:text-primary'><Link to='/shop' >Shop</Link> </li>
                <li className='hover:text-primary'><Link to='/social'>Contact</Link></li>
                <li className='md:ml-72 '>
                <div className="flex ">           
            <input className='border border-black outline-none '  type="Search" />                    
            <p className='border border-red-600 w-10 text-white items-center flex justify-center bg-biguni '><CiSearch /> </p>          
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
