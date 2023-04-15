import React from 'react'
import Navbar from './navbar'
import ProductList from '../products/prodectlist'
import SlikSlider from '../about/slikSlider'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <SlikSlider/> */}
      <ProductList/>
     
    </div>
  )
}
