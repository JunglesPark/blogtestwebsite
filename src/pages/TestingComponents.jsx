import React from 'react'
import { Carousel, ClientCarousel, Navbar } from '../components'

const TestingComponents = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <div className="w-[33vw]">
            <ClientCarousel />
        </div>
        
    </div>
  )
}

export default TestingComponents