import React from 'react'

const SkewedContainer = () => {
  return (
    <div className="flex w-screen h-[100vh] relative bg-blue-200">
        <div className="absolute -top-10 left-20 text-4xl w-1/3">
            <h1>Our expertise with Cloud services lie in the following:</h1>
        </div>
        
        <div className="align-self-center bg-cyan-100 h-[80%] w-1/2 skew-x-[15deg] grid grid-rows-4 grid-cols-2 overflow-hidden absolute right-40 my-20">
            <div className="overflow-hidden">
                <img className=" h-full w-full object-cover" src="./src/assets/Cloud/Hero3_photo_1.png" />
            </div>
            <div className="bg-blue-500">
                <div className="-skew-x-[15deg]">
                    <h2 className="pl-4 m-3 text-3xl">DevOps</h2>
                    <p className="pl-4 pr-6 m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className="overflow-hidden">
                <img className="h-full w-full object-fill" src="./src/assets/Cloud/Hero3_photo_2.png" />
            </div>
            <div className="bg-teal-500">
                <div className="-skew-x-[15deg]">
                    <h2 className="pl-4 m-3 text-3xl">DevOps</h2>
                    <p className="pl-4 pr-6 m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className="overflow-hidden">
                <img className="h-full w-full object-fill" src="./src/assets/Cloud/Hero3_photo_3.png" />
            </div>
            <div className="bg-blue-500">
                <div className="-skew-x-[15deg]">
                    <h2 className="pl-4 m-3 text-3xl">DevOps</h2>
                    <p className="pl-4 pr-6 m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className="overflow-hidden">
                <img className="h-full w-full object-fill" src="./src/assets/Cloud/Hero3_photo_4.png" />
            </div>
            <div className="bg-teal-500">
                <div className="-skew-x-[15deg]">
                    <h2 className="pl-4 m-3 text-3xl">DevOps</h2>
                    <p className="pl-4 pr-6 m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
        <div className="absolute left-32 bottom-32 w-1/4">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

    </div>
  )
}

export default SkewedContainer