import React from "react"
import PropTypes from "prop-types"

import Menu from "../components/menu"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Menu />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
