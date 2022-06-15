import React from 'react'
import './Home.css'
import ContentInfo from '../../components/ContentInfo'
import CustomBtn from '../../components/CustomButton'
import ImageCont from '../../components/ImageCont'
import SocialIcon from '../../components/SocialIcon'
import display from "../../assets/Abdulrasaq.png"
import Typed from "react-typed";


const Hero = () => {
  return (
    <div id='home' className="hero_intro" >
        <div className='home_max_width'>
            <div className='hero_inner' style={{ backgroundColor: 'var(--light)' }}>
                <SocialIcon
                    flex_size={1}
                    color="var(--main-color)"
                />
                <ContentInfo
                    color='var(--black-color)'
                    flex_size={6}
                    text={<>I am a...</>}
                    header={<>
                    Software  <br /> 
                    <Typed
                        loop
                        typeSpeed={200}
                        backSpeed={50}
                        strings={["Developer", "Designer", "Engineer"]}
                        smartBackspace
                        shuffle={false}
                        backDelay={1}
                        fadeOut={false}
                        fadeOutDelay={100}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                    />
                    </>}
                    title={<>
                        Frontend - HTML, CSS, JavaScript, ReactJS, ReactNative
                        <div className='insideText' style={{margin: "20px 0"}}>
                            A computer scientist with years of experience in
                            development of professonal web applications, passionate about
                            excellence and professionalism in core software
                            development, coding and front-end programming,
                            tasks coordination and team collaboration.
                        </div>
                        <div style={{ marginTop: '25px' }}>
                            <CustomBtn type='button' txtColor='white'
                                pd='15px' br='8px' fs='18px' w='200px' bg='var(--main-color)' hoverBG='var(--main)'
                                txt='Hire me'
                                fw='500' border="1px solid var(--main)"
                                onClick={() => {window.scrollTo(0, document.body.scrollHeight)}} />
                        </div>
                    </>}
                />
                <div style={{ flex: 5, alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                    <ImageCont
                        backgroundImage={`url(${display})`}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
