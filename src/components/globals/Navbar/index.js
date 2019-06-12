import React, { useState } from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"

const NavWrapper = styled.nav`
  padding: 0.4rem 1.2rem;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavbar = () => {
    setNavbarOpen(() => (navbarOpen ? false : true))
  }
  return (
    <NavWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={navbarOpen} />
      <NavbarIcons />
      <DarkModeToggle />
    </NavWrapper>
  )
}

export default Navbar
