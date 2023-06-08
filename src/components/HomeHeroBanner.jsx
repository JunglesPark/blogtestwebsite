import React, {useState, useEffect} from 'react'

const HomeHeroBanner = ({banners}) =>{
  let bgImg = ""
  const [activeBanner, setActiveBanner] = useState(0)
  const [strapiBanners, setStrapiBanners] = useState()

  const handleShowBanner = () =>{
    if(strapiBanners){
      let max = strapiBanners.length
      let newIndex = activeBanner+1
      if(newIndex >= max){
          newIndex = 0
      }
      setActiveBanner(newIndex)
    }
  }

  useEffect(()=>{
      const intervalId = setInterval(handleShowBanner,10000)
      return() =>{
        clearInterval(intervalId)
      }
  },[banners,activeBanner])

  const handleButtonClick = (itemNum) =>{
    setActiveBanner(itemNum)
  }

  const bannerContainerCss = () =>{
      let initalCss = "w-full mx-auto flex justify-center 2xl:h-[655px] xl:h-[555px] md:h-[435px] h-[305px] bg-cover bg-no-repeat absolute bottom-0 md:bg-center bg-right "
      if(banners != undefined){
        bgImg = "url(" + banners[activeBanner]?.BannerImage.url + ")"
      }
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
        { banners?.length !=0 &&
          <>
          <div className={bannerContainerCss()} style={{clipPath: 'polygon(30% 0%, 100% 0, 100% 100%, 0% 100%)', backgroundImage: bgImg }}>
              <div className=' flex items-center align-middle w-fit 2xl:-translate-x-44 xl:-translate-x-36'>
                  <h1 className='text-white font-semibold lg:text-5xl md:text-3xl text-2xl lg:w-[480px] md:w-[320px] w-[240px] lg:leading-[52px] md:leading-8 leading-7'>{banners[activeBanner]?.Title}</h1>
              </div>
          </div>
          <div className='absolute bottom-5 w-full left-0 right-0'>
              <div className='flex align-middle justify-center'>
                {banners?.map((item,idx)=>{
                    return(
                        <button key={idx} className={buttonCss(idx)} onClick={()=>handleButtonClick(idx)}></button>
                    )
                })}
              </div>
          </div>
          </>
        }
    </div>
  )
}


export default HomeHeroBanner