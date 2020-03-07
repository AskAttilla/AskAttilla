import React from "react"
import iconSocialStyles from "../styles/iconSocial.module.sass"
import Icon from "../assets/svg/index"

const iconSocial = props => (
  <div className={iconSocialStyles.container}>
    <a href={props.website} className={iconSocialStyles.link}>
      <Icon className={iconSocialStyles.icon} name={props.type} />
    </a>
  </div>
)

export default iconSocial
