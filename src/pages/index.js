import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/SEO"

import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Services from "../components/Services"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
