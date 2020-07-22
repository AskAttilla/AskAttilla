import React from "react"
import { Title, TitleCover } from "./Section_style"

const SectionTitle = ({ children }) => {
  return (
    <TitleCover>
      <Title>{children}</Title>
    </TitleCover>
  )
}

export default SectionTitle
