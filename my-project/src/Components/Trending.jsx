import React from 'react'
import Supa from '../assets/shopex/supa.png'
const Trending = () => {
  return (
    <>
      <div className="md:flex items-center justify-center bg-[#F1F0FF] py-5 mt-10 ">

        <div className="">
        <img className='w-[350px] ' src={Supa} alt="" />
        </div>

        <div className="">
            <h2 className='font-bold text-2xl font-josefin'>Unique Features Of leatest & <br />
            Trending Poducts</h2>
            <p className='text-[12px] '><span className='text-5xl font-bold text-primary'>.</span> All frames constructed with hardwood solids and laminates</p>
            <p className='text-[12px] relative bottom-4 '><span className='text-5xl font-bold text-blue-500'>.</span> Reinforced with double wood dowels, glue, screw - nails corner <br />    blocks and machine nails</p>
            <p className='text-[12px] relative bottom-10 '><span className='text-5xl font-bold text-green-500'>.</span> Arms, backs and seats are structurally reinforced</p>
            <div className="flex gap-2 relative bottom-5">
                <button className=' px-5 bg-red-500 text-white rounded-md  '>Add To Cart</button>
                <p>B&B Italian Sofa <br />$32.00</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Trending
