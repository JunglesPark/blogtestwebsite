import React ,{useState, useEffect} from 'react'
import ClientCarousel from './ClientCarousel'

const ClientsAndPartners = () => {
    const clientList = [
        {
            name: "Hong Kong Jockey Club",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
            description: "Hong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey Club"
        },
        {
            name: "Hong Kong Jockey Club 2",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
            description: "Hong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey Club"
        },
        {
            name: "Hong Kong Jockey Club 3 ",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
            description: "Hong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey Club"
        },
        {
            name: "Hong Kong Jockey Club 4",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
            description: "Hong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey Club"
        },
        {
            name: "Hong Kong Jockey Club 5",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
            description: "Hong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey Club"
        },
        {
            name: "Hong Kong Jockey Club 6",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
            description: "Hong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey Club"
        },
        {
            name: "Hong Kong Jockey Club 7",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
            description: "Hong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey ClubHong Kong Jockey Club"
        },
    ]
    const [activeItem, setActiveItem] = useState('item-0')
    const [name, setName]= useState('')
    const [description, setDescription] = useState('')
    const [clientInformationBoxHeight, setClientInformationBoxHeight] = useState({})
    const assignActiveItem = (id) =>{
        setActiveItem(id)
    }

    const clientInformation = (activeItem) =>{
        let index = activeItem.split('item-')[1]
        let name = clientList[index].name
        let descripion = clientList[index].description
        setName(name)
        setDescription(descripion)
    }

    const divHeight = () =>{
        let boxHeight = document.getElementById('clientInformation').clientHeight.toString()
        setClientInformationBoxHeight({
          height:  boxHeight + "px"
        })
      }


    useEffect(()=>{
        clientInformation(activeItem)
    },[activeItem])

  return (
    <>
    <div className='relative flex justify-center align-middle items-center'>
        <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full' id="clientInformation">
            <div className="w-full grid grid-cols-12 gap-4">
                <div className="md:col-span-4 col-span-12 md:h-[650px] h-fit">
                    <div className="py-5">
                        <h1 className="py-2 md:py-[5] lg:py-[8] xl:py-[12] font-bold xl:text-6xl lg:text-4xl md:text-2xl text-2xl">Our Clients</h1>
                        <p className="py-2 md:py-[5]">We are proud to work with some of the leading world companies, helping them to fortify and expand upon existing services using recently developed technology.</p>
                    </div>
                    <div className="py-5">
                        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-2xl font-semibold">{name}</h1>
                        <p className='mt-4'>{description}</p>
                    </div>
                </div>
                <div className="md:col-span-7 col-span-12">
                    {/* <ClientCarousel /> */}
                </div>
            </div>
            <div className='md:absolute md:right-0 md:top-0 md:w-3/5 relative'>
                <ClientCarousel assignActiveItem={assignActiveItem} clientList={clientList}/>
            </div>
        </div>

    </div>
    </>
    
  )
}

export default ClientsAndPartners