import React from "react"

import * as style from "./Contact_style"

import Section from "../Section"
import SocialMediaIcons from "../SocialMediaIcons"

const Contact = () => {
  return (
    <Section backgroundColor="whitesmoke">
      <style.Container>
        <h1>
          Ønsker du å jobbe sammen med meg?
          <br />
          <a href="mailto:mail@askattilla.com">Ta kontakt!</a>
        </h1>
        <SocialMediaIcons jc="center" iconSize="30px" />
      </style.Container>
    </Section>
  )
}

export default Contact
