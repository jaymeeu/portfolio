import React, {useEffect} from 'react'
import Layout from '../Layout'
import './Home.css'
import Portfolio from '../Portfolio/Portfolio'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Contact from '../Contact/Contact'


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 500
          });
    }, [])
    
    return (
        <div>
            <Layout>
                <div className="home_container">
                    <Hero/>
                    <About/>
                    <Skills/>
                    <div id='portfolio' className="home_intro" style={{ backgroundColor: 'var(--light-touch)' }}>
                        <div className='home_max_width'>
                            <div className='_inner' style={{ flexDirection: 'column' }}>
                                <div className='heading_size' style={{marginBottom:'20px'}}>Portfolio</div>
                                <>
                                    <Portfolio/>
                                </>
                            </div>
                        </div>
                    </div>
                    <div id='portfolio' className="home_intro" style={{ backgroundColor: 'var(--light-touch)' }}>
                        <div className='home_max_width'>
                            <div className='_inner'>
                                <Contact/>
                            </div>
                        </div>
                    </div>

                </div>

            </Layout>
        </div>
    )
}

// const SocialIcon = ({ color, flex_size }) => (
//     <div className="home_social_icons" style={{ color: color, flex: flex_size }}>
//         <span>
//             <GrLinkedinOption />
//         </span>
//         <span>
//             <GrTwitter />
//         </span>
//         <span>
//             <GrGithub />
//         </span>
//     </div>
// )

// const ContentInfo = ({ text, header, title, flex_size, color }) => (
//     <div className="home_info" style={{ flex: flex_size, color: color }}>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
//             <div className="text_size">
//                 {text}
//             </div>
//             <div className="header_size">
//                 {header}
//             </div>

//             <div className="title_size">
//                 {title}
//             </div>

//         </div>
//     </div>
// )

// const ImageCont = ({ backgroundImage, flex_size }) => (
//     <div className="home_image" style={{ backgroundImage: backgroundImage, flex: flex_size }}>
//     </div>
// )