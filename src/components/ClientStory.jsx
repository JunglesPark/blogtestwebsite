import React from 'react'

const ClientStory = () => {
  return (
    <div className="relative flex bg-gray-200 justify-center w-screen h-full py-20">
        <div className="md:w-[80vw]">
            <div className="absolute md:translate-y-[3px] translate-y-[-50px] md:translate-x-[50%] md:w-[135px] md:h-[135px] w-[100px] h-[100px] bg-cover bg-[url('../src/assets/Middleware/HKJCLogo.png')] z-50">
            </div>
            <div className="relative z-40 pl-12 md:translate-x-[30%] md:translate-y-[26px] lg:w-[500px] w-[400px] bg-cyan-500" style={{clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)'}}>
                <h2 className="p-2 md:pl-5 pl-14 text-white text-xl font-bold lg:tracking-widest">Story of Client</h2>
                <hr className=""></hr>
                <h3 className="p-2 pl-5 text-white text-xl font-black lg:tracking-widest">Hong Kong Jockey Club</h3>
            </div>


            <div className="relative z-30 md:translate-x-[134px] md:translate-y-[-20px] translate-y-[-45px] md:w-[65vw] w-[90vw] bg-blue-500">
                
                <div className="pt-20 px-10 w-100%">
                    <p className='text-lg font-semibold text-white'>Our middleware professionals can engineer a platform for your data systems to operate in a scalable and fault tolerant manner.</p>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[320px] h-[320px]">
                    <div className="px-10 lg:w-3/5 ">
                        <div>
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Data Integration</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">By proper data integration, we helped the Jockey Club integrate data from various sources, such as betting systems, customer databases, and financial systems, into a centralized repository.  </p>
                    </div>
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="xl:min-w-[220px] xl:w-[340px] lg:w-[160px] invisible lg:visible w-full drop-shadow-sm" src="../src/assets/Middleware/Hero4_photo_1.png" />
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[320px] h-[320px]">
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="invisible lg:visible w-full" src="../src/assets/Middleware/Hero4_photo_2.png" />
                    </div>
                    <div className="px-10 lg:w-2/3">
                        <div className="flex lg:justify-end">
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Solid Automation</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">We implemented solid automation in various business processes, such as betting transactions, horse racing scheduling, and customer management.</p>
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[320px] h-[320px]">
                    <div className="px-10 lg:w-2/3">
                        <div>
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">System Operability Solutions</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Our system operability solutions connect different systems and applications, such as front-end systems, back-end systems, and mobile apps, allowing them to exchange information and work together seamlessly.  </p>
                    </div>
                    <div className="lg:w-1/3 w-0 self-center ">
                        <img className="invisible lg:visible w-full" src="../src/assets/Middleware/Hero4_photo_3.png" />
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[320px] h-[320px]">
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="invisible lg:visible w-full " src="../src/assets/Middleware/Hero4_photo_4.png" />
                    </div>
                    <div className="px-10 lg:w-2/3">
                        <div className="flex lg:justify-end">
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Excellent Scalability</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Our solutions always takes into account scalability of operations to meet increasing demand, as well as add new capabilities and services.  </p>
                    </div>
                </div>
                
            </div>
            {/* Main info section */}

            {/* 
            <div className="bg-blue-800 p-10 m-2 xl:w-[85%] lg:w-[80%] md:w-[640px] w-screen">
                
                <p className="p-8 m-8 text-lg font-semibold text-white w-2/3">Our middleware professionals can engineer a platform for your data systems to operate in a scalable and fault tolerant manner.</p>
                
                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[360px] h-[400px]">
                    <div className="px-10 lg:w-2/3 ">
                        <div>
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Data Integration</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="invisible lg:visible w-full drop-shadow-sm" src="../src/assets/Middleware/Hero4_photo_1.png" />
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[360px] h-[400px]">
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="invisible lg:visible w-full" src="../src/assets/Middleware/Hero4_photo_2.png" />
                    </div>
                    <div className="px-10 lg:w-2/3">
                        <div className="flex lg:justify-end">
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Solid Automation</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[360px] h-[400px]">
                    <div className="px-10 lg:w-2/3">
                        <div>
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">System Operability Solutions</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="lg:w-1/3 w-0 self-center ">
                        <img className="invisible lg:visible w-full" src="../src/assets/Middleware/Hero4_photo_3.png" />
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white md:h-[360px] h-[400px]">
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="invisible lg:visible w-full " src="../src/assets/Middleware/Hero4_photo_4.png" />
                    </div>
                    <div className="px-10 lg:w-2/3">
                        <div className="flex lg:justify-end">
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Excellent Scalability</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

            </div>
         */}
        
        </div>
    </div>
  )
}

export default ClientStory