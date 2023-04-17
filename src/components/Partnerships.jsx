import React from 'react'

const Partnerships = () => {
  return (
    <div className="bg-cyan-100 relative w-screen h-[240px]">
        <div className="w-fit self-center">
          <h1 className="flex text-center text-4xl font-bold -top-6 absolute">Our Partners</h1>
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