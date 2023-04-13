import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-[75vh] bg-[#02044A] text-gray-300">
        <div className="relative h-[50%] bg-[url('https://picsum.photos/id/237/536/354')] bg-cover bg-no-repeat">
            <div className="h-full w-[15%] bg-blue-500 skew-x-[-15deg] absolute bottom-10 left-10">
            
            </div>
            <div className="h-[60%] w-[50%] bg-white skew-x-[-15deg] absolute -bottom-10 right-32 opacity-75">
                <div className="skew-x-[15deg]">
                    <h2>Looking to fast track your way to success</h2>
                    <button>Drop us a Message</button>
                    <div className="grid grid-cols-3">
                        <a href="/about">About Us</a>
                        <a href="/services">Our Services</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[50%] bg-cyan-100">

        </div>
    </div>
  )
}

export default Footer