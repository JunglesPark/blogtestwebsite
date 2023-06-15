import React, { useEffect, useState } from 'react'
import MainFeatured from './MainFeatured'
import SecondaryFeature from './SecondaryFeature'

import { getFeatureNews } from '../../API/api-news'

const FeaturedNews = () =>{
  const language = (sessionStorage.getItem("language"))
  const [featureNews, setFeatureNews] = useState([])
  const [smallFeatureNews, setSmallFeatureNews] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    let params = {
      populate : "*",
      locale:  language,
      'sort[0]': 'publishedAt:desc',
      'pagination[pageSize]':4,
      'pagination[page]':1,
      'filters[Feature][$eq]':true
    }

    getFeatureNews(params).then((data)=>{
      if(data.error){
        console.log(data.error)
        setIsError(true)
        setIsLoading(false)
      } else {
        // setNews(data.data)
        // console.log(data)
        setIsError(false)
        let news  = data.data.slice(0,1)
        let smallnews = data.data.slice(1)
        setFeatureNews(news)
        setSmallFeatureNews(smallnews)
        setIsLoading(false)
      }
    })
  },[])

  return(
    <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full flex justify-center items-center my-12'>
      {!isError && !isLoading &&
        <div className='block w-full'>
          {featureNews?.length > 0 &&
            <>
              <div className='w-full md:mb-12 mb-4'>
                <h1 className='xl:text-4xl md:text-2xl font-bold text-[#035C87]'>Featured Articles</h1>
              </div>
              <div className='grid md:grid-cols-2 grid-cols-1 md:mb-12'>
                  <MainFeatured news={featureNews}/>
                  <SecondaryFeature news={smallFeatureNews}/>
              </div>
              <hr/>
            </>
          }         
        </div>
      }
    </div>
  )
}


export default FeaturedNews