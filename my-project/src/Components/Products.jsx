import React, { useContext } from 'react'
import Imag from '../assets/product1.png'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import Sale from '../assets/sale.png'
import { apiData } from './ContextApi';


const Products = () => {
    let produc = useContext(apiData)

  return (
    <>
      <section className='py-10'>

       
        <div className="text-center mt-10          ">
            <h2 className='text-3xl font-josefin text-[#151875]'>Leatest Products</h2>
            <div className=" flex justify-center md:gap-5 gap-2 mt-2 text-[12px] md:text-[15px]  ">
                <p className='hover:text-primary hover:underline'>New Arrival</p>
                <p className='hover:text-primary hover:underline'>Best Seller</p>
                <p className='hover:text-primary hover:underline'>Featured</p>
                <p className='hover:text-primary hover:underline'>Special Offer</p>
            </div>
        </div>

        <div className="container md:mx-auto  overflow-y-scroll h-[590px]  flex flex-wrap gap-2 md:gap-6 md:justify-between justify-center  mt-10 md:col-span-4 col-span-2    ">
       { produc.map((item) => (

        <div className=" relative group overflow-hidden  ">
         <div className=" md:w-[230px] w-[150px]        ">
            <img className=' border bg-[#f5f5f8]  w-full pt-3 ' src={item.thumbnail} alt="" />

           <img className='absolute top-1 md:top-5 -left-24 group-hover:left-2 duration-700 md:w-[70px] w-[50px]           ' src={Sale} alt="" />
            
            <div className="flex justify-between py-2">
                <p className='md:text-[12px] text-[10px] md:border-b md:pb-1 '>Comfort Handy Craft</p>
                <p className='text-[12px]   '>${item.price} <span className='text-primary'> ${item.discountPercentage}</span></p>
            </div>

         </div>

         <div className="absolute top-20 md:top-28 -left-5 group-hover:left-2 duration-700 flex flex-col gap-2 md:gap-5    ">
                <p className='text-blue-500'><LuShoppingCart /></p>
                <p className='text-blue-500'><FaRegHeart /></p>
                <p className='text-blue-500'><FaSearchPlus /></p>

         </div>

        </div>
        ))}
        </div>


      </section>
    </>
  )
}

export default Products
