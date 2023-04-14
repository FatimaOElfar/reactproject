import React from 'react'
import Navbar from './navbar'
import ProductList from './prodectlist'
import SlikSlider from './slikSlider'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <SlikSlider/> */}
      <ProductList/>
     
    </div>
  )
}
