import React, {useEffect, useState} from 'react'

const NewsBreadcrumb = ({title}) =>{
  return(
    <div className='flex items-center md:mb-6 mb-2'>
      <a className='text-gray-600 mr-2' href="/news">News</a>
      <p className='text-gray-600 mx-2'> &gt; </p>
      <p className='text-[#239CFF] mx-2'>{title}</p>
    </div>
  )
}

export default NewsBreadcrumb