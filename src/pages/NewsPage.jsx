import React from 'react'
import FeaturedNews from '../components/FeatureNews/FeaturedNews'
import AllArticle from '../components/FeatureNews/AllArticle'

const NewsPage = () =>{
    
  return(
    <div className='flex justify-center'>
      <div className='block'>
        <FeaturedNews/>
        <AllArticle/>
      </div>
    </div>
  )
}

export default NewsPage