import React from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"

const date = new Date().getFullYear()

const StyledFooter = styled.footer`
  position: relative;
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Footer = () => (
  <StyledFooter>
    <div>© {date}, </div>
    <a href="https://www.thesourcode.com">
      thesourcode.com. All rights reserved
    </a>
    <img
      src={logo}
      alt="logo"
      style={{
        width: "2.4rem",
        transform: "rotate(180deg)",
        marginLeft: "0.4rem",
      }}
    />
  </StyledFooter>
)

export default Footer
