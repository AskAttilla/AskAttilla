import React from "react"

import * as style from "./Hero_style"

import Section from "../Section"
import SocialMediaIcons from "../SocialMediaIcons"

const Hero = () => {
  return (
    <Section backgroundColor="whitesmoke">
      <style.Container>
        <style.Text>
          <h2>Ask Attilla</h2>
          <h1>Webutvikler</h1>
        </style.Text>
        <SocialMediaIcons />
      </style.Container>
    </Section>
  )
}

export default Hero
