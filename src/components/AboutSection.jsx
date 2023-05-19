import React from 'react'

const AboutSection = () => {
  return (
    <div className='relative'>
        <div className="absolute w-full h-full">
            <img src="../src/assets/AboutUs/AboutUs_photo_1_editted.png" className="absolute right-0 hidden md:block md:opacity-[100%] w-[350px] md:w-[400px] lg:w-[500px] xl:w-[700px] " alt=".." />
        </div>
        <div className="overflow-hidden flex items-center align-middle justify-center">
            <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 md:col-span-6 flex items-center'>
                        <div className='p-2 md:p-0'>
                            <h1 className="lg:py-10 md:py-6 py-3 font-bold xl:text-6xl lg:text-4xl md:text-2xl text-3xl md:text-start text-center">About Us</h1>
                            <p className="text-sm lg:text-base xl:text-lg my-4 text-center md:text-start">
                                Since 2009, we have been providing cutting-edge technology and consulting services, primarily in emerging Asian markets. We are a group of innovators who believe that the future of technology is intertwined with all financial and business processes, assisting daily operations to integrate data-driven tools right now.
                            </p>
                            <p className="text-sm lg:text-base xl:text-lg my-4 text-center md:text-start">
                                We evolve with technology and are proud to provide middleware services, cloud-related services, blockchain and cryptocurrency services, and the best resources available to you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:hidden block'>
            <img src="../src/assets/AboutUs/AboutUs_photo_1_editted.png" className="w-full" alt=".." />
        </div>
        <div className='overflow-hidden flex items-center align-middle justify-center md:mt-20 md:py-20'>
            <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='lg:col-span-6 md:col-span-4 col-span-12 hidden md:block'>
                        <img src="../src/assets/AboutUs/AboutUs_photo_2.png" className="w-full h-full" alt=".."/>
                    </div>
                    <div className='lg:col-span-6 md:col-span-8 col-span-12 order-first md:order-last'>
                        <div className=' w-full h-full relative'>
                            <div className='lg:bottom-3/4 md:top-1/5 bg-white shadow-lg h-fit w-full md:absolute relative lg:-translate-x-24 md:-translate-x-8 '>
                                <div className='bg-[#239CCF] opacity-25 -z-10 w-full h-52 absolute -top-8 -left-8'></div>
                                <div className='md:absolute relative md:top-0 md:bottom-0 md:left-0 md:right-0 z-10 bg-white h-fit shadow-xl py-8 px-4 my-8 md:my-0'>
                                    <h3 className="w-fit m-2 px-3 lg:py-3 font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl">Why Us?</h3>
                                    <p className="text-xs lg:text-base xl:text-lg p-5 tracking-wide">Our team is open to custom projects, and are happy to pursue any kind of software engineering, project management or cloud-based concerns moving forward. We thank you for considering Sonivy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection