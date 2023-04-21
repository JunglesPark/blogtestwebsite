import React from 'react'
import ClientCarousel from './ClientCarousel'

const ClientsAndPartners = () => {
  return (
    <div>
        <div className="w-full h-[90vh] grid grid-cols-12">
            <div className="col-span-5">
                <div className="px-16 py-5">
                    <h1 className="py-2 md:py-[5] lg:py-[8] xl:py-[12] font-bold xl:text-6xl lg:text-4xl md:text-2xl text-xl">Our Clients</h1>
                    <p className="py-2 md:py-[5]">We are proud to work with some of the leading world companies, helping them to fortify and expand upon existing services using recently developed technology.</p>
                </div>
                <div className="px-16 py-5">
                    <h1 className="px-5 xl:text-4xl lg:text-3xl md:text-2xl text-xl">Client Name</h1>
                    <p className="px-5">Client Center</p>
                </div>
            </div>
            <div className="col-span-7">
                <ClientCarousel />
            </div>
        </div>
    </div>
  )
}

export default ClientsAndPartners