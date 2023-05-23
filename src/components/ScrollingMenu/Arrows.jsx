import React, {useState,useContext,useEffect} from "react"
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


const Arrow = ({children,disabled,onClick}) =>{
  return(
      <button className="p-2 m-2 rounded-full bg-white h-fit border-[#239CFF] text-[#239CFF]" disabled={disabled} onClick={onClick} style={{cursor:"pointer", display:"flex", flexDirection:"column", justifyContent:"center", right:"1%", opacity: disabled ? "0": "1", userSelect:"none"}}>
          {children}
      </button>
  )
}

const LeftArrow = () =>{
  const {getPrevElement, isFirstItemVisible, scrollToItem, visibleElements, initComplete} = useContext(VisibilityContext)

  const [disabled,setDisabled] = useState(!initComplete || (initComplete && isFirstItemVisible));

  useEffect(()=>{
    if(visibleElements.length){
      setDisabled(isFirstItemVisible)
    }
  },[isFirstItemVisible, visibleElements])

  const clickHandler = () =>{
    scrollToItem(getPrevElement(), "smooth", "start");
  }

  return(
    <Arrow disabled={disabled} onClick={clickHandler}>
      <FiChevronLeft/>
    </Arrow>
  )
}

const RightArrow = () =>{
  const {getNextElement, isLastItemVisible, scrollToItem, visibleElements} = useContext(VisibilityContext)

  const [disabled,setDisabled] = useState(!visibleElements.length && isLastItemVisible);

  useEffect(()=>{
    if(visibleElements.length){
      setDisabled(isLastItemVisible)
    }
  },[isLastItemVisible, visibleElements])

  const clickHandler = () =>{
    scrollToItem(getNextElement(), "smooth", "end");
  }

  return(
    <Arrow disabled={disabled} onClick={clickHandler}>
      <FiChevronRight/>
    </Arrow>
  )
}

const HeaderArrows = () =>{
  <div>
    <LeftArrow/><RightArrow/>
  </div>
}


export { RightArrow, LeftArrow, Arrow, HeaderArrows} 