import React from 'react'

const SkewedContainer = () => {
  return (
    <div className="my-10 flex w-screen h-[120vh] relative bg-[#2D9FD9] bg-opacity-25">
        <div className="mx-10 absolute lg:-top-10 md:left-20 xl:text-4xl lg:text-3xl text-xl lg:w-1/3 md:w-1/2 font-black tracking-wide">
            <h1 className="text-[#035C87]">Our expertise with Cloud services lie in the following:</h1>
        </div>
        
        <div className=" bg-cyan-100 h-[80%] lg:w-[800px] lg:skew-x-[15deg] grid grid-rows-4 grid-cols-2 overflow-hidden absolute lg:right-40 my-20">
            <div className="flex overflow-hidden">
                <img className="lg:skew-x-[-15deg] w-full" src="../src/assets/Cloud/Hero3_photo_1.png" />
            </div>
            <div className="bg-[#035C87]">
                
                <div className="lg:-skew-x-[15deg]">
                    <div className='flex lg:translate-x-[-20%] translate-y-[-10%] items-stretch'>
                        <h1 className='font-bold text-8xl text-white text-stroke tracking-widest lg:flex hidden'>01</h1>
                        <h2 className="text-white pl-4 m-1 text-2xl self-end">DevOps</h2>
                    </div>
                    <p className="text-white pl-4 pr-6 mx-3 xl:text-base lg:text-md text-sm">Our company provides end-to-end DevOps solutions that enable faster delivery, higher quality, and increased efficiency. </p>
                </div>
            </div>
            <div className="flex overflow-hidden">
                <img className="w-full" src="../src/assets/Cloud/Hero3_photo_2.png" />
            </div>
            <div className="bg-[#2A898E]">
                <div className="lg:-skew-x-[15deg]">
                <div className='flex lg:translate-x-[-20%] translate-y-[-10%] items-stretch'>
                        <h1 className='font-bold text-8xl text-white text-stroke tracking-widest lg:flex hidden'>02</h1>
                        <h2 className="text-white pl-4 m-1 text-2xl self-end">Handling Big Data</h2>
                    </div>
                    <p className="text-white pl-4 pr-6 mx-3 xl:text-base lg:text-md text-sm">We help businesses manage and analyze their big data by leveraging cutting-edge technologies and industry best practices </p>
                </div>
            </div>
            <div className="flex overflow-hidden">
                <img className="w-full" src="../src/assets/Cloud/Hero3_photo_3.png" />
            </div>
            <div className="bg-[#035C87]">
                <div className="lg:-skew-x-[15deg]">
                    <div className='flex lg:translate-x-[-20%] translate-y-[-10%] items-stretch'>
                        <h1 className='font-bold text-8xl text-white text-stroke tracking-widest lg:flex hidden'>03</h1>
                        <h2 className="text-white pl-4 m-1 text-2xl self-end">Continuous Delivery</h2>
                    </div>
                    <p className="text-white pl-4 pr-6 mx-3 xl:text-base lg:text-md text-sm">Our team of experts can help you achieve continuous delivery by automating the entire software delivery pipeline. </p>
                </div>
            </div>
            <div className="flex overflow-hidden">
                <img className="w-full" src="../src/assets/Cloud/Hero3_photo_4.png" />
            </div>
            <div className="bg-[#2A898E]">
                <div className="lg:-skew-x-[15deg]">
                    <div className='flex lg:translate-x-[-20%] translate-y-[-10%] items-stretch'>
                        <h1 className='font-bold text-8xl text-white text-stroke tracking-widest lg:flex hidden'>04</h1>
                        <h2 className="text-white pl-4 m-1 text-2xl self-end">Cloud Native Operations</h2>
                    </div>
                    <p className="text-white pl-4 pr-6 mx-3 xl:text-base lg:text-md text-sm">We offer cloud-native operations services that enable businesses to leverage the benefits of cloud computing, such as scalability and cost-effectiveness </p>
                </div>
            </div>
        </div>
        <div className="absolute left-32 bottom-32 w-1/4 invisible xl:visible">
            <p>
            Additionally, we are well versed with different cloud systems, with a vast amount of experience in integrating services with AWS and Azure.
            </p>
        </div>

    </div>
  )
}

export default SkewedContainer