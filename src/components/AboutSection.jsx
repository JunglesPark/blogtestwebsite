import React from 'react'

const AboutSection = () => {
  return (
    <div>
        <div className="w-screen h-[100%] grid grid-cols-2 overflow-hidden ">
            <div>
                <div className="p-20 m-20 ">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit tenetur sequi dignissimos, maiores officiis, minima nisi laboriosam voluptatum, optio fuga culpa iure ad repellat enim. Quo iure omnis ipsa deserunt.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odit, tempora voluptatum distinctio aspernatur quaerat quae error minus amet inventore rerum quibusdam suscipit ut quod omnis ducimus saepe ad beatae.
                    </p>
                </div>
            </div>
            <div className="object-fit relative">
                <div className='absolute left-[-15%] w-[30%] h-[100%] bg-white skew-x-[15deg] '></div>
                <div className='absolute right-[25%] w-[3%] h-full bg-white skew-x-[15deg]  '></div>
                <div className='absolute right-[10%] w-[3%] h-full bg-white skew-x-[15deg]  '></div>
                <div className='absolute right-[10%] top-0 w-[13%] h-[10%] bg-white skew-x-[15deg]  '></div>
                <div className='absolute right-[2%] bottom-[-2%] w-[14%] h-[30%] bg-white skew-x-[15deg] '></div>
                <div className='absolute right-[-20%] w-[25%] h-full bg-white skew-x-[15deg] '></div>
                <img src="./src/assets/AboutUs/AboutUs_photo_1.png" className="h-[95%] ShadowBottom" alt=".." />
            </div>
        </div>
    </div>
  )
}

export default AboutSection