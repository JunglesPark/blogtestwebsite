import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-screen h-screen bg-[url('./assets/Cloud/Cloud_banner_1.png')] bg-cover bg-no-repeat">
        <div className=" p-20 w-full grid grid-cols-2">
          <div className="items-start relative p-20 2xl:w-[800px] xl:w-[640px] md:w-[400px] justify-content-center">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <h1 className="text-4xl font-bold">Cloud Infrastructure</h1>
              <p className="py-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
          <div className="relative right-0 p-20 2xl:w-[800px] xl:w-[640px] md:w-[400px] justify-content-center">
              <img src="./src/assets/Cloud/Cloud_banner_2.png" alt=".."/>
          </div>
        </div>
        
    </div>
  )
}

export default HeroSection