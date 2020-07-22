import React from "react"
import { Title, TitleCover, Underlay } from "./Section_style"

const SectionTitle = ({ children }) => {
  return (
    <TitleCover>
      <Title>{children}</Title>
      <Underlay />
    </TitleCover>
  )
}

export default SectionTitle
