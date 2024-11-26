import React, { useContext, useEffect, useState } from 'react'
import { apiData } from './ContextApi'
import { TiArrowSortedDown } from "react-icons/ti";

const ProductShop = () => {
    let shopApiProduct = useContext(apiData)
    
   let [category, setCategory] = useState([])

   useEffect(() => {
        setCategory([...new Set(shopApiProduct.map((item)=> item.category))])
   }, [shopApiProduct])
   console.log(category);
   
    
    
    
  return (
    <>
      <div className="container mx-auto flex justify-between py-10">

        <div className="w-[18%] ">
            <div className="">
                 <h1 className='flex items-center font-bold'>Shop By Category <span className='ml-5'><TiArrowSortedDown /></span></h1>
                 
            </div>
            <ul className='overflow-y-scroll h-36'>
                  {category.map((item) =>(
                    <li>{item}</li>
                  ))}          
            </ul>
        </div>

        <div className="w-[80%] flex flex-wrap gap-4 overflow-y-scroll h-[500px] ">
            {shopApiProduct.map((item) => (
               <div className="border w-[250px] h-[363px] text-center  ">
                 <img className='border bg-[#f5f5f8] ' src={item.thumbnail} alt="" />
                 <h4 className='font-bold'>{item.title} </h4>
                 <p className='relative bottom-20'><span className='text-[80px] text-[#f227a1] '>.</span><span className='text-[80px] text-[#f53044] '>.</span><span className='text-[80px] text-[#3330eb] '>.</span></p>
                 <p className='relative bottom-24'>{item.price} <span className='text-primary ml-2'>{item.discountPercentage}</span> </p>
               </div>
            ))
                
            }

        </div>


      </div>
    </>
  )
}

export default ProductShop
