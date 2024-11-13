import { ArrowRightCircleIcon, UserIcon } from "@heroicons/react/24/outline"
import aboutimg from '../assets/about.jpg'
import projectsimg from '../assets/projects.jpg'
import socialsimg from '../assets/socialmedia.jpg'
import workimg from '../assets/work.jpg'



function LandingPage() {
  return (
    <div className="landingWrapper">
        <div className="landingContainer">
            <div className="topLanding">
                <div className="selfInfo landingBox">
                    <div className="profilePic">

                    </div>
                    <div className="profileInfo">
                        <p style={{fontSize: 12, color: "gray"}}>Hello I'm</p>
                        <h1 style={{letterSpacing: 2}}>ELVIS<br></br> OLOGEH</h1>
                        {/* <h1>Ologeh</h1> */}
                        <p style={{fontSize: 12, color: "gray"}}>I am a Front End Web Developer based in Nigeria</p>
                    </div>
                </div>
                <div className="topRightLanding">
                    <div style={{minHeight: 'auto'}} className="sloganWrapper landingBox">
                        <p style={{color: 'gainsboro', fontSize: 14, fontStyle: 'italic'}}>My Slogan Goes Here</p>
                    </div>
                    <div className="landingTwoBoxes">
                        <div style={{
                                backgroundImage: `url(${aboutimg})`
                            }} className="landingBoxWrapper aboutMeWrapper">
                            <div  className="boxFlex landingImg">
                                {/* <div className="blackOverlay"></div> */}
                                <div className="boxContent">
                                    {/* <p>ABOUT</p>
                                    <p>ME</p> */}
                                </div>
                                <div className="boxText">
                                    <p>ABOUT ME</p>
                                    <ArrowRightCircleIcon height={32} />
                                </div>
                            </div>
                        </div>
                        <div className="projectsWrapper landingBox boxFlex">
                            <div className="boxContent">

                            </div>
                            <div className="boxText">
                                <p>PROJECTS</p>
                                <ArrowRightCircleIcon height={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomLanding">
                <div className="socialMediaWrapper landingBox boxFlex">
                    <div className="boxContent">

                    </div>
                    <div className="boxText">
                        <p>SOCIAL MEDIA</p>
                        <ArrowRightCircleIcon height={32} />
                    </div>
                </div>
                <div className="servicesWrapper landingBox boxFlex">
                    <div className="boxContent">

                    </div>
                    <div className="boxText">
                        <p>SERVICES OFFERING</p>
                        <ArrowRightCircleIcon height={32} />
                    </div>

                </div>
                <div className="letsWorkWrapper landingBox boxFlex">
                    <div className="boxContent">

                    </div>
                    <div className="boxText">
                        <p>LET'S WORK TOGETHER</p>
                        <ArrowRightCircleIcon height={32} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage