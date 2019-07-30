import React from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"

import { useToggle } from "../../hooks"

const NavWrapper = styled.nav`
  padding: 0.4rem 1.2rem;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const Navbar = () => {
  const [navbarOpen, toggleNavbar] = useToggle(false)

  const handleNavbar = () => toggleNavbar()

  return (
    <NavWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={navbarOpen} />
      <NavbarIcons />
      <DarkModeToggle navbarOpen={navbarOpen} />
    </NavWrapper>
  )
}

export default Navbar
