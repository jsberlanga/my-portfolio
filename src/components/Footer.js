import React from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"

const date = new Date().getFullYear()

const StyledFooter = styled.footer`
  position: absolute;
  height: 2.5rem;
  bottom: 0.4rem;
  right: 0;
`
const Footer = () => (
  <StyledFooter>
    <div>
      © {date},{" "}
      <a href="https://www.juliosoto.dev">juliosoto.dev. All rights reserved</a>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "2.4rem",
          transform: "rotate(180deg)",
          marginLeft: "0.4rem",
        }}
      />
    </div>
  </StyledFooter>
)

export default Footer
