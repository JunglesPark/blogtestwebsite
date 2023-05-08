import React, { useEffect, useState } from 'react'

import InfoSectionBG from "../assets/Home/InfoSectionBG.jpg"
import { screenSize } from '../hooks/screenSize'

const InfoSection = () => {
  let screenSizeWidth = screenSize()
  const [height, setHeight] = useState({})

  useEffect(()=>{
    divHeight()
  },[screenSizeWidth])

  const divHeight = () =>{
    let boxHeight = document.getElementById('contentBox').clientHeight.toString()
    setHeight({
      height:  boxHeight + "px"
    })
  }

  const services = [
    {
      name: "Experience",
      content:"Our team wields more than 20-years of IoT and IT experience, working with the new tech developments overtime as they have grown. We embrace new technology, and always fall back on our experience to make sure we process it correctly."
    },
    {
      name: "Breadth of Knowleadge",
      content:"Our team carries a variety of skills including big data management and analytics and marketing experience, information technology expertise, and technology research aptitudes. Together, we are a well-rounded group of tech wizards who are ready to revolutionize your operation."
    },
    {
      name: "Trend Setters",
      content:"We never get complacent with the technology available at our fingertips. We understand that technology is fluid, which is why we need to be up on the trends before they overtake us. We are able to consult on emerging technology that you should consider integrating into your operation before it’s too late."
    },
    {
      name: "Passions",
      content:"Most importantly, we are passionate about what we do here at Sonivy. We love technology and data, and want to help you understand its value for your operation. Our passion is simply tangible, and we want you to experience it for yourself."
    }
  ]

  const ServiceBox = ({index, name, content}) =>{
    return(
      <div className='col-span-12 md:col-span-6'>
        <h1 className='font-bold text-8xl absolute z-10 -translate-y-5 text-white text-stroke'>0{index}</h1>
        <div className="bg-[#035C87] m-8" style={{clipPath: 'polygon(100% 0, 100% 72%, 84% 100%, 0 100%, 0 0)'}}>
          <div className="bg-white p-8 w-full scale-[0.996] md:h-fit md:min-h-[340px] min-h-[320px]" style={{clipPath: 'polygon(100% 0, 100% 72%, 84% 100%, 0 100%, 0 0)'}}>
            
            <h3 className="w-fit border-2 border-solid rounded-full border-[#239CCF] mt-8 py-1 px-8 font-semibold text-[#239CCF] text-lg">{name}</h3>
            <p className="text-sm md:text-md lg:text-base py-3">{content}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='relative mb-12 mt-12'>

        {/* Background */}
        <div className="flex justify-center align-middle overflow-hidden " style={height}>
          <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full '>
            <div className='grid grid-cols-12 gap-0 -skew-x-[20deg]'>
              <div className='lg:col-span-4 xl:col-span-5 md:col-span-2 hidden md:block md:max-h-[920px] max-h-[680px] overflow-hidden mt-20 bg-green-400'>
              </div>
              <div className='lg:col-span-8 xl:col-span-7 md:col-span-10 col-span-12 bg-[#E4EEF2] md:h-[1080px] h-[720px]'>
              </div>
            </div>
          </div>
        </div>
      
        {/* Content */}
        <div className='flex justify-center align-middle overflow-hidden absolute top-0 right-0 left-0 bottom-0 h-fit' id="contentBox">
          <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full '>
            {/* 1st Section */}
            <div className='grid grid-cols-12 gap-4'>
              {/* Photo */}
              <div className='lg:col-span-4 xl:col-span-5 md:col-span-2 hidden md:block'>

              </div>
              {/* Text */}
              <div className='lg:col-span-8 xl:col-span-7 md:col-span-10 col-span-12 -skew-x-[20deg] md:px-24 md:py-12 px-2 py-12 min-h-fit'>
                <div className='skew-x-[20deg] w-full'>
                  <h1 className="text-4xl font-black pb-8">Your Integrated Technology Experts</h1>
                  <div className='text-base my-4'>
                    We are a team of software engineers, technology experts and project management specialists who are dedicated to providing you with the best technology solutions. That's why we approach each project with a unique vision to ensure it's successful integration into your systems.
                  </div>
                  <div className='text-base my-4'>
                    Having engineers with over 20 years of experience in the financial and gaming sectors of the Asian market, we have a strong understanding of how technology and data is utilized in everyday operations. We offer professional services and expertise in:
                  </div>
                </div>
              </div>
                
            </div>

            {/* Services Boxes */}

            <div className='grid grid-cols-12 gap-4'>
              {services.map((item,idx)=>{
                return(
                  <ServiceBox key={idx} name={item.name} content={item.content} index={idx+1}/>
                )
              })}
            </div>
          </div>
        </div>


    </div>
    // <div className="bg-cover xl:h-[160vh] h-fit">
    //     <div className="bg-[url('./src/assets/Home/InfoSectionBG.png')] bg-cover h-[50%] p-5 grid lg:grid-cols-2 gap-4">
    //         <div className="gap-x-3">

    //         </div>
    //         <div className="xl:pt-20 lg:pt-16 md:pt-10 pt-5 pl-8 pr-20 gap-x-3">
    //             <h1 className="text-4xl font-black pb-8">Your Integrated Technology Experts</h1>
    //             <p className="text-sm md:text-md lg:text-base py-3">
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates deleniti amet nulla numquam necessitatibus repellat cum. Aliquid reiciendis explicabo magnam provident iste quidem quibusdam, quos et at animi quas sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates deleniti amet nulla numquam necessitatibus repellat cum. Aliquid reiciendis explicabo magnam provident iste quidem quibusdam, quos et at animi quas sunt.
    //             </p>
    //             <p className="text-sm md:text-md lg:text-base py-3">
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque impedit autem totam veritatis vel molestias minus, qui vitae earum, quia corporis soluta obcaecati iusto delectus in ratione beatae aspernatur quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates deleniti amet nulla numquam necessitatibus repellat cum. Aliquid reiciendis explicabo magnam provident iste quidem quibusdam, quos et at animi quas sunt.
    //             </p>
    //         </div>
    //     </div>
    //     <div className="relative xl:-top-[200px] p-20 lg:grid lg:grid-cols-2 gap-4">
    //         <div className="bg-white gap-x-3 m-8 p-8 w-fit md:h-fit h-[500px] cutCorner">
    //           <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">01</h1>
    //           <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3 font-black text-blue-400 text-lg">Experience</h3>
    //           <p className="text-sm md:text-md lg:text-base py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //         </div>
    //         <div className="bg-white gap-x-3 m-8 p-8 w-fit md:h-fit h-[500px] cutCorner">
    //           <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">02</h1>
    //           <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3 font-black text-blue-400 text-lg">Breadth of Knowledge</h3>
    //           <p className="text-sm md:text-md lg:text-base py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //         </div>
    //         <div className="bg-white gap-x-3 m-8 p-8 w-fit md:h-fit h-[500px] cutCorner">
    //           <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">03</h1>
    //           <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3 font-black text-blue-400 text-lg">Trend Setters</h3>
    //           <p className="text-sm md:text-md lg:text-base py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //         </div>
    //         <div className="bg-white gap-x-3 m-8 p-8 w-fit md:h-fit h-[500px] cutCorner">
    //           <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">04</h1>
    //           <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3 font-black text-blue-400 text-lg">Passionate</h3>
    //           <p className="text-sm md:text-md lg:text-base py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    //         </div>
    //     </div>
    // </div>
  )}

export default InfoSection