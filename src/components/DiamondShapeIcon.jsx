import React from 'react'

import { ServicesForCustomers } from './servicesforcustomers'

const DiamondShapeIcon = ({ idx, title, content}) => {
  return (
    <div className="relative w-screen md:h-[100vh] h-[120vh] p-20 my-20 bg-[url('./assets/background_patterns_lowres.png')] bg-cover">
        
        <ServicesForCustomers idx={idx} title={title} content={content}/>
        
    </div>
  )
}

export default DiamondShapeIcon

/*
    <div>
        <div className="absolute top-[5%] lg:top-[10%] lg:right-[10%] gap-x-3 m-8 p-8 cutCorner 2xl:w-[700px] xl:w-[600px] md:w-[480px] w-[280px] bg-white">
            <h1 className="bg-white text-blue-900 absolute left-5 -top-6 md:text-4xl text-2xl font-black z-40">Who needs this?</h1>
            <p className="text-sm md:text-md xl:text-base 2xl:text-lg pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="absolute top-[35%] lg:top-[40%] lg:right-[8%] gap-x-3 m-8 p-8 cutCorner 2xl:w-[700px] xl:w-[600px] md:w-[480px] w-[280px] bg-white">
            <h1 className="bg-white text-blue-900 absolute left-5 -top-6 md:text-4xl text-2xl font-black z-40">Why this Service?</h1>
            <p className="text-sm md:text-md xl:text-base 2xl:text-lg pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="absolute top-[65%] lg:bottom-[5%] gap-x-3 m-8 p-8 cutCorner 2xl:w-[900px] lg:w-[800px] md:w-[480px] w-[280px] bg-white">
            <h1 className="text-blue-900 relative md:text-4xl text-2xl font-black z-40">How does Sonivy do this?</h1>
            <p className="text-sm md:text-md xl:text-base 2xl:text-lg pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>  
*/