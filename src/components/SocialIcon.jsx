import React from 'react'
import { GrGithub, GrLinkedinOption, GrTwitter } from "react-icons/gr"

const SocialIcon = ({ color, flex_size }) => (
    <div className="home_social_icons" style={{ color: color, flex: flex_size }}>
        <span>
            <a style={{ textDecoration: 'none', color: color }} href="https://www.linkedin.com/in/jamiu-adewuyi-abdulrasaq-b23725b4/" target="_blank" rel="noopener noreferrer">
                <GrLinkedinOption />
            </a>
        </span>
        <span>
            <a style={{ textDecoration: 'none', color: color }} href="https://twitter.com/Abdulrasaq_Jay" target="_blank" rel="noopener noreferrer">
                <GrTwitter />
            </a>
        </span>
        <span>
            <a style={{ textDecoration: 'none', color: color }} href="https://github.com/jaymeeu" target="_blank" rel="noopener noreferrer">

                <GrGithub />
            </a>
        </span>
    </div>
)

export default SocialIcon