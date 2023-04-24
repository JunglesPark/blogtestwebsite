import React from 'react'
import { HomepageHero06Photo } from '../assets'

const Footer = () => {
  return (
    <div className="w-full h-[75vh] bg-[#02044A] text-gray-300">
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
                        <a href="#" className="transition-all text-black font-bold hover:font-black lg:text-lg xl:text-xl">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-fit bg-cyan-100">
            <div className="mx-10 p-20 w-[300px]">
                <img src="../src/assets/SonivyLogo/Footer_Logo.png" alt=".." className="object-cover"/>
            </div>
            <div className="mx-20 grid lg:grid-cols-3 grid-cols-1">
                <div className="p-10">
                    <h1 className="pb-5 text-blue-500 text-2xl font-bold">Address</h1>
                    <p className="text-black text-lg font-semibold">Room 1808, 18/F, CEO Tower, 77 Wing Hong Street, Cheung Sha Wan, Kowloon, Hong Kong</p>
                </div>
                <div className="p-10">
                    <h1 className="pb-5 text-blue-500 text-2xl font-bold">TEL</h1>
                    <p className="text-black text-lg font-semibold">+852 2194 9122</p>
                    <p className="text-black text-lg font-semibold">10:00AM to 07:00PM (Monday to Friday)</p>
                </div>
                <div className="p-10">
                    <h1 className="pb-5 text-blue-500 text-2xl font-bold">Email</h1>
                    <p className="text-black text-lg font-semibold">info@sonivy.com</p>
                </div>
                
            </div>
            <div className="mx-10 px-20">
                    <p className="text-black text-sm">© Sonivy Technology Limited 2022 | all rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer