import React ,{useState, useEffect} from 'react'
import { motion } from "framer-motion"
import ClientCarousel from './ClientCarousel'
import {  AboutUsPartnerLogo_Arista,
    AboutUsPartnerLogo_CLSA,
    AboutUsPartnerLogo_FLIPS,
    AboutUsPartnerLogo_HKJC,
    AboutUsPartnerLogo_NetApp,
    AboutUsPartnerLogo_Pure,
    AboutUsPartnerLogo_Quantum,
    AboutUsPartnerLogo_Salto,
    AboutUsPartnerLogo_Solace,
    AboutUsPartnerLogo_Splunk,
    AboutUsPartnerLogo_Symantec} from "../assets/index"

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
    const subtitles = [
        {
            subtitle:"Our Clients",
            description:"We are proud to work with some of the leading world companies, helping them to fortify and expand upon existing services using recently developed technology."
        },
        {
            subtitle:"Our Partners",
            description:"We are proud to work with some of the leading world companies, helping them to fortify and expand upon existing services using recently developed technology."
        }
    ]

    const partnersLogo = [
        {
            image:AboutUsPartnerLogo_Solace,
            target: "https://solace.com"
        },
        {
            image:AboutUsPartnerLogo_NetApp,
            target:"https://www.netapp.com/zh-hant/"
        },
        {
            image:AboutUsPartnerLogo_Pure,
            target:"https://www.purestorage.com"
        },
        {
            image:AboutUsPartnerLogo_FLIPS,
            target:"https://flipsdigital.com"
        },
        {
            image:AboutUsPartnerLogo_Salto,
            target:"https://saltosystems.com/en/"
        },
        {
            image:AboutUsPartnerLogo_Arista,
            target:"https://www.arista.com/en/"
        },
        {
            image:AboutUsPartnerLogo_Quantum,
            target:"https://post-quantum.com"
        },
        {
            image:AboutUsPartnerLogo_Splunk,
            target:"https://www.splunk.com"
        },
        {
            image:AboutUsPartnerLogo_Symantec,
            target:"https://sep.securitycloud.symantec.com/v2/landing"
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

    const SubTitle = ({title,description}) =>{
        return(
            <>
                <h1 className="py-2 md:py-[5] lg:py-[8] xl:py-[12] font-bold xl:text-6xl lg:text-4xl md:text-2xl text-2xl">{title}</h1>
                <p className="py-2 md:py-[5]">{description}</p>
            </>
        )
    }

    const GridPhotoContainer = () =>{
        return(
            <div className='grid md:grid-cols-3 grid-cols-2 gap-2 w-full md:-skew-x-[10deg] md:-translate-x-12'>
                {partnersLogo.map((item,idx)=>{
                    return(
                        <GridPhotoBox imageSrc={item.image} key={idx} imageTarget={item.target}/>
                    )
                })}
            </div>
        )
    }

    const GridPhotoBox = ({imageSrc, imageTarget}) =>{
        return(
            <>
                <div className='col-span-1'>
                    <a href={imageTarget} target="_blank">
                        <motion.div whileHover={{scale:1.02, transition:{ duration: 0.5}}} className='bg-white shadow-lg hover:border hover:border-[#239CFF] p-8 flex justify-center'>
                            <img src={imageSrc} className="md:h-[52px] h-[32px] object-contain object-center md:skew-x-[10deg] hover:cursor-pointer"/>
                        </motion.div>
                    </a>
                </div>
            </>
        )
    }

  return (
    <>
    <div className='relative flex justify-center align-middle items-center'>
        <div className='xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm max-w-xs w-full' id="clientInformation">
            <div className="w-full grid grid-cols-12 gap-4">
                <div className="md:col-span-4 col-span-12 md:h-[650px] h-fit">
                    <div className="py-5">
                        <SubTitle title={subtitles[0].subtitle} description={subtitles[0].description}/> 
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

            <div className='w-full grid grid-cols-12 gap-4 mt-2 mb-10'>
                <div className='md:col-span-8 col-span-12 md:order-1 order-2'>
                    <div className='py-5'>
                        <GridPhotoContainer/>

                    </div>
                </div>
                <div className='md:col-span-4 col-span-12 md:order-2 order-1'>
                    <div className='py-5'>
                        <SubTitle title={subtitles[1].subtitle} description={subtitles[1].description}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
    
  )
}

export default ClientsAndPartners