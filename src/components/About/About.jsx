import React from "react"

import * as style from "./About_style"

import Section from "../Section"
import SectionTitle from "../Section/SectionTitle"

const About = () => {
  return (
    <Section backgroundColor="red">
      <style.Container>
        <SectionTitle>Om Ask Attilla</SectionTitle>
        <p>
          Hei, her skriver jeg ditten og datten om meg. Og litt om min historie
          kanskje ekesmeplvis at jeg er på gran og studerer it og den slags
        </p>
      </style.Container>
    </Section>
  )
}

export default About
