import React from 'react'
import Hero from '../components/hero'
import Flavors from '../components/flavors'
import About from '../components/about'
import Carusel from '../components/carusel'
import Card from '../components/card'
import Caruselav from '../components/caruselav'
import Cardav from '../components/cardav'
import Footer from '../components/shared/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <Flavors/>
      <About/>
      <Carusel/>
      <Card/> 
      <Caruselav/>
      <Cardav/>
      <Footer/>
    </div>
  )
}

export default Home