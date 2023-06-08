import React, {useState , useEffect} from 'react'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { motion , AnimatePresence } from 'framer-motion'
import { useInView } from "react-intersection-observer";

//dayjs
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const NewsLink = ({Latest5news}) => {

    const [newsList, setNewsList] = useState(Latest5news)

    const [ref,inView, entry] = useInView({
        threshold:0.2,
        triggerOnce:true
    })

    const variants = {
        visible:{opacity:1},
        hidden:{opacity:0}
    }

    const convertTimeStamp = (time) => {
        const newDate = dayjs(time).format('LL')
        return newDate
    }

    const NewsRow = ({item, idx}) =>{
        return(
            <motion.div className='row-span-1' initial={{opacity:0, x:120}} animate={{opacity:1, x:0}} transition={{duration:0.8 + idx*0.3}}>
                <a href={item.id}>
                    <div className="flex mb-2">
                        <h2 className="text-xs md:text-lg font-light text-[#8E919F]">{convertTimeStamp(item.publishedAt)}</h2>
                        <h3 className="text-xs md:text-base font-light text-[#8E919F] mx-5 px-8 border-2 border-solid rounded-full">{item.Categories}</h3>
                    </div>
                    <div className='mb-4'>
                        <p className="text-lg font-semibold text-black">{item.Title}</p>
                    </div>
                </a>
                <hr />
            </motion.div>
        )
    }
    
    return (
        <div className='flex justify-center md:mb-12 mb-20'>
            <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full'>
                <div className="grid lg:grid-cols-12 gap-4 grid-cols-12 md:p-10 md:m-10 p-5">
                    <div className="md:col-span-4 col-span-12">
                        <h1 className="pb-5 text-[#035C87] xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-bold">Latest News</h1>
                        <a className='flex align-middle ' href="#">
                            <div className="text-[#239CCF] mt-1">View more</div>
                            <ArrowSmallRightIcon className='h-8 w-8 p-2 border border-[#239CCF] rounded-full ml-3 text-[#239CCF]'/>
                        </a>
                    </div>
                    
                    {
                        //Latest 5 news
                    } 

                    <div className='md:col-span-8 col-span-12 mt-4'>
                        <motion.div className='grid grid-rows-5 gap-6' animate={inView ? "visible" : "hidden"} variants={variants} transition={{duration:0.5, ease:"easeInOut"}} ref={ref}>
                            <AnimatePresence>
                                {newsList.map((item,idx)=>{
                                    return(
                                        <NewsRow item={item} key={idx} idx={idx}/>
                                    )
                                })}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default NewsLink