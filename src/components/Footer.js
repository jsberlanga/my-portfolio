import React from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"

const date = new Date().getFullYear()

const StyledFooter = styled.footer`
  position: absolute;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  right: 0;
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
