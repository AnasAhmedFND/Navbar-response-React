import React from 'react'
import Google from '../assets/shopex/googl.png'
import Gmail from '../assets/shopex/gmail.png'
import Youtub from '../assets/shopex/youtub.png'
import Whatsapp from '../assets/shopex/whatsapp.png'
import Fb from '../assets/shopex/ffb.png'



const Social = () => {
  return (
    <>
      <div className="container mx-auto gap-5 flex flex-wrap col-span-2 md:col-span-5  md:justify-between md:pb-10 pb-5">
        <img className='md:w-[100px] w-[100px]      ' src={Google} alt="" />
        <img className='md:w-[150px] w-[100px]      ' src={Gmail} alt="" />
        <img className='md:w-[150px] w-[100px]      ' src={Youtub} alt="" />
        <img className='md:w-[150px] w-[100px]      ' src={Whatsapp} alt="" />
        <img className='md:w-[150px] w-[100px]      ' src={Fb} alt="" />

      </div>
    </>
  )
}

export default Social
