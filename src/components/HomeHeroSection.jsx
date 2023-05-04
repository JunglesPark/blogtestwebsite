import React from 'react'

const HomeHeroSection = () => {
    const latestNews= {
        "Date":"Feb 07, 2023",
        "Category":"News Cat",
        "Title":"News Title Here"
    }
  return (
    <div>
        <div className='relative'>
            <div className='bg-[#239CCF] 2xl:h-[655px] xl:h-[555px] md:h-[435px] h-[305px] w-full'>
                <div className='h-1/4 bg-white w-full'/>
                <div className='w-full text-center rotate-90 absolute md:-left-[48%] md:top-[200px] xl:-left-[49%] lg:top-[220px] 2xl:top-[260px] md:block hidden text-white text-[8px] font-bold'>SCROLL &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</div>
            </div>
            <div className="w-full  2xl:h-[655px] xl:h-[555px] md:h-[435px] h-[305px] bg-[url('./src/assets/Home2/hero1_banner_1.png')] bg-cover bg-no-repeat absolute bottom-0"
            style={{clipPath: 'polygon(30% 0%, 100% 0, 100% 100%, 0% 100%)'}}>

            </div>
        </div>

        {/* Latest News Bar */}
        <div className='w-full bg-[#239CCF] h-[72px]'>
            <div className="grid grid-cols-12 gap-4 h-full">
                <a className='col-span-12 md:col-span-7 w-full py-4 px-8 sm:px-6 lg:px-8' href="#">
                    <div className='flex items-center text-white text-sm'>
                        Latest News Release
                    </div>
                    <div className='flex items-center text-white text-sm' >
                        <div className='mr-5'>{latestNews.Date} </div>
                        <div className='rounded-xl bg-white text-[#239CCF] px-8 mr-8'>{latestNews.Category}</div>
                        <div >{latestNews.Title}</div>
                    </div>
                </a>
                <div className='col-span-5 w-full bg-white -translate-y-8 hidden md:block' style={{clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'}}>
                    <div className="grid grid-cols-12 gap-0 h-full">
                        <div className='col-span-7 w-full flex items-center justify-center bg-white' >
                            <div className="2xl:text-3xl lg:text-xl md:text-lg font-bold text-[#239CCF]">About Sonivy</div>
                        </div>
                        <div className='col-span-5 w-full bg-[#6DC4E2]' style={{clipPath: 'polygon(25% 0%, 100% 0, 100% 100%, 0% 100%)'}}/>
                    </div> 
                </div>
            </div>
        </div>

        {/*

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
        </div> */}

    </div>
  )
}

export default HomeHeroSection