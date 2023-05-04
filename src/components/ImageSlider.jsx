import { React, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Transition } from '@headlessui/react'

const images = [
  'https://via.placeholder.com/500x300?text=Image+1',
  'https://via.placeholder.com/500x300?text=Image+2',
  'https://via.placeholder.com/500x300?text=Image+3',
]

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function handlePrevClick() {
    setCurrentImageIndex((index) => (index === 0 ? images.length - 1 : index - 1))
  }

  function handleNextClick() {
    setCurrentImageIndex((index) => (index === images.length - 1 ? 0 : index + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <Transition
          show={true}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            src={images[currentImageIndex]}
            alt="Slider"
            className="w-full h-96 object-cover"
          />
        </Transition>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={handlePrevClick}
          className="bg-gray-800 p-2 rounded-full shadow-lg text-white mr-2 focus:outline-none"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-gray-800 p-2 rounded-full shadow-lg text-white focus:outline-none"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}