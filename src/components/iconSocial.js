import React from "react"
import iconSocialStyles from "../styles/iconSocial.module.sass"
import Icon from "../assets/svg/index"

const iconSocial = props => {
  var clickable = ""
  if (props.clickable === "yes") {
    clickable = "auto"
  } else {
    clickable = "none"
  }
  return (
    <div
      className={iconSocialStyles.container}
      style={{ width: props.width, backgroundColor: props.bgColor }}
    >
      <a
        style={{ pointerEvents: clickable }}
        href={props.website}
        className={iconSocialStyles.link}
      >
        <Icon className={iconSocialStyles.icon} name={props.type} />
      </a>
    </div>
  )
}

export default iconSocial
