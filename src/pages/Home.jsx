import React from 'react'
import Hero from '../components/Hero'
import LattestCollection from '../components/LattestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

function Home() {
  return (
    <div className=''>
      <Hero />
      <LattestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
