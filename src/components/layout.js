import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { styles } from "../utils"

import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
/* @import url("https://use.typekit.net/mhc1esb.css"); */
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
  }


  /* USE DARKMODE TOGGLE  START*/
  body.light-mode {
    background-color: ${styles.colors.mainLight};
    color: ${styles.colors.mainDark};;
    transition: background-color 0.3s ease;
    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: ${styles.colors.mainDark};
    }
  }

  body.dark-mode {
    background-color: ${styles.colors.mainDark};
    color: ${styles.colors.mainLight};
    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: ${styles.colors.mainLight};
    }

    section {
    background-color: ${styles.colors.mainDark2};
    color: ${styles.colors.mainLight};
    }

    .card {
      background-color: ${styles.colors.mainDark2};
      color: ${styles.colors.mainLight};
      border: 1.5px solid ${styles.colors.pink};
      box-shadow: 8px 8px 0px -2px ${styles.colors.pink};
      h2{color: ${styles.colors.pink}}
    }

    form {
      input,
      textarea {
        border-bottom: 1px solid rgba(131, 164, 222, 0.3);
        color: ${styles.colors.mainLight};
        :focus {
          color: ${styles.colors.mainLight};
          background: ${styles.colors.mainDark2};
          ::placeholder {
          color: ${styles.colors.mainLight};
        }
        }
        ::placeholder {
          color: ${styles.colors.mainLight}
        }
      }

      button {
        &:hover {
          background-color: ${styles.colors.pink};
          }
        }
      }

    .text__technology, .icons {
        background: ${styles.colors.mainDark2};
      }
    
    .dark-mode-toggle > button {
      color: #999;
      &:last-child {
        color: ${styles.colors.pink};
      }
    }
  }

.dark-mode-toggle {
  display: flex;
  & > button {
    font-size: 1.3em;
    background: none;
    border: none;
    color: ${styles.colors.yellow2};
    cursor: pointer;
    transition: color 0.3s ease;
    &:last-child {
      color: #666;
    }

    &:focus {
      outline: none;
    }
  }
  @media (max-width: 768px) {
    display: none
  }
}

.toggle-control {
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
}

input[type='checkbox'].dmcheck {
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }
}
/* USE DARKMODE TOGGLE END */

p {margin-bottom: 0.85em;}

h1, h2, h3, h4, h5 {
  font-weight: 700;
  line-height: 1.15;
}

h1, h2, h3{
  font-style: italic;
  transform: skew(15deg);
  letter-spacing: -2px;
}

h1 {
  margin-top: 0;
  font-size: 2.5em;
}

h2 {font-size: 2.1em;}

h3 {font-size: 1.75em;}

h4 {font-size: 1.45em;}

h5 {font-size: 1.25em;}

a {
  all: unset;
}
li {
  list-style: none;
  font-size: 1.6rem;
}

p,h1,h2,h3,h4,h5,span,b {
::selection {
    background: #f3c1c6;
  }
}

button, a, li, img {
  ::selection {
    background: #f3c1c6;
    color: ${styles.colors.gray};
  }
}
`

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 80rem;
  width: 90vw;
  padding-bottom: 4.5rem;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <PageContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageContainer>
  </>
)

export default Layout
