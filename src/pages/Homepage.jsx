import React, {useState, useEffect} from 'react'
import { HomeHeroSection, InfoSection, NewsLink, Partnerships } from "../components";
import LoadingLogo from '../components/LoadingLogo';
import { getHomeNews,getHomeBanners } from '../API/api-home';
import { getAllPartners } from '../API/api-partners';


const Homepage = () => {
  const [news, setNews] = useState()
  const [strapiBanners, setStrapiBanners] = useState()
  const [partnersImgs, setPartnersImgs] = useState()
  const [isLoading , setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [animationEnd, setAnimationEnd] = useState(false)
  const [isVisited, setIsVisited] = useState (sessionStorage.getItem('isVisited'))
  const [locale, setLocale] = useState(sessionStorage.getItem('language'))
  

  useEffect(()=>{
    if(sessionStorage.getItem('isVisited')){
      setIsVisited(true)
      setAnimationEnd(true)
    } else {
      sessionStorage.setItem('isVisited', false)
    }
    const fetchData = async () =>{
      const data = await Promise.all([
        getStrapiHomeBanners(),
        getStrapiHomeNews(),
        getStrapiHomePartners()
      ])
      if(data[0].error){
        console.log(data[0].error)
        setIsError(true)
      } else {
        setStrapiBanners(data[0])
      }
      if(data[1].error){
        console.log(data[1].error)
        setIsError(true)
      } else {
        setNews(data[1])
      }
      if(data[2].error){
        console.log(data[2].error)
        setIsError(true)
      } else {
        setPartnersImgs(data[2])
      }

      if(isVisited){
        setIsLoading(false)
      }

    }
    fetchData()

  },[])


  const animationEndEvent = () =>{
    setAnimationEnd(true)
    sessionStorage.setItem('isVisited',true)
    setIsLoading(false)

  }

  const getStrapiHomeNews = async() =>{
    let params = {
      populate : "*",
      locale : locale,
      "sort[0]":"publishedAt:desc",
      "pagination[pageSize]": 5,
      "pagination[page]" : 1

    }
    return getHomeNews(params).then((data)=>{
      if(data.error){
        console.log(data.error)
        return data
      } else {
        // setNews(data.data)
        // console.log(data.data)
        return data.data
      }
    })
  }

  const getStrapiHomeBanners = async() =>{
    let params = {
      populate : "*",
      locale:  locale,

    }
    return getHomeBanners(params).then((data)=>{
      if(data.error){
        console.log(data.error)
        return data
      } else {
        // setStrapiBanners(data.data)
        return data.data
      }
    })

  }

  const getStrapiHomePartners = async () =>{
    let params = {
      populate : "*"
    }

    return getAllPartners(params).then((data)=>{
      if(data.error){
        return data
      } else {
        return data
      }
    })
  }


  return (
    <>
    {!isLoading && !isError && animationEnd &&
      <div> 
          <HomeHeroSection strapiLastNews={news[0]} strapiBanners={strapiBanners}/>
          <InfoSection />
          <NewsLink  Latest5news={news}/>
          <Partnerships partnersImgs={partnersImgs}/>
      </div>
    }
    {!isLoading && isError &&
      <>
        <div className='h-screen bg-white flex justify-center items-center'>
          <LoadingLogo/>
        </div>
      </>
    }
    {isLoading && !animationEnd && !isVisited &&
      <>
        <div className='h-screen bg-white flex justify-center items-center'>
          <LoadingLogo animationEndEvent={animationEndEvent}/>
        </div>
      </>
    }
    </>
  )
}

export default Homepage