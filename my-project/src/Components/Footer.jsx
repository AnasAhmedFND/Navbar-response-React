import React from 'react'
import Logo from '../assets/Logo.png'
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <div className="px-10 md:flex md:justify-between  border py-20 items-center bg-[#dadae0] ">
        <div className="">
           <img src={Logo} alt="" />
           <div className="mt-10 flex">
           <input className='rounded-md p-2 md:w-[60%]' type="text" placeholder='Rnter Email Address' />
           <button className='border md:w-28 p-2 bg-biguni rounded-md text-white'>Sign Up</button>
           </div>
           <p className='mt-5'>Contact info <br />17 Princess Road, London, Greater London NW1 8JR,UK</p>
        </div>

        <div className="">
            <h2 className=' text-xl font-bold'>Catagories</h2>
            <p className='mt-10'>Laptops & Computers</p>
            <p>Cameras & Photography</p>
            <p>Smart Phones & Tablets</p>
            <p>Video Games & Consoles</p>
            <p>Waterproof Headphones</p>
        </div>

        <div className="">
            <h2 className=' text-xl font-bold'>Customer Care</h2>
            <p className='mt-10'>My Account</p>
            <p>Discount</p>
            <p>Returns</p>
            <p>Orders History</p>
            <p>Order Tracking</p>
        </div>

        <div className="mt-5">
            <h2 className='text-xl font-bold'>Pages</h2>
            <p className='mt-10'>Blog</p>
            <p>Browse the Shop</p>
            <p>Category</p>
            <p>Pre-Built Pages</p>
            <p>Visual Composer Elements</p>
            <p>WooCommerce Pages</p>
        </div>


      </div>

      <div className="flex md:justify-between md:px-20 items-center justify-around py-3 bg-[#d6d6df]  border">
        <div className="">
        <p>©Webecy - All Rights Reserved</p>
        </div>

        <div className="flex gap-3">
            <p><MdFacebook /></p>
            <p><FaInstagram /></p>
            <p><AiFillTwitterCircle /></p>

        </div>


      </div>
    </>
  )
}

export default Footer
