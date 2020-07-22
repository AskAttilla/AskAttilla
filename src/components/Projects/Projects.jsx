import React from "react"

import * as style from "./Projects_style"

import Section from "../Section"
import SectionTitle from "../Section/SectionTitle"
import Project from "./Project"

const Projects = () => {
  return (
    <Section backgroundColor="whitesmoke">
      <style.Wrapper>
        <SectionTitle>Prosjekter</SectionTitle>
        <style.Container>
          <Project
            title="Steinhuset"
            imageSrc="steinhusetfrontpage.png"
            link="https://steinhuset.org/"
          />
          <Project
            title="Skogens Gull"
            imageSrc="skogensgullfrontpage.png"
            link="https://www.skogensgull.com/"
          />
        </style.Container>
      </style.Wrapper>
    </Section>
  )
}

export default Projects
