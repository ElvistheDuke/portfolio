// import { ArrowRightCircleIcon, } from "@heroicons/react/24/outline"
import aboutimg from '../assets/about.jpg'
import { motion } from "motion/react"
import projectsimg from '../assets/projects.jpg'
import socialsimg from '../assets/socialmedia.jpg'
import workimg from '../assets/work.jpg'
import LandingBox from "../components/LandingBox"



function LandingPage() {
  return (
    <div className="landingWrapper">
        <div className="landingContainer">
            <div className="topLanding">
                <motion.div
                initial={{
                    y: -60,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                }}
                className="selfInfo landingBox">
                    <div className="profilePic">

                    </div>
                    <div className="profileInfo">
                        <p style={{fontSize: 12, color: "gray"}}>Hello I'm</p>
                        <h1 style={{letterSpacing: 2}}>ELVIS<br></br> OLOGEH</h1>
                        {/* <h1>Ologeh</h1> */}
                        <p style={{fontSize: 12, color: "gray"}}>I am a Front End Web Developer based in Nigeria</p>
                    </div>
                </motion.div>
                <div className="topRightLanding">
                    <motion.div
                    initial={{
                        y: -60,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        delay: 0.1,
                    }}
                    style={{minHeight: 'auto'}} className="sloganWrapper landingBox">
                        <p style={{color: 'gainsboro', fontSize: 14, fontStyle: 'italic'}}>My Slogan Goes Here</p>
                    </motion.div>
                    <div className="landingTwoBoxes">
                        <LandingBox flex={1} imageurl={aboutimg} delay={0.3} title="ABOUT ME" />
                        <LandingBox flex={1} imageurl={projectsimg} delay={0.4} title="MY PROJECTS" />
                    </div>
                </div>
            </div>
            <div className="bottomLanding">
                {/* <div style={{
                        backgroundImage: `url(${socialsimg})`
                    }} className="landingBoxWrapper socialMediaWrapper">
                    <div  className="boxFlex landingImg">
                        <div className="boxContent">
                        </div>
                        <div className="boxText">
                            <p>SOCIAL MEDIA</p>
                            <ArrowRightCircleIcon height={32} />
                        </div>
                    </div>
                </div> */}
                <LandingBox flex={1} imageurl={socialsimg} delay={0.5} title="SOCIAL MEDIA" />
                <LandingBox flex={2} delay={0.6} title="SERVICES OFFERING" />
                {/* <div className="servicesWrapper landingBox boxFlex">
                    <div className="boxContent">

                    </div>
                    <div className="boxText">
                        <p>SERVICES OFFERING</p>
                        <ArrowRightCircleIcon height={32} />
                    </div>

                </div> */}
                <LandingBox flex={1} imageurl={workimg} delay={0.7} title="LET'S WORK TOGETHER" />

                {/* <div style={{
                        backgroundImage: `url(${workimg})`
                    }} className="landingBoxWrapper socialMediaWrapper">
                    <div  className="boxFlex landingImg">
                        <div className="boxContent">
                        </div>
                        <div className="boxText">
                            <p>LET'S WORK TOGETHER</p>
                            <ArrowRightCircleIcon height={32} />
                        </div>
                    </div>
                </div> */}
                
                {/* <div className="letsWorkWrapper landingBox boxFlex">
                    <div className="boxContent">

                    </div>
                    <div className="boxText">
                        <p>LET'S WORK TOGETHER</p>
                        <ArrowRightCircleIcon height={32} />
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default LandingPage