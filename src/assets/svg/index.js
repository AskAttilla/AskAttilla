import React from "react"

import Github from "./github.svg"
import GithubCrossed from "./github_crossed.svg"
import Eye from "./eye.svg"
import EyeCrossed from "./eye_crossed.svg"
import LinkedIn from "./linkedin.svg"

const Icon = props => {
  switch (props.name) {
    case "github":
      return <Github />
    case "github_crossed":
      return <GithubCrossed />
    case "eye":
      return <Eye />
    case "eye_crossed":
      return <EyeCrossed />
    case "linkedin":
      return <LinkedIn />
    default:
      return <div />
  }
}

export default Icon
