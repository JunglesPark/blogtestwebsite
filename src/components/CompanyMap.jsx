import React from "react"

const CompanyMap = () => {

  const GoogleMap = () =>{
    return(
      <div className="w-full list-none transition-none overflow-hidden ">
        <div id="google-maps-display" className="h-full w-full">
          <iframe className="w-full md:h-[480px] h-72" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=CEO+Tower,+永康街長沙灣香港&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
        </div>
      </div>
    )
  }

  const InformationsDetail = () =>{
    const informations = [
      {
          name: "Address",
          description: ["Room 1808, 18/F, CEO Tower, 77 Wing Hong Street, Cheung Sha Wan, Kowloon, Hong Kong"]
      },
      {
          name: "TEL",
          description: ["+852 2194 9122", "10:00AM to 07:00PM (Monday to Friday)"]
      },
      {
          name: "Email",
          description: ["info@sonivy.com"]
      },
  
    ]
    return(
      <>
        {informations.map((item,idx)=>{
          return(
              <div className="grid grid-cols-12 gap-4 my-8 first:mt-0" key={idx}>

                <div className="md:col-span-4 col-span-12">
                  <div className="w-full flex" key={idx}>
                    <div className="font-semibold text-base md:ml-5 text-[#035C87]">{item.name}</div>
                  </div>
                </div>

                <div className="md:col-span-8 col-span-12">
                  <div key={idx}>
                    {item.description.map((content,idx)=>{
                      return(
                        <div className="text-base block" key={idx}>{content}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
          )
        })}
      </>
    )
  }

  return(
    <div className="relative md:-translate-y-24 -translate-y-24 -z-10">
      {/* Background */}
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="md:col-start-9 md:col-span-3 col-span-6">
          <div className="bg-[#F3F7F9] h-[720px] skew-x-[20deg]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex overflow-hidden justify-center absolute top-0 bottom-0 right-0 left-0 md:mt-48 mt-32 h-fit">
        <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full flex align-middle justify-center mx-auto mb-20'>
          <div className='grid grid-cols-12 gap-4 w-full'>
              <div className='md:col-span-7 col-span-12'>
                <GoogleMap/>
              </div>
              <div className="md:col-span-5 col-span-12">
                <InformationsDetail/>
              </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export {CompanyMap}