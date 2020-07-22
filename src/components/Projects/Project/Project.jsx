import React from "react"
import Image from "../../image"

import * as style from "./Project_style"

const Project = ({ title, imageSrc, link }) => {
  return (
    <style.Container>
      <a href={link}>
        <style.ImageContainer>
          <Image imgName={imageSrc} alt={title} />
        </style.ImageContainer>
      </a>
    </style.Container>
  )
}

export default Project
