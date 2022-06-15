import React from 'react'
import "./Header.css"
import {useLocation, useNavigate} from 'react-router-dom'
export default function Header() {
    
    const location = useLocation()
    const navigation = useNavigate()

    const path = [
        {
            title : "Home",
            path:"#home"
        },
        {
            title : "About",
            path:"#about"
        },
        {
            title : "Skills",
            path:"#skills"
        },
        {
            title : "Portfolio",
            path:"#portfolio"
        },
        {
            title : "Contact",
            path:"#contact"
        }
    ]
    return (
        <div className="header_cont">
            <div className="header_logo">
               <span>A</span> <div>Jay</div>
            </div>
            {/* location.pathname === x.path || location.pathname.split("/")[1] === x.path.split("/")[1]  ? <img src={x.iconclicked} alt="iconimage" width='25px' className="side-img" /> :  <img src={x.icon} width='25px' alt="iconimage" className="side-img" /> */}

            <div className="header-links">
                {
                    path.map((x,i)=>(
                      <a href={x.path} key={x.title} className="active_link"
                        // onClick={()=>navigation(x.path)}
                        // className={location.pathname === x.path ? "active_link" : "inactive_link"}
                        >
                          {x.title}
                        </a>  
                    ))
                }
                
               
            </div>
        </div>
    )
}
