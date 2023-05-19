import React, {useState} from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ClientCarousel = () => {
    const [activePhoto, setActivePhoto] = useState(0)

    const scrollLeft = (currentIndex) => {
        let scrollIndex = "item_" + (activePhoto > 0 ? activePhoto-1 : activePhoto).toString()
        console.log(scrollIndex)
        const scrollToItem = document.getElementById(scrollIndex)
        scrollToItem?.current.scrollIntoView()
        setActivePhoto(activePhoto > 0 ? activePhoto-1 : activePhoto)
    }
    const scrollRight = (currentIndex) => {
        let newIndex = currentIndex + 1
        let scrollElement = "item_" + newIndex
        const scrollToItem = document.getElementById(scrollElement)
        scrollToItem.scrollIntoView({behavior:'smooth', block:'nearest', inline:'start'});
        // document.getElementById("content").scrollLeft += 400;
    }

    const PhotoContainer = ({id}) =>{
        return(
            <div id={id}>
                <div className="card skew-x-[10deg] bg-cyan-100 w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="skew-x-[-10deg] w-[100%] h-[50%] p-2"
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        )
    }

    const Items = () =>{
        var photos = []
        for (let i = 0 ; i<7 ; i++){
            photos.push(<PhotoContainer key={i} id={'item_' + i}/> )
        }
        return(
            <>
                {photos}
            </>
        )
    }

  return (
    <div className="relative">
        <div>
            <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
            <FiChevronLeft />
            </button>
            <button onClick={()=>scrollRight(activePhoto)} className="p-2 m-2 rounded-full bg-white">
            <FiChevronRight />
            </button>
        </div>
        <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-scroll px-12 scroll-smooth  scrollbar-hide">
            <Items/>
        </div>
    </div>
  )
}

export default ClientCarousel