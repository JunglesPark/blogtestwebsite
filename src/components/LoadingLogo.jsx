import React from "react";
import { motion } from "framer-motion";


let logoStyle = {
  svgStyle:{
    overflow: "visible",
    stroke: "#239CFF",
    strokeWidth: 2,
    strokeLinejoin : "round",
    strokeLinecap: "round",
  }
}

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 4,
    fill: "rgba(101, 101, 99, 1)"
  }
};

const twoSquare = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(44, 180, 232, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(44, 180, 232, 1)"
  }
};



const LoadingLogo = ({animationEndEvent}) => (
  <div className="w-32 h-32 flex place-content-center overflow-hidden ">
    <motion.svg
      animate={{opacity:1, transition:{duration:2}}}
      onAnimationComplete={()=>animationEndEvent()}
      style={logoStyle.svgStyle}
      viewBox="0 0 336.32 333.41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
        d="m47.04 121.47 121.47-121.47 114.42 114.42-30.87 30.87-82.21-82.21-58.39 58.39 79.19 79.19-31.88 31.88s-111.73-113.08-111.73-111.07z"
        fill="#656563"
      />
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
        d="m146.32 133.13 31.96-31.96 111.3 111.3-120.94 120.94-113.5-113.51 31.68-31.68 82.09 82.1 57.3-57.3z"
        fill="#656563"
      />
      <g fill="#2cb4e8">
        <motion.path
          variants={twoSquare}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
          d="m0 167.6 33.37-33.37 33.06 33.06-33.33 33.33z"
        />
        <motion.path
          variants={twoSquare}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
          d="m269.89 167.42 33.37-33.38 33.06 33.06-33.34 33.34z"
        />
      </g>
    </motion.svg>
  </div>
);


export default LoadingLogo