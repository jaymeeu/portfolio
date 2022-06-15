import React from 'react'
import './Portfolio.css'
import {Grid} from "@mui/material"
import PortfolioCards from './PortfolioCards'
import card from '../../assets/card.png'
import Dillivry from '../../assets/Dillivry.png'
import LilyHospital from '../../assets/LilyHospital.png'
import Datamellon from '../../assets/Datamellon.png'
import Dashboard from '../../assets/Dashboard.png'


export default function Portfolio() {
    return (
            <div className="port_container">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <PortfolioCards
                           slide_text = "Dillivry"
                           slide_sub_text = "Lorem ipsum dolor sit amet, harum dolore architecto sint similique sit veritatis iure recusandae quae dolor, vitae nesciunt libero. Est tempore nostrum"
                           backgroundImage={`url(${Dillivry})`}
                           logoText="AJ"
                           project_type="Dillivry"
                           collaboration="ReactJS"
                           github="https://github.com/datamellon/dm-dillivry-web"
                           links="https://dillivry.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PortfolioCards
                           slide_text = "Lily Hospital management system"
                           slide_sub_text = "Lorem ipsum dolor sit amet, harum dolore architecto sint similique sit veritatis iure recusandae quae dolor, vitae nesciunt libero. Est tempore nostrum"
                           backgroundImage={`url(${LilyHospital})`}
                           logoText="AJ"
                           project_type="Lily Hospital"
                           collaboration="TEAM"
                           github="https://github.com/jaymeeu/"
                           links="https://lilyhospitals.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PortfolioCards
                           slide_text = "Datamellon"
                           slide_sub_text = "Lorem ipsum dolor sit amet, harum dolore architecto sint similique sit veritatis iure recusandae quae dolor, vitae nesciunt libero. Est tempore nostrum"
                           backgroundImage={`url(${Datamellon})`}
                           logoText="AJ"
                           project_type="Datamellon website"
                           collaboration="ReactJS"
                           github="https://github.com/jaymeeu"
                           links="https://datamellon.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PortfolioCards
                           slide_text = "Dashboard"
                           slide_sub_text = "Lorem ipsum dolor sit amet, harum dolore architecto sint similique sit veritatis iure recusandae quae dolor, vitae nesciunt libero. Est tempore nostrum"
                           backgroundImage={`url(${Dashboard})`}
                           logoText="AJ"
                           project_type="Ecommerce dashboard"
                           collaboration="Reactjs"
                           github="https://github.com/jaymeeu"
                           links="https://github.com/jaymeeu"
                        />
                    </Grid>
                    
                    
                    
                </Grid>
            </div>
           
    )
}
