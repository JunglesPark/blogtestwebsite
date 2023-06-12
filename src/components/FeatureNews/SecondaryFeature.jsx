import React from 'react'

const SecondaryFeature = () =>{
  const SecondaryNewsBar = () =>{
    return(
      <div className='row-span-1 border-b last:border-none'>
        <div className="grid md:grid-cols-5 grid-cols-6 gap-8 md:pb-8 py-2">
          <div className='md:col-span-2 col-span-3 md:order-1 order-2'>
            <div className='w-full bg-black lg:h-[140px] md:h-[100px] h-[90px]'>
            </div>
          </div>
          <div className='md:col-span-3 col-span-3 md:order-2 order-1'>
            <div className='text-gray-400 md:text-sm text-xs'>
              Januray 20, 2024
            </div>
            <div className='md:text-lg text-sm font-semibold md:my-4 my-2 overflow-hidden'>
              Title Title TitleTitle Title Title Title Title TitleTitleTitle TitleTitleTitleTitle Title Title TitleTitle
            </div>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className='col-span-1'>
      <div className='grid grid-row-3 gap-4'>
        <SecondaryNewsBar/>
        <SecondaryNewsBar/>
        <SecondaryNewsBar/>
      </div>
    </div>
  )

}

export default SecondaryFeature