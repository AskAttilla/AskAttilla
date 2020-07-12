import React from "react"

import Layout from "../components/layout"

import contactStyles from "../styles/contact.module.sass"

const ContactPage = () => (
  <Layout>
    <div className={contactStyles.container}>
       <div className={contactStyles.textWrap}>
        <h1>Do you have a question <br></br> or just want to say hi?</h1>
       </div>

       <div className={contactStyles.button}>
          <a href="mailto:mail@askattilla.com">Get in touch</a>
       </div>
       
       

    </div>    
  </Layout>
)

export default ContactPage
