import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { getAllNews } from '../API/api-news'
import { Interweave } from 'interweave';
import NewsBreadcrumb from '../components/NewsDetail/NewsBreadcrumb';

//dayjs
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const NewsDetailPage = () =>{
  const language = (sessionStorage.getItem("language"))
  const [isLoading , setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])
  let { uuid } = useParams()


  const convertTimeStamp = (time) => {
    const newDate = dayjs(time).format('LL')
    return newDate
  }


  useEffect(()=>{
    let params = {
      populate : "*",
      locale:  language,
      'sort[0]': 'publishedAt:desc',
      'pagination[pageSize]':10,
      'pagination[page]':1,
      'filters[UUID][$eq]':uuid
    }

    getAllNews(params).then((data)=>{
      if(data.error){
        console.log(data.error)
        setIsError(true)
        setIsLoading(false)
      } else {
        console.log(data.data)
        setData(data.data[0])
        var doc = new DOMParser().parseFromString(data?.data[0]?.content, "text/xml")

        setIsError(false)
        setIsLoading(false)
      }
    })
  },[])

  useEffect(()=>{
    console.log(data)
  },[data])

  return(
    <div className='flex justify-center py-12'>
      <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full flex justify-start items-center'>
        <div className='block w-full'>
          <NewsBreadcrumb title={data.Title}/>
          <div className='flex justify-start items-center mb-6'>
            <div className='text-gray-400 mr-2 text-sm'>{convertTimeStamp(data?.publishedAt)}</div>
            <div className='bg-[#239CFF] mx-2 h-1 w-1 rounded-full'></div>
            <div className='text-gray-400 ml-2 text-sm'>{data?.Categories}</div>
          </div>
          <div className='md:text-4xl text-2xl font-bold mb-6'>{data?.Title}</div>
          {data?.thumbnail &&
            <div className='w-full overflow-hidden mb-12'>
              <img className='object-cover object-center w-full md:h-[480px]' src={data?.thumbnail?.url}></img>
            </div>
          }
          {data?.content &&
            <div className='w-full md:mb-12 mb-4'>
              <Interweave content={data?.content}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default NewsDetailPage