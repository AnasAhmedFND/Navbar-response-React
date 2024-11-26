import React from 'react'

const ShopGrid = (props) => {
  return (
    <>
    <div className="bg-[#F6F5FF]">

      <div className="container mx-auto py-24 ">
       <h2 className=' text-2xl font-bold font-josefin'>Shop Grid Default</h2>
       <p className='font-bold '>Home.Page. <span className='text-red-500 font-bold'>{props.pageName}</span></p>
      </div>
    </div>
    </>
  )
}

export default ShopGrid
