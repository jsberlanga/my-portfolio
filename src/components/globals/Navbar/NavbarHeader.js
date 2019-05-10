import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../../utils"
import logo from "../../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"

const HeaderWrapper = styled.div`
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    cursor: pointer;
    color: ${styles.colors.mainDark};
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

const NavbarLogo = ({ handleNavbar }) => (
  <HeaderWrapper>
    <Link to="/">
      <img
        src={logo}
        alt="personal logo"
        style={{ width: "4rem", cursor: "pointer" }}
      />
    </Link>
    <FaAlignRight
      className="toggle-icon"
      onClick={() => {
        handleNavbar()
      }}
    />
  </HeaderWrapper>
)

export default NavbarLogo
