import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Products from '../Components/Products'
import Shopex from '../Components/Shopex'
import Trending from '../Components/Trending'
import TwoTrending from '../Components/TwoTrending'
import Discount from '../Components/Discount'
import Categories from '../Components/Categories'
import Newslater from '../Components/Newslater'
import Social from '../Components/Social'
import Blog from '../Components/Blog'


const Home = () => {
  return (
    <div>
     
      <Hero />
      <Featured />
      <Products />
      <Shopex />
      <Trending />
      <TwoTrending />
      <Discount />
      <Categories />
      <Newslater />
      <Social />
      <Blog />
    </div>
  )
}

export default Home
