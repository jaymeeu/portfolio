import React from 'react'
import './Home.css'
import ContentInfo from '../../components/ContentInfo'
import CustomBtn from '../../components/CustomButton'
import ImageCont from '../../components/ImageCont'
import SocialIcon from '../../components/SocialIcon'
import display from "../../assets/Abdulrasaq.png"


const About = () => {
  return (
    <div id='about' className="about_intro">
        <div className='home_max_width'>
            <div className='about_inner' style={{ backgroundColor: 'var(--light_touch)'  }}>

                <div className='heading_size'>About me</div>
                <div className='aboutyy'>
                    <SocialIcon
                        flex_size={1}
                        color="var(--main-color)"
                    />
                    <div style={{ flex: 5, alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                        <ImageCont
                            backgroundImage={`url(${display})`}
                        />
                    </div>
                    <ContentInfo
                        color='var(--black-color)'
                        flex_size={6}
                        text={<span style={{ fontSize: 'var(--sub-header-size)', color: 'var(--black-color)', lineHeight: '20px' }}>
                            I am Abdulrasaq, a frontend developer
                        </span>}
                        title={<div style={{ textAlign: 'justify', lineHeight: '30px', width: "100%", paddingRight: '50px' }}>
                            A computer scientist, frontend developer with core strength in ReactJS, have vexed years of experience in
                            development of professonal web applications, passionate about
                            excellence and professionalism in core software
                            development, coding and front-end programming,
                            tasks coordination and team collaboration. I’m always
                            willing to learn new technologies and handle other task
                            outside my core skills.
                            <div style={{ marginTop: '25px' }}>
                                <CustomBtn type='button' txtColor='white'
                                    pd='15px' br='8px' fs='18px' w='200px' bg='var(--main-color)' hoverBG='var(--main)'
                                    txt='Hire me'
                                    fw='500' border="1px solid var(--main)"
                                    onClick={() => {window.scrollTo(0, document.body.scrollHeight)}} />
                            </div>
                        </div>
                        }
                    />
                </div>
            </div>
        </div>
    </div> 
  )
}

export default About
