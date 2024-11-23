import React from 'react'
import B1 from '../assets/shopex/blog1.png'
import B2 from '../assets/shopex/blog2.png'
import B3 from '../assets/shopex/blog3.png'


import { SlCalender } from "react-icons/sl";
import { RiMarkPenFill } from "react-icons/ri";

const Blog = () => {
  return (
    <>
      <div className="container mx-auto pb-10">
        <h2 className='text-2xl font-bold text-center font-josefin mt-5 text-[#154687] '>Leatest Blog</h2>

        <div className=" flex flex-wrap md:col-span-3 col-span-1 gap-5 justify-center md:justify-between md:mt-10 mt-5  ">

            <div className=" w-[320px] group shadow-xl rounded-lg ">
                <img className='rounded-lg' src={B1} alt="" />

                <div className="pb-5 px-2">
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                            <p><RiMarkPenFill /></p>
                            <p className='text-[12px] '>SaberAli</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><SlCalender /></p>
                            <p className='text-[12px] '>21 August,2020</p>
                        </div>
                    </div>
                    <h3 className='tex-xl font-bold font-josefin mt-5 group-hover:text-primary   '>Top esssential Trends in 2021</h3>
                    <p className='text-[14px] '>More off this less hello samlande lied much <br /> over tightly circa horse taped mightly</p>
                    <button className='underline mt-3 group-hover:text-primary '>Read More</button>
                </div>
            </div>

            <div className=" w-[320px] group shadow-xl rounded-lg ">
                <img className='rounded-lg' src={B2} alt="" />

                <div className="pb-5 px-2">
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                            <p><RiMarkPenFill /></p>
                            <p className='text-[12px] '>SaberAli</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><SlCalender /></p>
                            <p className='text-[12px] '>21 August,2020</p>
                        </div>
                    </div>
                    <h3 className='tex-xl font-bold font-josefin mt-5 group-hover:text-primary   '>Top esssential Trends in 2021</h3>
                    <p className='text-[14px] '>More off this less hello samlande lied much <br /> over tightly circa horse taped mightly</p>
                    <button className='underline mt-3 group-hover:text-primary '>Read More</button>
                </div>
            </div>

            <div className=" w-[320px] group shadow-xl rounded-lg ">
                <img className='rounded-lg' src={B3} alt="" />

                <div className="pb-5 px-2">
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2">
                            <p><RiMarkPenFill /></p>
                            <p className='text-[12px] '>SaberAli</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p><SlCalender /></p>
                            <p className='text-[12px] '>21 August,2020</p>
                        </div>
                    </div>
                    <h3 className='tex-xl font-bold font-josefin mt-5 group-hover:text-primary   '>Top esssential Trends in 2021</h3>
                    <p className='text-[14px] '>More off this less hello samlande lied much <br /> over tightly circa horse taped mightly</p>
                    <button className='underline mt-3 group-hover:text-primary '>Read More</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog
