import React from 'react'
import { HomepageHero06Photo } from '../assets'
import { screenSize } from '../hooks/screenSize'

const Footer = () => {
    let screenWidth = screenSize()
    const informations = [
        {
            name: "Address",
            description: ["Room 1808, 18/F, CEO Tower, 77 Wing Hong Street, Cheung Sha Wan, Kowloon, Hong Kong"]
        },
        {
            name: "TEL",
            description: ["+852 2194 9122", "10:00AM to 07:00PM (Monday to Friday)"]
        },
        {
            name: "Email",
            description: ["info@sonivy.com"]
        },

    ]
  return (
    <div className="w-full">
        {/* <div className='bg-[url("./assets/Home/hero6_photo.png")] bg-cover bg-center h-[40vh]'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-2 bg-[#239CCF] opacity-40 w-full h-full'></div>
            </div>

        </div>  */}
        <div className="relative h-[40vh] bg-[url('./assets/Home/hero6_photo.png')] bg-cover bg-center bg-no-repeat">
            <div className="h-full w-[250px] bg-blue-900 skew-x-[-15deg] absolute bottom-10 left-10 opacity-70 invisible lg:visible">
            
            </div>
            <div className="flex h-full lg:h-[60%] w-full lg:w-[50%] bg-white lg:skew-x-[-15deg] absolute lg:-bottom-10 lg:right-32 opacity-75 px-16 py-8 place-items-center">
                <div className="lg:skew-x-[15deg]">
                    <h2 className="text-black text-3xl font-black">Looking to fast track your way to success</h2>
                    <button className="transition-all my-5 p-2">Drop us a Message</button>
                    <div className="grid grid-cols-3">
                        <a href="/about" className="transition-all items-center text-black font-bold hover:font-black lg:text-lg xl:text-xl">About Us</a>
                        <a href="/services" className="transition-all text-black font-bold hover:font-black lg:text-lg xl:text-xl">Our Services</a>
                        <a href="/contactus" className="transition-all text-black font-bold hover:font-black lg:text-lg xl:text-xl">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-fit bg-[#2D9FD9] bg-opacity-25">
            <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-lg max-w-xs w-full mx-auto md:px-12 px-6'>
                <div className='grid grid-cols-12 pt-12 gap-4'>
                    <div className='col-span-4 md:col-span-12'>
                        <div className='md:h-32 md:w-32 mt-12'>
                        <a href="/"><img src="../src/assets/SonivyLogo/Sonivy-short-Logo.png" alt=".." className="object-fit w-full"/></a>
                        </div>
                    </div>
                    <div className='col-span-8 md:col-span-12'>
                        <div className={screenWidth <= 768 ?
                            "grid grid-rows-3 gap-4"
                            :
                            "grid grid-cols-12 gap-8"
                        }>
                            {informations.map((item,idx)=>{
                                return(
                                    <>
                                        <div className='row-span-1 md:hidden '>
                                            <div className='mt-4 ml-8'>
                                                <div className='text-[#035C87] font-semibold text-sm'>{item.name}</div>
                                                {item?.description?.map((content,idx)=>{
                                                    return(
                                                        <div key={idx+"_description"} className='text-black'>{content}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="md:col-span-4 hidden md:block">
                                            <div className='mt-4'>
                                                <div className='text-[#035C87] font-semibold text-sm'>{item.name}</div>
                                                {item?.description?.map((content,idx)=>{
                                                    return(
                                                        <div key={idx+"_description"} className='text-black my-2'>{content}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>


            <div className="md:mx-10 mx-4 px-2 pt-8 md:pb-20 pb-8 text-center md:text-left">
                    <p className="text-black text-sm">© Sonivy Technology Limited 2022 | all rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer