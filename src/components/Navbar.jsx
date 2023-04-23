import React, { useState } from 'react'
import { menu, close, logo } from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

  return (
    <div className="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative">
        <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">

            <div className="flex items-center">
                <img src="./src/assets/SonivyLogo/Header_Logo.png" alt="logo image" className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]"/>
            </div>

            <div className="flex items-center">
                <ul className="hidden md:flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                </ul>
            </div>

            <div className="hidden md:flex sm:mr-10 md:mr-10">
                <button className="px-8 py-3">Search</button>
            </div>

            <div className="md:hidden" onClick={handleClick}>
                <img src={!toggle?menu:close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10" />
            </div>

        </div>
        <ul className={toggle ? "absolute bg-white w-full px-8 md:hidden":"hidden"}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <div className="flex flex-col my-4">
                <button className="px-8 py-3">Search</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar