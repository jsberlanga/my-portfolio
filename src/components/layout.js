import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { styles } from "../utils"
import logo from "../images/logo.svg"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: adobe-garamond-pro, serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    font-size: 1.2rem;
    color: ${styles.colors.mainDark};
    background: ${styles.colors.mainLight};
    width: 95vw;
    margin: 0 auto;
    position: relative;
  }

p {margin-bottom: 1.15em;}

h1, h2, h3, h4, h5 {
  font-weight: 700;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 2.488em;
}

h2 {font-size: 2.074em;}

h3 {font-size: 1.728em;}

h4 {font-size: 1.44em;}

h5 {font-size: 1.2em;}

a {
  all: unset;
  cursor: pointer;
}
`

const Footer = styled.footer`
  position: relative;
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const date = new Date().getFullYear()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer>
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
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
