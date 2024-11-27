import React, { useContext, useEffect, useState } from 'react'
import { apiData } from './ContextApi'
import { TiArrowSortedDown } from "react-icons/ti";


const ProductShop = () => {
    let shopApiProduct = useContext(apiData)
    
   let [category, setCategory] = useState([])

   useEffect(() => {
        setCategory([...new Set(shopApiProduct.map((item)=> item.category))])
   }, [shopApiProduct])
  
   let [categoryShow, setCategoryShow] = useState(false)
   

     let [categoryItem, setCategoryItem] = useState([])
     

    const hendleCategory = (c) => {
        let filteredProduct = shopApiProduct.filter((item) => item.category == c)
        setCategoryItem(filteredProduct)

        console.log(categoryItem);
        
    }

    
    
  return (
    <>
      <div className="container mx-auto md:flex justify-between py-10">

        

        <div className="md:w-[18%] w-[60%] ">
            <div className=" ">
                 <h1 onClick={() => setCategoryShow(!categoryShow)} className='flex items-center font-bold cursor-pointer'>Shop By Category <span className='ml-5'><TiArrowSortedDown /></span></h1>
                 
            </div>
            {categoryShow &&
                <ul className='overflow-y-scroll h-36'>
                {category.map((item) =>(
                  <li className='cursor-pointer md:bg-white bg-[#30e0dd]  ' onClick={() => hendleCategory (item)}>{item}</li>
                ))}          
          </ul>
            }
        </div>

        
        


        <div className="md:w-[80%] flex flex-wrap gap-4 overflow-y-scroll h-[500px] mt-5 ">

            {categoryItem.length == 0 ? 
            shopApiProduct.map((item) => (
              
               <div className="border md:w-[250px] w-[150px] h-[363px] text-center shadow-xl group ">
                 <img className='border bg-[#f5f5f8] group-hover:bg-[#bad9c899] ' src={item.thumbnail} alt="" />
               
                 <h4 className='font-bold'>{item.title} </h4>
                 <p className='relative bottom-20'><span className='text-[80px] text-[#f227a1] '>.</span><span className='text-[80px] text-[#f53044] '>.</span><span className='text-[80px] text-[#3330eb] '>.</span></p>
                 <p className='relative bottom-24'>{item.price} <span className='text-primary ml-2'>{item.discountPercentage}</span> </p>
               </div>
            ))                         
            :
            categoryItem.map((item) => (
                <div className="border w-[250px] h-[363px] text-center shadow-xl group ">
                  <img className='border bg-[#f5f5f8] group-hover:bg-[#bad9c899] ' src={item.thumbnail} alt="" />
                 
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
