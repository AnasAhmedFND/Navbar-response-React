import React, { useContext, useState } from 'react'
import { apiData } from './ContextApi'

const ProductShop = () => {
    let shopApiProduct = useContext(apiData)
    
    
  return (
    <>
      <div className="container mx-auto flex justify-between py-10">

        <div className="w-[18%] ">
            <ul>
                <li>categories 1</li>
                <li>categories 2</li>
                <li>categories 3</li>
                <li>categories 4</li>
                <li>categories 5</li>
            </ul>
        </div>

        <div className="w-[80%] flex flex-wrap gap-4 overflow-y-scroll h-[500px] ">
            {shopApiProduct.map((item) => (
               <div className="border w-[250px] h-[363px] text-center  ">
                 <img className='border bg-[#f5f5f8] ' src={item.thumbnail} alt="" />
                 <h4 className='font-bold'>{item.title} </h4>
                 <p className='relative bottom-20'><span className='text-[80px] text-[#f227a1] '>.</span><span className='text-[80px] text-[#f53044] '>.</span><span className='text-[80px] text-[#3330eb] '>.</span></p>
                 <p className='relative bottom-24'>{item.price} <span className='text-primary '>{item.discountPercentage}</span> </p>
               </div>
            ))
                
            }

        </div>


      </div>
    </>
  )
}

export default ProductShop
