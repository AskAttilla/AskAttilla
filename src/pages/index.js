import React from "react"

import Layout from "../components/layout"

import indexStyles from "../styles/index.module.sass"

const IndexPage = () => (
  <Layout>
    
    <div className={indexStyles.container} >
      <div> 
        <h1>AskAttilla</h1>
      </div>

      <h3>
        Developer
      </h3> 
      <div>
        <p>icon icon icon</p>
      </div>
    </div>

  </Layout>
)

export default IndexPage
