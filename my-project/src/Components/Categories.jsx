import React, { useContext } from 'react'
import { apiData } from './ContextApi'
import Slider from "react-slick";
const Categories = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    let categori = useContext(apiData);
    let cateFilter = categori.filter((item) => item.id >= 5 && item.id <= 10)
  return (
    <>
      <div className="container mx-auto py-10 ">
        <h1 className='text-2xl font-bold font-josefin text-[#151875] text-center'>Top Categories</h1>

        <div className="md:ml-0 ml-10 ">
        <Slider {...settings}>           
        {
            cateFilter.map((item) => (

        <div className="   py-5 ">
           
           <div className="ml-5 w-[240px] group  relative overflow-hidden  ">
            
            <div className="absolute -left-40 group-hover:left-[28px]   border w-40 h-40 bg-blue-500 rounded-full"></div>

            <div className="   relative overflow-hidden text-center ">
            <img className='border w-40 h-40 rounded-full  bg-[#f5f5f8] bottom-[3px] p-5 mx-auto' src={item.thumbnail} alt="" />
            <button className='py-[2px] px-2 bg-green-400  text-[9px] items-center absolute top-[130px] -left-20  group-hover:left-[90px]  text-white duration-700'>View Shop</button>

           
            <h4 className='mt-2 '>{item.title} </h4>
            <p>{item.price} </p>
            </div>
            </div>
        </div>
            ))
        }
    

      
    </Slider> 
    </div>      
        

      </div>
    </>
  )
}

export default Categories
