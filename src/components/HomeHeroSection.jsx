import React from 'react'

const HomeHeroSection = () => {
  return (
    <div>
        <div className="w-screen h-[50vh] bg-[url('./src/assets/Home2/hero1_banner_1.png')] bg-fit bg-no-repeat">

        </div>
        <div className="mt-20 h-[150px] w-screen bg-blue-500">
            <div className="p-14 w-1/3">
                <div>
                    <h3 className="font-bold text-white">Latest News Release</h3>
                </div>
                <div className="grid grid-cols-3 gap-x-5">
                    <p className="font-bold text-white">Feb . 07 . 2023</p>
                    <button className="transition-all">News Cat</button>
                    <p className="font-bold text-white">News Title Here</p>
                </div>
            </div>
        </div>

        <div className="w-full h-[50vh] bg-cyan-100 bg-fit bg-no-repeat flex justify-center">
            <div className="self-center border-4 border-inset p-8 mx-8 flex bg-white md:h-[360px] h-[400px] xl:w-[1200px] lg:w-[800px] md:w-[640px] w-screen drop-shadow-lg">
                <div className="px-10 lg:w-2/3 ">
                    <div>
                        <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Data Integration</h1>
                    </div>
                    <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button className="transition-all py-2 px-8">More -</button>
                </div>
                <div className="lg:w-1/3 w-0 self-center">
                    <img className="invisible lg:visible w-full drop-shadow-sm" src="../src/assets/Home/hero2_photo_2.png" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeHeroSection