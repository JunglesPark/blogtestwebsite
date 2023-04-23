import React from 'react'

const Partnerships = () => {
  return (
    <div className="bg-cyan-100 relative w-screen lg:h-[400px] h-fit">
        <div className="flex w-full place-items-center">
          <h1 className="text-blue-900 w-full text-center text-6xl font-black -top-10 absolute">Our Partners</h1>
        </div>
        
        <div className="grid xl:grid-cols-4 md:grid-cols-2 place-items-center flex w-full h-full">
          <div className="flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/logo_quantum.png" className="p-3 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
          <div className="flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/netapp.png" className="p-3 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
          <div className="flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/pureStorage.png" className="p-3 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
          <div className="flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/Solace_Logo_Green_360x100-1.png" className="p-3 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
        </div>
    </div>
  )
}

export default Partnerships