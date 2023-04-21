import React from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ClientCarousel = () => {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }

  return (
    <div className="relative">
        <div className="text-center py-4  text-xl font-bold">
            Carousel
        </div>
        <div className="absolute right-0 top-5 ">
            <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
            <FiChevronLeft />
            </button>
            <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
            <FiChevronRight />
            </button>
        </div>
        <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>       
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>     
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>     
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>     
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>     
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>     
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>     
            <div>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>     
        </div>
    </div>
  )
}

export default ClientCarousel