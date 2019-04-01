import PropTypes from "prop-types"
import React from "react"
import Navbar from "./globals/Navbar"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Navbar siteTitle={siteTitle} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
