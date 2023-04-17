import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-screen h-screen bg-[url('./assets/Cloud/Cloud_banner_1.png')] bg-cover bg-no-repeat">
        <div className="p-20 flex md:grid md:grid-cols-2 sm:grid-cols-1">
          <div className="p-20 2xl:w-[640px] xl:w-[480px] md:w-[300px] justify-content-center">
              <h2 className="text-xl font-bold">Our Services</h2>
              <h1 className="text-2xl font-bold">Cloud Infrastructure</h1>
              <p className="py-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
          <div className="p-20 2xl:w-[640px] xl:w-[480px] md:w-[300px] justify-content-center">
              <img src="./src/assets/Cloud/Cloud_banner_2.png" alt=".."/>
          </div>
        </div>
        
    </div>
  )
}

export default HeroSection