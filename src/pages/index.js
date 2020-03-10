import React from "react"

import Layout from "../components/layout"
import IconSocial from "../components/iconSocial"
import logoImg from "../assets/images/logo.png"

import indexStyles from "../styles/index.module.sass"

const IndexPage = () => (
  <Layout>
    <div className={indexStyles.container}>
      <div className={indexStyles.logoWrap}>
        <img src={logoImg} />
      </div>

      <div className={indexStyles.icons}>
        <IconSocial
          website="https://github.com/AskAttilla"
          type="github"
          title="Github"
          className={indexStyles.icon}
          clickable="yes"
          width="30px"
        />
        <IconSocial
          website="https://www.linkedin.com/in/ask-attilla/"
          type="linkedin"
          title="LinkedIn"
          className={indexStyles.icon}
          clickable="yes"
          width="30px"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
