import React from 'react'
//dayjs
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const SecondaryFeature = ({news}) =>{

  const convertTimeStamp = (time) => {
    const newDate = dayjs(time).format('LL')
    return newDate
  }


  const SecondaryNewsBar = ({item}) =>{
    return(
      <div className='row-span-1 border-b last:border-none'>
        <a href={'/news/' + item?.UUID}>
          <div className="grid md:grid-cols-5 grid-cols-6 gap-8 md:pb-8 py-2">
            <div className='md:col-span-2 col-span-3 md:order-1 order-2'>
              <div className='w-full bg-black lg:h-[140px] md:h-[100px] h-[90px]'>
              </div>
            </div>
            <div className='md:col-span-3 col-span-3 md:order-2 order-1'>
              <div className='text-gray-400 md:text-sm text-xs'>
                {convertTimeStamp(item?.publishedAt)}
              </div>
              <div className='border border-[#239CFF] rounded-full px-6 w-fit text-xs my-2 flex justify-center text-[#239CFF]'>
                {item.Categories}
              </div>
              <div className='md:text-lg text-sm font-semibold md:my-4 my-2 overflow-hidden'>
                {item?.Title}
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }

  return(
    <div className='col-span-1'>
      <div className='grid grid-row-3 gap-4'>
        {news.map((item,idx)=>{
          return(
            <SecondaryNewsBar item={item} key={idx}/>
          )
        })}
      </div>
    </div>
  )

}

export default SecondaryFeature