import React from 'react'
//dayjs
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)


const MainFeatured = ({news}) =>{


  const convertTimeStamp = (time) => {
    const newDate = dayjs(time).format('LL')
    return newDate
  }

  const trimLongContent = (content) =>{
    if (content?.length > 240) {
      return content.substr(0,240) + "..."
    }
    return content
  }

  return(
    <div className='col-span-1 md:pr-8 md:mb-0 mb-8'>
        <a href={'/news/' + news[0]?.UUID} className='cursor-pointer'>
        <div className='w-full md:h-[360px] h-[240px] bg-black'>
          {news[0]?.thumbnail?.url &&      
              <img src={news[0]?.thumbnail?.url} className='w-full h-full object-cover object-center'/>
          }
        </div>
        <div className='justify-between items-center flex'>
          <div className='text-gray-400 text-sm my-4'>
            {convertTimeStamp(news[0]?.publishedAt)}
          </div>
          <div className='border border-[#239CFF] rounded-full px-6 w-fit h-fit text-xs my-2 flex justify-center text-[#239CFF]'>
            {news[0]?.Categories}
          </div>
        </div>
        <div className='text-lg font-semibold my-4 flex'>{news[0]?.Title}</div>
        <div className='text-sm text-gray-600'>
          {trimLongContent(news[0]?.description)}
        </div>
      </a>
    </div>
  )
}

export default MainFeatured