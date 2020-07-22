import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import Mission from "../components/Mission"
import Projects from "../components/Projects"
import Services from "../components/Services"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects />
    <Services />
    <About />
  </Layout>
)

export default IndexPage
