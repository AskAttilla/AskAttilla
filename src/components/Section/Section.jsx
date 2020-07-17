import React from "react"
import * as style from "./Section_style"

const Section = ({ backgroundColor, children }) => {
  return (
    <style.Section backgroundColor={backgroundColor}>
      <style.InnerSection>{children}</style.InnerSection>
    </style.Section>
  )
}

export default Section
