import React from 'react'

export default function Resume() {
    return (
        <div>
            <div className="resume">
                <div className="resume_body">
                    <div className="resume_left">
                        <ContValue cont="Email:" value="rasaqadewuyi@gmail.com"/>
                        <ContValue cont="Phone number:" value="+2348104840215"/>
                        <ContValue cont="Address:" value="Ketu, Lagos, Nigeria"/>
                        <ContValue cont="Github:" value="Github.com/jaymeeu"/>
                        
                        <div>
                            <div className="skills_">
                                Skill
                            </div>
                            <Line/>
                            <div style={{marginBottom:'0px'}}>
                                <Skills skill="HTML"/>
                                <Skills skill="CSS"/>
                                <Skills skill="JavaScript"/> 
                            </div>
                            <div style={{marginBottom:'0px'}}>
                                <Skills skill="React"/>
                                <Skills skill="ReactNative"/>
                                <Skills skill="Redux"/>
                            </div>
                                <Skills skill="NodeJS"/>
                                <Skills skill="Material UI"/>
                        </div>
                        <div>
                            <div className="skills_">
                                LANGUAGES
                            </div>
                            <Line/>
                            <div style={{margin:'10px 0 20px 0'}} >
                                <ContValue cont="English" value="Professional Working Proficiency"/>
                            </div>
                            <div style={{margin:'0 0 20px 0'}} >
                                <ContValue cont="Yoruba" value="Native or Bilingual Proficiency"/>
                            </div>
                        </div>

                        <div>
                            <div className="skills_">
                                INTEREST
                            </div>
                            <Line/>
                            <div style={{margin:'10px 0 20px 0', fontSize:'11px', color: 'var(--black-color)'}} >
                                Cloud application
                            </div>
                            <div style={{margin:'0 0 20px 0', fontSize:'11px', color: 'var(--black-color)'}} >
                                Reading
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="resume_right">
                        <div>
                            <div className="headde">
                                EDUCATION
                            </div>
                            <Line/>
                            <DecribtionPaper
                                title="Higher National Diploma"
                                subtitle="Ogun State Ins tute of Technology, Igbesa" 
                                date="11/2013 - 10/2018"
                                decription="Course" 
                                list={['Computer science']}
                            />
                        </div>

                        <div>
                            <div className="headde">
                            WORK EXPERIENCE
                            </div>
                            <Line/>
                            <DecribtionPaper
                                title="Frontend Engineer"
                                subtitle="Datamellon Limited" 
                                date="03/2021- Present"
                                decription="Datamellon a cloud based application development company specialized in creating web solutions. Their product range from web apps to mobile app development." 
                                list={['Collaborated to build a fully functional logistics management solution (Dillivry)', 'As the team lead I coordinate every activities of the web development life cycle.', 'Working with the team to create fully responsive and user friendly interfaces']}
                            />
                            <DecribtionPaper
                                title="Frontend Intern"
                                subtitle="Lotus Beta Analytics" 
                                date="03/2020- 02/2021"
                                decription="Lotus Beta Analytics specialises in creating web solutions for organizations. Their product range from web apps to mobile app development." 
                                list={['Collaborated on building a fully functional HR Portal Microsoft PowerApp widget with react typescript and NodeJS', 
                                    'Collaborated on building a website for a ride-hailing brand. The website was built Worked on several component of the page',
                                    'Implemented the navigation section, making sure it is fully responsive and navigation menu and hamburger',
                                    'Worked on the newsletter section and successfully integrated MailChimp subscription API',
                                    'Worked on the product-demo section. Implemented a carousel for images of brand product'
                                    ]}
                            />
                        </div>
                        <div>
                        <div className="headde">
                            PERSONAL EXPERIENCE
                            </div>
                            <Line/>
                            <div className="descPaper">
                                <div className="tit">
                                Kuda Microfinance App Clone (ReactNative)
                                </div>
                                <div className="subtit">
                                    01/22
                                </div>
                            </div>
                            <div className="descPaper">
                                <div className="tit">
                                Uber Eat App Clone (ReactNative)
                                </div>
                                <div className="subtit">
                                    12/21
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Line =()=>(
    <div className="line"></div>
)

const ContValue=({cont, value})=>(
    <div>
        <div className="cont_">
            {cont}
        </div>
        <div className="value_">
            {value}
        </div>
    </div>
)
const Skills =({skill})=>(
    <span className="skills">{skill}</span> 
)

const DecribtionPaper = ({title, subtitle, date, decription, list}) =>(
    <div className="descPaper">
        <div className="tit">
            {title}
        </div>
        <div className="subtit">
            {subtitle}
        </div>
        <div className="date">
            {date}
        </div>
        <div className="description">
            {decription}
        </div>
        <div className="list">
            <ul>
                {
                    list.map((x)=>(
                    <li>{x}</li>
                    ))
                }
                
            </ul>
        

        </div>
    </div>
)