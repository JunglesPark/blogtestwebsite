import React from 'react'
import MainFeatured from './MainFeatured'
import SecondaryFeature from './SecondaryFeature'

const FeaturedNews = () =>{

  return(
    <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full flex justify-center items-center my-12'>
      <div className='block w-full'>
        <div className='w-full md:mb-12 mb-4'>
          <h1 className='xl:text-4xl md:text-2xl font-bold text-[#035C87]'>Featured Article</h1>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 md:mb-12'>
            <MainFeatured/>
            <SecondaryFeature/>
        </div>

        <hr/>

        <div className='block h-[500px] w-full'></div>
      </div>
    </div>
  )
}


export default FeaturedNews