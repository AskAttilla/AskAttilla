import { Link } from "gatsby"
import React from "react"

import menuStyles from "../styles/menu.module.sass"

import HomeIcon from "../assets/svg/home.svg"
import ProjectsIcon from "../assets/svg/list.svg"
import ContactIcon from "../assets/svg/mail.svg"

const Menu = () => (
  <div className={menuStyles.container}>
    <nav>
      <ul>
        <li>
          <Link
            to="projects"
            className={menuStyles.mobileMenuLink}
            activeStyle={{
              borderTop: "2px solid orange",
              marginBottom: "2px",
            }}
          >
            <ProjectsIcon className={menuStyles.linkIcon} />
            <h2 className={menuStyles.title}>Projects</h2>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={menuStyles.mobileMenuLink}
            activeStyle={{
              borderTop: "2px solid orange",
              marginBottom: "2px",
            }}
          >
            <HomeIcon className={menuStyles.linkIcon} />
            <h2 className={menuStyles.title}>Home</h2>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className={menuStyles.mobileMenuLink}
            activeStyle={{
              borderTop: "2px solid orange",
              marginBottom: "2px",
            }}
          >
            <ContactIcon className={menuStyles.linkIcon} />
            <h2 className={menuStyles.title}>Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Menu
