import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import './Layout.css'

export default function Layout({children}) {
    return (
        <div className="app-main">
            <div className='web_nav'>
                <div className="app-header">
                    <Header/>
                </div>
            </div>

            <div className='mobile_nav'>
               {/* <span>mobile nav</span> */}
               <Nav/>
            </div>
            
            <div className="app-container">
                {children}
            </div>
            {/* <div className="app-footer">
                <Footer/>
            </div> */}
        </div>
    )
}
