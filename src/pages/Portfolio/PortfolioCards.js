import React from 'react'
import './Portfolio.css'
import {BiLink} from 'react-icons/bi'
import { BsGithub} from 'react-icons/bs'
export default function PortfolioCards({
    slide_text, 
    backgroundImage, 
    slide_sub_text,
    logoText,
    project_type,
    collaboration,
    github,
    links
}) 
{
    return (
        <div className="port_body">
           <div className="port_card" style={{backgroundImage : backgroundImage}}>
                <div className="slidein_text">
                <div>
                    {slide_text} 
                </div>
                <span>
                    {slide_sub_text}
                </span>
                </div>
           </div>
           <div className="port_label">
               <div className="port_label_span">
                    <span style={{width:'20px', height:'20px', borderRadius:'50%', display:'flex', backgroundColor:'black', color:'white', fontSize:'10px',fontWeight:'600', alignItems:'center', justifyContent:'center'}}>
                        {logoText}
                    </span>
                    <span style={{fontSize:'14px', color:'var(--black-color)', fontWeight:'600'}}>
                        {project_type}
                    </span> 
                    <span style={{fontSize:'10px', backgroundColor:'gray',padding:'2px 4px',borderRadius:'3px',  color:'white', fontWeight:'600'}}>
                        {collaboration}
                    </span> 
               </div>
               <div className="port_label_span" style={{fontSize:'18px'}}>
                <a href={github} target="_blank" >
                    <BsGithub className="icons" color='gray'/>
                </a>
                       
                <a href={links} target="_blank" >
                    <BiLink className="icons" color='gray'/>
                </a>
               </div>
                
           </div>
          
        </div>
    )
}
