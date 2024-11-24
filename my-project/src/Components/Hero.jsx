import React from 'react'
import Lamp from '../assets/Lamp.png'
import All from '../assets/all.png'
import Slider from "react-slick";
import './Heroses.css'
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
    <>
    <section>
      
        <Slider {...settings}>
          
          <div className="">
            <div className=" md:flex md:px-10 md:pb-20 pb-5   bg-[#f2eff2] md:justify-between ">
              <div className="">
                  <img src={Lamp} alt="" />
                  
              </div>

              <div className="md:mt-44 relative md:right-16 ">
                  <p className='text-primary'>Best Furniture For Your Castle....</p>
                  <h1 className='md:text-4xl font-josefin text-xl mt-4'>New Furniture Collection <br />Trends in 2020</h1>
                  <p className='mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  dipiscing in phasellus non in justo.</p>
                  <button className='border text-white bg-biguni px-5 py-2 text-[13px] mt-2'>Shop Now</button>
              </div>

              <div className="w-[40%] md:mt-20 relative md:right-10 md:py-0 py-5">
                  <img src={All} alt="" />          

              </div>
          </div>
          </div>
          
          <div className="">
            <div className=" md:flex md:px-10 md:pb-20 pb-5  bg-[#f2eff2] md:justify-between ">
            <div className="">
                <img src={Lamp} alt="" />
                
            </div>

           
            <div className="md:mt-44 relative md:right-16 ">
                <p className='text-primary'>Best Furniture For Your Castle....</p>
                <h1 className='md:text-4xl font-josefin text-xl mt-4'>New Furniture Collection <br />Trends in 2020</h1>
                <p className='mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  dipiscing in phasellus non in justo.</p>
                <button className='border text-white bg-biguni px-5 py-2 text-[13px] mt-2'>Shop Now</button>
            </div>

            <div className="w-[40%] md:mt-20 relative md:right-10 md:py-0 py-5">
                <img src={All} alt="" />          

            </div>
            

          </div>
          </div>
          
        <div className="">
            <div className=" md:flex md:px-10 md:pb-20 pb-5  bg-[#f2eff2] md:justify-between ">
            <div className="">
                <img src={Lamp} alt="" />
                
            </div>

            <div className="md:mt-44 relative md:right-16 ">
                <p className='text-primary'>Best Furniture For Your Castle....</p>
                <h1 className='md:text-4xl font-josefin text-xl mt-4'>New Furniture Collection <br />Trends in 2020</h1>
                <p className='mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  dipiscing in phasellus non in justo.</p>
                <button className='border text-white bg-biguni px-5 py-2 text-[13px] mt-2'>Shop Now</button>
            </div>

            <div className="w-[40%] md:mt-20 relative md:right-10 md:py-0 py-5">
                <img src={All} alt="" />          

            </div>
          </div>
          </div>
        
          
          
        </Slider>
   

    </section>

  

      




    </>
  )
}

export default Hero
