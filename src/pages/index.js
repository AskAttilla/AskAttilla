import React from "react"

//Style
import mainStyle from "../styles/main.module.scss"
import projectSectionStyle from "../styles/projectSection.module.scss"

//Componenets
import Socialicon from "../components/Socialicon"
import ProjectTeaser from "../components/ProjectTeaser"

//Assets
import GithubIcon from "../assets/github.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import MailIcon from "../assets/mail.svg"

const Index = () => (
  <div>
    <div className={mainStyle.wrapper}>
      <div>
        <h1 className={mainStyle.title}>askAttilla</h1>
        <div className={mainStyle.iconWrap}>
          <Socialicon link="#" title="Github" src={GithubIcon}></Socialicon>
          <Socialicon link="#" title="LinkedIn" src={LinkedinIcon}></Socialicon>
          <Socialicon link="#" title="Mail" src={MailIcon}></Socialicon>
        </div>
      </div>
    </div>
    <div className={projectSectionStyle.container}>
      <ProjectTeaser title="Personal website" focus="JS">
        <p className={projectSectionStyle.description}></p>
      </ProjectTeaser>
      <ProjectTeaser title="Slide puzzle game" focus="Python">
        <p className={projectSectionStyle.description}></p>
      </ProjectTeaser>
      <ProjectTeaser title="Website for Steinhuset" focus="HTML/CSS">
        <p className={projectSectionStyle.description}></p>
      </ProjectTeaser>
    </div>
  </div>
)

export default Index
