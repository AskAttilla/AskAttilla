import React from "react"
import * as style from "./SocialMediaIcons_style"

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SocialMediaIcons = ({ jc, iconSize }) => {
  return (
    <style.Container justify={jc}>
      <a href="https://github.com/AskAttilla">
        <style.StyledIcon
          icon={faGithubSquare}
          hoverColor="#6e5494"
          iconSize={iconSize}
        />
      </a>
      <a href="https://www.linkedin.com/in/ask-attilla/">
        <style.StyledIcon
          icon={faLinkedin}
          hoverColor="#2867B2"
          iconSize={iconSize}
        />
      </a>
      <a href="mailto:mail@askattilla.com">
        <style.StyledIcon
          icon={faEnvelope}
          hoverColor="maroon"
          iconSize={iconSize}
          last
        />
      </a>
    </style.Container>
  )
}

export default SocialMediaIcons
