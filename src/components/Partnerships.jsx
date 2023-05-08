import React from 'react'

const Partnerships = () => {
  const images = [
    {
      src: "./src/assets/Home/logo_quantum.png"
    },
    {
      src: "./src/assets/Home/netapp.png"
    },
    {
      src: "./src/assets/Home/pureStorage.png"
    },
    {
      src: "./src/assets/Home/Solace_Logo_Green_360x100-1.png"
    },
  ]

  return (
    <div className="bg-[#DEEAF0] relative w-screen py-20 h-fit flex justify-center">
        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full mx-auto mb-12 absolute top-0 lg:-translate-y-8 md:-translate-y-6 -translate-y-5">
          <div className="text-[#035C87] w-full text-center lg:text-6xl md:text-5xl text-4xl font-bold">Our Partners</div>
        </div>

        <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full mx-auto mb-12 md:px-12">
          <div className='grid grid-cols-4 gap-12 px-8 md:px-0'>
            {images.map((item,idx)=>{
              return(
                <div className='w-full bg-white md:col-span-1 col-span-4 h-[108px] -skew-x-[25deg] flex align-middle justify-center' key={idx}>
                  <img src={item.src} className="m-auto md:p-8 p-6 h-fit w-fit skew-x-[25deg]" alt=".." />
                </div>
              )
            })}

          </div>
        </div>
        
        {/* <div className="grid xl:grid-cols-4 md:grid-cols-2 place-items-center w-full h-full ">
          <div className="transition hover:brightness-75 flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/logo_quantum.png" className="py-3 px-8 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
          <div className="transition hover:brightness-75 flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/netapp.png" className="py-3 px-8 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
          <div className="transition hover:brightness-75 flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/pureStorage.png" className="py-3 px-8 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
          <div className="transition hover:brightness-75 flex items-center place-content-center bg-white p-2 m-8 w-[250px] h-1/2 skew-x-[-25deg]">
            <img src="./src/assets/Home/Solace_Logo_Green_360x100-1.png" className="py-3 px-8 h-fit w-fit skew-x-[25deg]" alt=".." />
          </div>
        </div> */}
    </div>
  )
}

export default Partnerships