import React from 'react'

import MiddlewareClientBG from "../assets/Middleware/backgroundMiddleware.png"
import { screenSize } from '../hooks/screenSize'



const ClientStory = () => {

    let screenSizeWidth = screenSize()

  return (
    <div className="relative flex bg-gray-100 justify-center w-screen h-full py-32 justify-items-center">

                   
            <div className="ClientStoryBackground w-[80vw] md:col-start-3 md:col-span-8 col-span-12">
                {/* The Logo and Header for HKJC */}
                <div>
                    <div className="relative md:w-[135px] md:h-[135px] w-[100px] h-[100px] md:translate-x-[-50%] translate-x-[0%] md:translate-y-[-50%] translate-y-[-75%] bg-cover bg-[url('../src/assets/Middleware/HKJCLogo.png')] z-50">
                    </div>
                    <div className="relative z-40 pl-12 md:translate-x-[0%] md:translate-y-[-200%] translate-y-[-162%] lg:w-[500px] w-[400px] bg-cyan-500" style={{clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)'}}>
                        <h2 className="p-2 md:pl-5 pl-14 text-white text-xl font-bold lg:tracking-widest">Story of Client</h2>
                        <hr className=""></hr>
                        <h3 className="p-2 pl-5 text-white text-xl font-black lg:tracking-widest">Hong Kong Jockey Club</h3>
                    </div>
                </div>

                {/* White text */}
                <p className="p-8 m-8 text-lg font-semibold text-white w-2/3">Our middleware professionals can engineer a platform for your data systems to operate in a scalable and fault tolerant manner.</p>
                
                <div className="flex flex-col">
                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white h-fill w-[80%]">
                    <div className="px-10 lg:w-2/3 ">
                        <div>
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Data Integration</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="relative invisible lg:visible drop-shadow-sm h-[100%] w-[85%] max-w-[210px] max-h-[240px]" src="../src/assets/Middleware/Hero4_photo_1_lowres.png" />
                    </div>
                </div>


                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white h-fill w-[80%]">
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="relative invisible lg:visible h-[100%] w-[85%] max-w-[210px] max-h-[240px]" src="../src/assets/Middleware/Hero4_photo_2_lowres.png" />
                    </div>
                    <div className="px-10 lg:w-2/3">
                        <div className="flex lg:justify-end">
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Solid Automation</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white h-fill w-[80%]">
                    <div className="px-10 lg:w-2/3">
                        <div>
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">System Operability Solutions</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="lg:w-1/3 w-0 self-center ">
                        <img className="relative invisible lg:visible h-[100%] w-[85%] max-w-[210px] max-h-[240px]" src="../src/assets/Middleware/Hero4_photo_3_lowres.png" />
                    </div>
                </div>

                <div className="border-4 border-inset p-8 mx-8 my-20 flex bg-white h-fill w-[80%]">
                    <div className="lg:w-1/3 w-0 self-center">
                        <img className="relative invisible lg:visible h-[100%] w-[85%] max-w-[210px] max-h-[240px]" src="../src/assets/Middleware/Hero4_photo_4_lowres.png" />
                    </div>
                    <div className="px-10 lg:w-2/3">
                        <div className="flex lg:justify-end">
                            <h1 className="px-6 py-2 w-fit xl:text-3xl text-xl text-cyan-500 font-bold border-2 border-solid rounded-full border-cyan-200">Excellent Scalability</h1>
                        </div>
                        <p className="py-5 lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                </div>
                {/* Different Benefits for Clients Section */}
                
                
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
  )
}

export default ClientStory