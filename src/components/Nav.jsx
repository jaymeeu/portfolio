import React, { useState } from 'react';
import "./Nav.css"
import { AiOutlineHome,AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdConnectWithoutContact } from 'react-icons/md';







const Nav = () => {
  const [activestate, setactivestate] = useState("home")
  return (
    <nav className='navbar'>
     <a href="#" onClick={()=>setactivestate("home")} className={activestate === "home" ? "active" : null}><AiOutlineHome  /></a>
          <a href="#about" onClick={()=>setactivestate("about")}  className={activestate === "about" ? "active" : null} ><AiOutlineUser /></a>
          <a href="#skills"onClick={()=>setactivestate("experience")}   className={activestate === "experience" ? "active" : null} ><BiBook /></a>
          <a href="#portfolio" onClick={()=>setactivestate("portfolio")}  className={activestate === "portfolio" ? "active" : null} ><RiServiceLine /></a>
          <a href="#contact" onClick={()=>setactivestate("contact")} className={activestate === "contact" ? "active" : null} ><MdConnectWithoutContact /></a>
    </nav>
      
  
  )
}

export default Nav