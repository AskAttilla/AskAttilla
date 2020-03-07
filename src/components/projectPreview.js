import React from "react"
import IconSocial from "../components/iconSocial"

import projectReviewStyles from "../styles/projectReview.module.sass"

var tagString = ""

const projectReview = props => {
  if (props.tags.length !== 0 && tagString === "") {
    props.tags.forEach(e => {
      if (props.tags[props.tags.length - 1] === e) {
        tagString += e
      } else {
        tagString += e + ", "
      }
    })
  }
  return (
    <div className={projectReviewStyles.container}>
      <i src={props.picture} />
      <div className={projectReviewStyles.wrap}>
        <h1 className={projectReviewStyles.title}>{props.title}</h1>
        <p>{tagString}</p>
        <div className={projectReviewStyles.iconWrap}>
          <IconSocial
            website=""
            type="github_crossed"
            title="Github"
            className={projectReviewStyles.icon}
          />
          <IconSocial
            website="https://steinhuset.org/"
            type="eye"
            title="View project"
            className={projectReviewStyles.icon}
          />
        </div>
      </div>
    </div>
  )
}

export default projectReview
