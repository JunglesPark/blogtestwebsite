import React, {useState , useEffect} from 'react'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

//dayjs
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const NewsLink = ({Latest5news}) => {
    const news = [
        {
            date: "Apr 21, 2023",
            categories: "Update",
            title : "Title Heading",
            id: "/"
        },
        {
            date: "Apr 21, 2023",
            categories: "Update",
            title : "Title Heading 2",
            id: "#"
        },
        {
            date: "Apr 21, 2023",
            categories: "Update",
            title : "Title Heading 3",
            id: "#"
        },
        {
            date: "Apr 21, 2023",
            categories: "Update",
            title : "Title Heading 4",
            id: "#"
        },
        {
            date: "Apr 21, 2023",
            categories: "Update",
            title : "Title Heading 5",
            id: "#"
        },
    ]  
    const [newsList, setNewsList] = useState(Latest5news)


    const convertTimeStamp = (time) => {
        const newDate = dayjs(time).format('LL')
        return newDate
    }
    
    return (
        <div className='flex justify-center md:mb-12 mb-20'>
            <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-4xl sm:max-w-sm max-w-xs w-full'>
                <div className="grid lg:grid-cols-12 gap-4 grid-cols-12 md:p-10 md:m-10 p-5">
                    <div className="md:col-span-4 col-span-12">
                        <h1 className="pb-5 text-[#035C87] xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-bold">Information</h1>
                        <a className='flex align-middle ' href="#">
                            <div className="text-[#239CCF] mt-1">View more</div>
                            <ArrowSmallRightIcon className='h-8 w-8 p-2 border border-[#239CCF] rounded-full ml-3 text-[#239CCF]'/>
                        </a>
                    </div>
                    
                    {
                        //Latest 5 news
                    } 

                    <div className='md:col-span-8 col-span-12 mt-4'>
                        <div className='grid grid-rows-5 gap-6'>
                            {newsList.map((item,idx)=>{
                                return(
                                    <div className='row-span-1' key={idx}>
                                        <a href={item.id}>
                                            <div className="flex mb-2">
                                                <h2 className="text-lg font-light text-[#8E919F]">{convertTimeStamp(item.publishedAt)}</h2>
                                                <h3 className="text-base font-light text-[#8E919F] mx-5 px-8 border-2 border-solid rounded-full">{item.Categories}</h3>
                                            </div>
                                            <div className='mb-4'>
                                                <p className="text-lg font-semibold text-black">{item.Title}</p>
                                            </div>
                                        </a>
                                        <hr />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default NewsLink