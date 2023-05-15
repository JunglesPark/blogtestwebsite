import React from 'react'

import { HeroContent } from './HeroContent'

const HeroSection = ({ idx, title, content}) => {

  return (
    <div>
      <div className="w-screen h-[75vh] bg-[url('./assets/Cloud/Cloud_banner_1.png')] bg-cover bg-no-repeat mb-margin-sm md:mb-margin-md lg:mb-margin-lg px-width-padding-sm md:px-width-padding-md xl:px-width-padding-lg relative flex justify-center items-center">
        <HeroContent idx={idx} title={title} content={content}/>
      </div>
      
    </div>
    
  )
}

export default HeroSection
/*
<div className="w-screen h-[75vh] bg-[url('./assets/Cloud/Cloud_banner_1.png')] bg-cover bg-no-repeat pt-[70px] mb-margin-sm md:mb-margin-md lg:mb-margin-lg px-width-padding-sm md:px-width-padding-md xl:px-width-padding-lg relative">
        <div className="grid grid-cols-6 md:grid-cols-12">
          <div className="items-start relative px-20  2xl:w-[800px] xl:w-[600px] md:w-[400px] min-w-[400px] justify-content-center col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold">Our Services</h2>
              
              <h1 className="text-4xl font-bold">{our_services[0]['service_title']}</h1>
              <p className="py-5">{our_services[0]['service_description']}</p>
          </div>
          <div className="relative 2xl:w-[800px] xl:w-[600px] md:w-[480px] min-w-[480px] invisible md:visible align-items-center">
              <img className="relative py-10 md:block left-[60%] top-[30%] md:translate-x-[-76%] lg:translate-x-[-73%] md:translate-y-[-44%]" height="512px" width="512px" src="../src/assets/Cloud/Cloud_banner_2.png" alt=".."/>
          </div>
        </div>
        
    </div>
*/