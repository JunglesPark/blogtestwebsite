import React from 'react'
import ClientCarousel from './ClientCarousel'

const ClientsAndPartners = () => {
  return (
    <div className='relative flex justify-center align-middle items-center'>
        <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full '>
            <div className="w-full grid grid-cols-12 gap-4">
                <div className="md:col-span-4 col-span-12">
                    <div className="py-5">
                        <h1 className="py-2 md:py-[5] lg:py-[8] xl:py-[12] font-bold xl:text-6xl lg:text-4xl md:text-2xl text-xl">Our Clients</h1>
                        <p className="py-2 md:py-[5]">We are proud to work with some of the leading world companies, helping them to fortify and expand upon existing services using recently developed technology.</p>
                    </div>
                    <div className="py-5">
                        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl">Client Name</h1>
                        <p>Client Center Client Center Client Center Client CenterClient CenterClient Center Client CenterClient CenterClient Center Client CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient CenterClient Center</p>
                    </div>
                </div>
                <div className="md:col-span-7 col-span-12">
                    {/* <ClientCarousel /> */}
                </div>
            </div>
        </div>
        <div className='absolute right-0 top-0 w-3/5'>
            <ClientCarousel/>
        </div>
    </div>
  )
}

export default ClientsAndPartners