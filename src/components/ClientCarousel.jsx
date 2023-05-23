import React, {useContext, useState, useEffect} from 'react'
import { motion } from "framer-motion"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { LeftArrow,RightArrow, HeaderArrows } from './ScrollingMenu/Arrows';
import usePreventBodyScroll from './ScrollingMenu/usePreventBodyScroll'
// NOTE: for hide scrollbar
import "./ScrollingMenu/hideScrollbar.css";

import { screenSize } from '../hooks/screenSize'


const elemPrefix = "item-"
const getId = (index) => `${elemPrefix}${index}`


const ClientCarousel = ({assignActiveItem , clientList}) => {
    let screenSizeWidth = screenSize()
    const getItems = () => clientList.map((_,ind)=>({id: getId(ind)}));
    const [items,  setItems] = useState(getItems)
    const [position, setPosition] = useState('item-0')
    const [selected, setSelected] = useState([])
    const [photoContainer, setPhotoContainer] = useState(0)


    const isItemSelected = (id) => !!selected.find((el)=> el === id);

    useEffect(()=>{
        let photoContainerWidth = Math.floor(screenSizeWidth * 0.8)
        console.log(photoContainerWidth)
        setPhotoContainer(photoContainerWidth)
    },[screenSizeWidth])

    const handleContainerWidth = () =>{
        let photoContainerCss = "relative h-[450px] p-5 xs:max-w-[325px] w-[325px] md:w-[550px] lg:w-[650px] xl:w-[750px] 2xl:w-[850px]"
        return photoContainerCss
    }

    const handleClick = (id) => ({getItemById, scrollToItem}) => {
        const itemSelected = isItemSelected(id)
        
        setSelected((currentSelected) => 
            itemSelected ? 
            currentSelected.filter((el)=>el !== id):
            currentSelected.concat(id)
        )

        assignActiveItem(id)
        setPosition(id)
    }

    const ArrowHeaderContainer = () =>{
        return(
            <>
            <div className='flex justify-start align-middle'>
                <LeftArrow/><RightArrow/>
            </div>
            </>
        )
    }
    

    const PhotoCardContainer = ({onClick, selected, title, itemId}) =>{
        const visibility = useContext(VisibilityContext)
        const visible = visibility.isItemVisible(itemId)
        const itemIndex = itemId.split('item-')[1]

        const cardContainerCss = (visible ,itemId) => {
            var style = "card w-[200px] h-[350px] m-2 rounded-lg shadow-lg cursor-pointer"
            if (!visible){
                style += " opacity-70 bg-white"
            } else {
                style += " bg-[#00498E]/[.08]"
            }

            if(itemId === position){
                style += " border border-[#239CFF]"
            }
            return style
        }

        return(
            <div onClick={()=>onClick(visibility)} tabIndex={0} >
                <motion.div whileHover={{scale:1.02, transition:{ duration: 0.5}}} className={cardContainerCss(visible, itemId)}>
                    <div className="flex place-content-center place-items-center h-full w-full">
                        <img
                            className="w-[90%] h-[50%] p-2"
                            src={clientList[itemIndex].image}
                            alt="img"
                        />
                    </div>
                </motion.div>
            </div>
        )
    }


  return (
    <div className={handleContainerWidth()}>
        <ScrollMenu Header={ArrowHeaderContainer} options={{ratio:0.9, rootMargin:"5px", threshold:[0.01,0.05,0.5,0.75,0.95,1]}}>
            {items.map(({id})=>(
                <PhotoCardContainer itemId={id} title={id} key={id} selected={isItemSelected(id)} onClick={handleClick(id)}/>
            ))}
        </ScrollMenu>
    
    </div>
  )
}

export default ClientCarousel