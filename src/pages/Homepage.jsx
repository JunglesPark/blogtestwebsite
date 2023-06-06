import React, {useState, useEffect} from 'react'
import { HomeHeroSection, InfoSection, NewsLink, Partnerships } from "../components";
import { getHomeNews,getHomeBanners } from '../API/api-home';


const Homepage = () => {
  const [news, setNews] = useState()
  const [strapiBanners, setStrapiBanners] = useState()
  const [isLoading , setIsLoading] = useState(true)



  useEffect(()=>{
    const fetchData = async () =>{
      const data = await Promise.all([
        getStrapiHomeBanners(),
        getStrapiHomeNews()
      ])
      console.log(data)
      setNews(data[1])
      setStrapiBanners(data[0])
      setIsLoading(false)

    }
    fetchData()

  },[])

    const getStrapiHomeNews = () =>{
    let params = {
      populate : "*",
      locale : "en",
      "sort[0]":"publishedAt:desc",
      "pagination[pageSize]": 5,
      "pagination[page]" : 1

    }
    return getHomeNews(params).then((data)=>{
      if(data.error){
        console.log(data.error)
      } else {
        // setNews(data.data)
        console.log(data.data)
        return data.data
      }
    })
  }

  const getStrapiHomeBanners = () =>{
    let params = {
      populate : "*",
      locale:  "en",

    }
    return getHomeBanners(params).then((data)=>{
      if(data.error){
        console.log(data.error)
      } else {
        // setStrapiBanners(data.data)
        console.log(data.data)
        return data.data
      }
    })

  }


  return (
    <>
    {!isLoading && (news != undefined) &&
      <div> 
          <HomeHeroSection strapiLastNews={news[0]} strapiBanners={strapiBanners}/>
          <InfoSection />
          <NewsLink  Latest5news={news}/>
          <Partnerships />
      </div>
    }
    {isLoading &&
      <>
        <div className='h-screen bg-white'></div>
      </>
    }
    </>
  )
}

export default Homepage