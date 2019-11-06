import React from "react"
import ptStyles from "../styles/projectTeaser.module.scss"

class ProjectTeaser extends React.Component {
  render() {
    return (
      <div className={ptStyles.wrapper}>
        <h1 className={ptStyles.title}>{this.props.title}</h1>
      </div>
    )
  }
}

export default ProjectTeaser
