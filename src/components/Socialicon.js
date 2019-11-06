import React from "react"
import "../styles/socialicon.scss"

class SocialIcon extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="socialIcon">
        <img src={this.props.src} alt={this.props.title} />
      </a>
    )
  }
}

export default SocialIcon
