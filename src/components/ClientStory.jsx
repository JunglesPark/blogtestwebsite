import React from 'react'

const ClientStory = () => {
  return (
    <div className="relative bg-gray-200 justify-center w-screen h-full py-20">
        <div className="">
            <div className="absolute  w-[135px] h-[135px] bg-cover bg-[url('../src/assets/Middleware/HKJCLogo.png')]">
            </div>
            <div>
                <h2 className="">Story of Client</h2>
                <hr className=""></hr>
                <h3 className="">Hong Kong Jockey Club</h3>
            </div>
        </div>
        
        <div className="w-full flex justify-center">
            <div className="bg-blue-800 p-10 m-2 xl:w-[1200px] lg:w-[800px] md:w-[640px] w-screen">
                
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
        </div>
        
        
       
    </div>
  )
}

export default ClientStory