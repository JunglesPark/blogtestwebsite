import React from 'react'


var swiper = new Swiper(".swiper-container", {
    loopedSlides: 8,
    loop: true,
    slidesPerView: "3",
    freeMode: false,
    mousewheel: {
      releaseOnEdges: true,
    },
  });
  
  var thumb = document.querySelectorAll(".thumbContainer");
  
  thumb.forEach(function(image, index) {
    var delay = index * 90;
    
    image.style.animationDelay = delay + "ms";
  });
  

const Example = () => {
  return (
    <div className="overflow-hidden w-[70vw]">
        <div className="swiper-container ">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <div className="thumbContainer">
                    <img src="https://picsum.photos/600/400" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Example