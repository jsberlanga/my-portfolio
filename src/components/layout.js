import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { styles } from "../utils"

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
  }

p {margin-bottom: 1.15em;}

h1, h2, h3, h4, h5 {
  font-weight: 700;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 3.052em;
}

h2 {font-size: 2.441em;}

h3 {font-size: 1.953em;}

h4 {font-size: 1.563em;}

h5 {font-size: 1.25em;}

a {
  all: unset;
  cursor: pointer;
}
`

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
        <footer>
          <span>© {new Date().getFullYear()}, </span>
          <a href="https://www.thesourcode.com">
            thesourcode.com. All rights reserved{" "}
          </a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
