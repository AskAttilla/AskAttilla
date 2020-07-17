import React from "react"
import * as style from "./Service_style"

const Service = ({ title, content, icon }) => {
  return (
    <style.Container>
      <style.StyledIcon icon={icon} />
      <h3>{title}</h3>
      <p>{content}</p>
    </style.Container>
  )
}

export default Service
