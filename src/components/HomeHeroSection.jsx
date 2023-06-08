import React, {useState, useEffect} from 'react'
import { ArrowLongRightIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/outline'

import { screenSize } from '../hooks/screenSize'
import { motion,AnimatePresence } from 'framer-motion'
import {  HomepageHero02Photo01,HomepageHero02Photo02, HomepageHero03Photo01} from '../assets/index'
import HomeHeroBanner from './HomeHeroBanner'

//dayjs
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)


const HomeHeroSection = ({strapiLastNews, strapiBanners}) => {
    let screenSizeWidth = screenSize()
    const [servicesIndex, setServicesIndex] = useState(0)
    const services = [
        {
            title:"Cloud Solutions",
            description:"We proudly set up low latency secured connections to the cloud on your behalf.",
            image:HomepageHero02Photo02
        },
        {
            title:"Middleware",
            description:"We optimize large data operations by automating tasks with a scalable and fault tolerant approach.",
            image:HomepageHero02Photo02
        },
        {
            title:"Web3",
            description:"We proudly set up low latency secured connections to the cloud on your behalf.",
            image:HomepageHero02Photo02
        }
    ]

    const ServicesContainer = ({title,description,image}) =>{
        return(
        <>
            {/* MD SCREEN */}
            <div className="h-full min-h-[350px] bg-white hidden md:flex shadow-xl">
                {/* LEFT */}
                <div className='w-2/3'>
                    <div className='xl:text-5xl md:text-3xl font-bold text-[#035C87] xl:-translate-x-42 -translate-y-6 md:-translate-x-6'>
                        <h4>Our Business </h4>
                        <h4>and Consulting Services</h4>
                    </div>
                    <AnimatePresence>
                        <motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0}} transition={{ease:"easeOut", duration: 1}}>
                            <div className='px-8 w-fit'>
                                <div className='border rounded-full border-[#239CCF] px-8 text-[#239CCF] text-base'>{title}</div>
                            </div>
                            <div className='w-3/4 mt-2 px-8'>
                                <div className="xl:text-2xl md:text-xl tracking-wide font-semibold">{description}</div>
                            </div>
                            <div className='lg:w-1/2 md:w-3/4 mt-6 px-8 '>
                                <button className='flex align-middle border-none rounded-sm bg-[#239CCF] px-8 py-2 text-left text-white text-base hover:text-white w-full hover:bg-[#035C87]'>More <ArrowLongRightIcon className="ml-2 mt-1 h-4 w-4"/></button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                    <img className="w-full drop-shadow-xl xl:scale-110 lg:scale-125 md:scale-150 md:translate-y-24 lg:translate-y-20 xl:translate-y-0" src={image} />
                </div>
            </div> 
            {/* SM SCREEN */}
            <div className='h-full min-h-[200px] bg-white flex md:hidden shadow-lg'>
                <div className='w-full py-8 px-8'>
                    <div className='text-xl mb-4 font-bold text-[#035C87]'>
                        <h4>Our Business </h4>
                        <h4>and Consulting Services</h4>
                    </div>
                    <AnimatePresence>
                        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0}} transition={{ease:"easeOut", duration: 1}}>
                            <div className='w-fit'>
                                <div className='border rounded-full border-[#239CCF] px-8 text-[#239CCF] text-base'>{title}</div>
                            </div>
                            <div className='w-full mt-2'>
                                <div className="tracking-wide font-semibold">{description}</div>
                            </div>
                            <div className='mt-6 '>
                                <button className='flex align-middle border-none rounded-sm bg-[#239CCF] px-8 py-2 text-center text-white text-base hover:text-white w-full hover:bg-[#035C87]'>More <ArrowLongRightIcon className="ml-2 mt-1 h-4 w-4"/></button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </>
        )
    }

    const SelectServices = ({servicesIndex}) =>{
        return(
            <>
                <ServicesContainer title={services[servicesIndex].title} description={services[servicesIndex].description} image={services[servicesIndex].image}/>
            </>
        )
    }


    const Hero2ButtonArrow = () =>{
        let classNameVariable = "rounded-full border border-[#239CCF] hover:border-[#035C87] text-[#239CCF] hover:text-[#035C87] "
        if ( screenSizeWidth >= 768 ){
            classNameVariable += 'h-16 w-16 p-4'
        } else {
            classNameVariable += 'h-8 w-8 p-2'
        }

        const handleRightOnclick = () =>{
            let addIndex = 1
            if (servicesIndex < 2){
                let newIndex = servicesIndex + addIndex
                setServicesIndex(newIndex)
            }

        }

        const handleLeftOnClick = () =>{
            let addIndex = 1
            if (servicesIndex > 0){
                let newIndex = servicesIndex - addIndex
                setServicesIndex(newIndex)
            }
        }

        return(
            <div className='col-start-12 col-span-1'>
                <div className='flex justify-start align-middle h-full'>
                    <div className='m-auto'>
                        <button onClick={handleLeftOnClick} disabled={servicesIndex <= 0 ? true : false} className='border-none bg-transparent hover:bg-none my-2 disabled:opacity-50'><ArrowSmallLeftIcon className={classNameVariable}/></button>
                        <button onClick={handleRightOnclick} disabled={servicesIndex >= 2 ? true : false} className='border-none bg-transparent hover:bg-none my-2 disabled:opacity-50'><ArrowSmallRightIcon className={classNameVariable}/></button>
                    </div>
                </div>
            </div>
        )
    }



    const NewsBar = ({lastNews}) =>{

        const convertTimeStamp = (time) => {
            const newDate = dayjs(time).format('LL')
            return newDate
        }

        return(
            <div className='w-full bg-[#239CCF] md:h-[72px] h-fit'>
                <div className="grid grid-cols-12 gap-4 h-full">
                    <a className='col-span-12 md:col-span-7 w-full py-4 px-8 sm:px-6 lg:px-8' href="#">
                        <div className='flex items-center text-white text-sm'>
                            Latest News Release
                        </div>
                        <div className='flex items-center text-white md:text-sm  text-xs md:mt-0 mt-2'>
                            <div className='grid grid-cols-3'>
                                <div className='mr-5 md:col-span-1'>{convertTimeStamp(lastNews?.publishedAt)} </div>
                                <div className='rounded-xl bg-white text-[#239CCF] md:px-8 px-4 mr-8 md:col-span-1 col-span-2 w-fit'>{lastNews?.Categories}</div>
                                <div className='md:col-span-1 col-span-3 mt-2 md:mt-0 font-semibold md:text-md text-sm'>{lastNews?.Title}</div>
                            </div>
                        </div>
                    </a>
                    <div className='col-span-5 w-full bg-white -translate-y-8 hidden md:block' style={{clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'}}>
                        <div className="grid grid-cols-12 gap-0 h-full">
                            <div className='col-span-7 w-full flex items-center justify-center bg-white' >
                                <div className="2xl:text-3xl lg:text-xl md:text-lg font-bold text-[#239CCF]">About Sonivy</div>
                            </div>
                            <div className='col-span-5 w-full bg-[#6DC4E2]' style={{clipPath: 'polygon(25% 0%, 100% 0, 100% 100%, 0% 100%)'}}/>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

    const ScrollElement = () =>{
        return(
            <div className='bg-[#239CCF] 2xl:h-[655px] xl:h-[555px] md:h-[435px] h-[305px] w-full'>
                <div className='h-1/4 bg-white w-full'/>
                <div className='w-full text-center rotate-90 absolute md:-left-[48%] md:top-[200px] xl:-left-[49%] lg:top-[220px] 2xl:top-[260px] md:block hidden text-white text-[8px] font-bold'>SCROLL &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</div>
            </div>
        )
    }

  return (
    <div>
        <div className='relative'>
            <ScrollElement/>
            <HomeHeroBanner banners={strapiBanners}/>
        </div>
        {/* Latest News Bar */}
        <NewsBar lastNews={strapiLastNews}/>
        <div className="w-full bg-[#035C87]/10 flex justify-center py-20">
            <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs flex justify-center align-middle w-full'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='md:col-span-10 col-span-11'>
                        <SelectServices servicesIndex={servicesIndex}/>
                    </div>
                    <Hero2ButtonArrow/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeHeroSection