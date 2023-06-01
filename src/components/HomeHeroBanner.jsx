import React, {useState, useEffect} from 'react'


const HomeHeroBanner = () =>{
  let bgImg = ""
  const banners = [
    { title:'Your Reliable Cloud Systems Partner', imageSrc:"./src/assets/Home/hero1_banner_1.png"},
    { title:'Stay competitive with the most up-to-date information', imageSrc:'./src/assets/Home2/hero1_banner_1.png'},
    { title:'Your Reliable Cloud Systems Partner', imageSrc:'./src/assets/Home/hero1_banner_1.png'},
  ]

  const [activeBanner, setActiveBanner] = useState(0)

  const handleShowBanner = () =>{
    let max = banners.length
    let newIndex = activeBanner+1
    if(newIndex >= max){
        newIndex = 0
    }
    setActiveBanner(newIndex)
  }

  useEffect(()=>{
      const intervalId = setInterval(handleShowBanner,10000)
      return() =>{
        clearInterval(intervalId)
      }
  },[activeBanner])

  const handleButtonClick = (itemNum) =>{
    setActiveBanner(itemNum)
  }

  const bannerContainerCss = () =>{
      let initalCss = "w-full mx-auto flex justify-center 2xl:h-[655px] xl:h-[555px] md:h-[435px] h-[305px] bg-cover bg-no-repeat absolute bottom-0 md:bg-center bg-right "
      bgImg = "url(" + banners[activeBanner].imageSrc + ")"
      // console.log(banners[activeBanner].imageSrc)
      // let bgImg = "bg-[url('./src/assets/Home2/hero1_banner_1.png')]"
      // initalCss += bgImg
      // console.log(initalCss)
      return initalCss
  }

  const buttonCss = (itemNum) =>{
      let initalCss = "full-rounded w-[10px] h-[10px] bg-white mx-1 border hover:bg-white "
      if(itemNum === activeBanner){
          initalCss += "border border-[#239CFF]"
      } else {
          initalCss += "border-white"
      }
      return initalCss
  }

  return(
    <div className='relative'>
        <div className={bannerContainerCss()} style={{clipPath: 'polygon(30% 0%, 100% 0, 100% 100%, 0% 100%)', backgroundImage: bgImg }}>
            <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs flex items-center align-middle w-full 2xl:translate-x-44 xl:translate-x-52 lg:translate-x-32 md:translate-x-20 translate-x-12'>
                <h1 className='text-white font-semibold lg:text-5xl md:text-3xl text-2xl lg:w-[480px] md:w-[320px] w-[240px] lg:leading-[52px] md:leading-8 leading-7'>{banners[activeBanner].title}</h1>
            </div>
        </div>
        <div className='absolute bottom-5 w-full left-0 right-0'>
            <div className='flex align-middle justify-center'>
              {banners.map((item,idx)=>{
                  return(
                      <button key={idx} className={buttonCss(idx)} onClick={()=>handleButtonClick(idx)}></button>
                  )
              })}
            </div>
        </div>
    </div>
  )
}


export default HomeHeroBanner