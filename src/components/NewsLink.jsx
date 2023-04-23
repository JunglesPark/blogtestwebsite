import React from 'react'

const NewsLink = () => {
  return (
    <div className="grid grid-cols-3 gap-4 grid-rows-3 p-10 m-10">
        <div className="row-span-3">
            <h1 className="pb-5 text-blue-900 text-6xl font-bold">Information</h1>
            <a className="text-cyan-500" href="#">View more...</a>
        </div>
        
        {
            //Replace below to iterate through a number of list articles*/
        } 

        <div className="col-span-2">
            <div>
                <div className="flex">
                    <h2 className="font-bold text-gray-400">2023.04.21 </h2>
                    <h3 className="font-bold text-gray-400 mx-3 px-3 border-2 border-solid rounded-full">News Cat</h3>
                </div>
                <div>
                    <p className="font-semibold text-black">News Title Here</p>
                </div>
                <hr />
            </div>
        </div>
        <div className="col-span-2">
            <div>
                <div className="flex">
                    <h2 className="font-bold text-gray-400">2023.04.21 </h2>
                    <h3 className="font-bold text-gray-400 mx-3 px-3 border-2 border-solid rounded-full">News Cat</h3>
                </div>
                <div>
                    <p className="font-semibold text-black">News Title Here</p>
                </div>
                <hr />
            </div>
        </div>
        <div className="col-span-2">
            <div>
                <div className="flex">
                    <h2 className="font-bold text-gray-400">2023.04.21 </h2>
                    <h3 className="font-bold text-gray-400 mx-3 px-3 border-2 border-solid rounded-full">News Cat</h3>
                </div>
                <div>
                    <p className="font-semibold text-black">News Title Here</p>
                </div>
                <hr />
            </div>
        </div>

        
    </div>
  )
}

export default NewsLink