import React,  { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { getAllNews } from '../../API/api-news'
//dayjs
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
//pagination
import ReactPaginate from 'react-paginate';


const AllArticle = () =>{
  const language = (sessionStorage.getItem("language"))
  const [activePage, setActivePage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [itemsCount, setItemsCount] = useState(0)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [allNews, setAllNews] = useState([])

  useEffect(()=>{
    getPageNews(1)
  },[])

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

  const ArticleContainer = ({item}) =>{
    return(
      <div className='col-span-1 my-4 md:border-none border-b pb-12'>
        <a href={'/news/' + item?.UUID}>
          <div className='w-full bg-black md:h-[240px] h-[180px]'>
            {item?.thumbnail && 
              <img src={item?.thumbnail.url} className='w-full object-center object-cover h-full'/>
            }
          </div>
          <div className='flex justify-between items-center'>
            <div className='text-gray-400 text-sm my-4'>
              {convertTimeStamp(item?.publishedAt)}
            </div>
            <div className='text-[#239CFF] text-xs my-4 border-[#239CFF] px-6 py-1 border rounded-full'>
              {item?.Categories}
            </div>
          </div>
          <div className='text-lg font-semibold my-4'>
            {item?.Title}
          </div>
          <div className='text-sm text-gray-600'>
            {trimLongContent(item?.description)}
          </div>
        </a>
      </div>
    )
  }

  const handlePageChange = (event) => {
    getPageNews(event.selected+1)
  }

  const getPageNews = (page) =>{
    setIsLoading(true)
    setIsError(false)
    let params = {
      populate : "*",
      locale:  language,
      'sort[0]': 'publishedAt:desc',
      'pagination[pageSize]':9,
      'pagination[page]':page,
    }

    getAllNews(params).then((data)=>{
      if(data.error){
        console.log(data.error)
        setIsError(true)
        setIsLoading(false)
      } else {
        // console.log(data)
        setAllNews(data.data)
        setActivePage(data?.meta?.pagination?.page)
        setTotalPage(data?.meta?.pagination?.pageCount)
        setItemsCount(data?.meta?.pagination?.pageSize)
        setIsError(false)
        setIsLoading(false)
      }
    })
  }

  return(
    <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full flex justify-center items-center mt-12 mb-20'>
      <div className='block w-full'>
        <div className='w-full md:mb-12 mb-4'>
          <h1 className='xl:text-4xl md:text-2xl font-bold text-[#035C87]'>All Articles</h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:mb-12 gap-8'>
          {!isLoading && !isError &&
            <> 
              {allNews.length > 0 ?
                <>
                  {allNews.map((item,idx)=>{
                    return(
                      <ArticleContainer item={item} key={idx}/>
                    )
                  })}

                </> :
                <>
                  <div className='md:col-span-3 col-span-1'>
                    <div className='flex justify-center items-center text-xl font-semibold'>
                      No News have posted yet
                    </div>
                  </div>
                </>
              }
            </>
          }
          {isError && !isLoading &&
            <div className='md:col-span-3 col-span-1'>
              <div className='flex justify-center items-center text-xl font-semibold'>
                Error
              </div>
            </div>
          }
        </div>

        {allNews.length > 0 &&
          <ReactPaginate 
            className='flex justify-end' 
            pageClassName="border border-[#239CFF] mx-2 rounded-lg hover:text-[#239CFF] flex justify-center items-center p-4 h-14 w-12"
            previousClassName="border border-[#239CFF] mx-2 rounded-lg hover:text-[#239CFF] flex justify-center items-center p-4 h-14 w-12"
            nextClassName='border border-[#239CFF] mx-2 rounded-lg hover:text-[#239CFF] flex justify-center items-center p-4 h-14 w-12'
            disabledClassName="text-gray-300 "
            activeClassName="text-[#239CFF]" 
            breakLabel="..."
            previousLabel={<ChevronLeftIcon className='h-4 w-4'/>}
            nextLabel={<ChevronRightIcon className='h-4 w-4'/>}
            pageCount={totalPage} pageRangeDisplayed={2} marginPagesDisplayed={2} onPageChange={handlePageChange}/>
        }
      </div>
    </div>
  )
}

export default AllArticle