import React from "react"
import IconSocial from "../components/iconSocial"

import projectReviewStyles from "../styles/projectReview.module.sass"

const projectReview = props => {
  return (
    <div className={projectReviewStyles.container}>
      <div className={projectReviewStyles.previewImage}>
        <img src={props.picture} alt={props.title} />
      </div>
      <div className={projectReviewStyles.wrap}>
        <h1 className={projectReviewStyles.title}>{props.title}</h1>
        <p>{props.tags}</p>
        <div className={projectReviewStyles.iconWrap}>
          <IconSocial
            website=""
            type="github_crossed"
            title="Github"
            className={projectReviewStyles.icon}
            clickable="no"
            width="30px"
          />
          <IconSocial
            website="https://steinhuset.org/"
            type="eye"
            title="View project"
            className={projectReviewStyles.icon}
            clickable="yes"
            width="30px"
          />
        </div>
      </div>
    </div>
  )
}

export default projectReview
