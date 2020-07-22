import React from "react"
import * as style from "./SocialMediaIcons_style"

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SocialMediaIcons = () => {
  return (
    <style.Container>
      <a href="/gh">
        <style.StyledIcon icon={faGithubSquare} hoverColor="#6e5494" />
      </a>
      <a href="/li">
        <style.StyledIcon icon={faLinkedin} hoverColor="#2867B2" />
      </a>
      <a href="/ma">
        <style.StyledIcon icon={faEnvelope} hoverColor="maroon" />
      </a>
    </style.Container>
  )
}

export default SocialMediaIcons
