import { motion } from "motion/react"
// import aboutimg from "../assets/about.jpg"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import React from "react";



interface Props{
    imageurl ?: string;
    delay: number;
    title: string;
    children ?: React.ReactNode;
    flex: number;
}


function LandingBox(props:Props) {
  return (
    <motion.div 
    initial={{
        y: -40,
        opacity: -1
    }}
    animate={{
        y: 0,
        opacity: 1
    }}
    transition={{
        duration: 0.6,
        ease: 'easeInOut',
        delay: props.delay,
    }}
    style={ props.imageurl ? {
            backgroundImage: `url(${props.imageurl})`,
            flex: props.flex,
        } : {
            flex: props.flex,
        }} className="landingBoxWrapper aboutMeWrapper">
        <div  className="boxFlex landingImg">
            <div className="boxContent">
                {props.children}
            </div>
            <div className="boxText">
                <p>{props.title}</p>
                <ArrowRightCircleIcon height={32} />
            </div>
        </div>
    </motion.div>
  )
}

export default LandingBox