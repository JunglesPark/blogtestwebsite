import React, {useEffect, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Partnerships = ({partnersImgs}) => {
  const [images, setImages] = useState([])
  const [activePage, setActivePage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [ref,inView, entry] = useInView({
    threshold:0.2,
    triggerOnce:false
  })

  const variants = {
    visible:{opacity:1},
    hidden:{opacity:0}
  }
  

  // Split Images
  useEffect(()=>{
    const chunkSize = 4
    const imageGroup = []
    for (let i = 0 ; i < partnersImgs.data.length ; i += chunkSize){
      const chunk = partnersImgs.data.slice(i, i + chunkSize)
      imageGroup.push(chunk)
    }
    setImages(imageGroup)
    setIsLoading(false)
  },[partnersImgs])

  // Handle Slide Page Button CSS
  const buttonCss = (itemNum) =>{
    let initalCss = "full-rounded w-[10px] h-[10px] bg-white mx-1 border hover:bg-white "
    if(itemNum === activePage){
        initalCss += "border border-[#239CFF]"
    } else {
        initalCss += "border-white"
    }
    return initalCss
  }

  const handleButtonClick = (itemNum) =>{
    setActivePage(itemNum)
  }

  const PartnersImage = ({item,idx}) =>{
    return (
      <motion.a initial={{opacity:0, skewX:-25, x:-25}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-25}} transition={{duration:0.3 + idx*0.3}} href={item.linkTo} target="_blank" className='w-full bg-white/[.35] md:col-span-2 col-span-8 md:h-[108px] -skew-x-[25deg] flex align-middle justify-center' key={item.image.hash + idx}>                            
        <img src={item.image.url} className="m-auto md:p-8 p-6 w-fit skew-x-[25deg]" alt=".." />
      </motion.a>
    )
  }

  return (
    <>
      {!isLoading && 
        <div className="bg-[#DEEAF0] relative w-full py-20 h-fit flex justify-center">
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full mx-auto mb-12 absolute top-0 lg:-translate-y-8 md:-translate-y-6 -translate-y-5">
              <div className="text-[#035C87] w-full text-center lg:text-6xl md:text-5xl text-4xl font-bold">Our Partners</div>
            </div>

            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full mx-auto mb-12 md:px-12">
              <motion.div animate={inView ? "visible" : "hidden"} variants={variants} transition={{duration:0.5, ease: "easeInOut"}} ref={ref} className='grid grid-cols-8 gap-12 px-8 md:px-0'>
                {/* Images */}
                <AnimatePresence>
                  {images[activePage].map((item,idx)=>{
                    return(
                      <PartnersImage item={item} idx={idx} key={idx}/>
                    )
                  })}
                </AnimatePresence>
              </motion.div>
              {/* Page Button */}
              {images.length != 1 && 
                <div className='flex align-middle justify-center mt-12'>
                  {images?.map((item,idx)=>{
                      return(
                          <button key={idx} className={buttonCss(idx)} onClick={()=>handleButtonClick(idx)}></button>
                      )
                  })}
                </div>
              }
            </div>
        </div>
      }
    </>
  )
}

export default Partnerships