import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../../utils"

const defaultLinks = [
  {
    id: 0,
    path: "/about",
    name: "about",
  },
  {
    id: 1,
    path: "/portfolio",
    name: "portfolio",
  },
  {
    id: 2,
    path: "/contact",
    name: "contact",
  },
]

const LinksWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: flex;
    text-transform: capitalize;
    text-decoration: none;
    justify-content: center;
    cursor: pointer;
    padding: 0.4rem 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    ${styles.transitionDefault};
    &:hover {
      background: ${styles.colors.yellow};
      color: ${styles.colors.mainLight};
      transform: scale(1.2);
      border-radius: 1rem;
    }
  }
  height: ${props => (props.open ? "9rem" : "0")};
  overflow: hidden;
  ${styles.transitionDefault};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link {
      padding: 0.4rem 2rem;
      &:hover {
        padding: 0.4rem 2rem;
        background: none;
        color: ${styles.colors.yellow};
        transform: scale(1.2);
        border-radius: 1rem;
      }
    }
  }
`

class NavbarLinks extends React.Component {
  state = {
    links: defaultLinks,
  }
  render() {
    return (
      <LinksWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => (
          <li key={link.id}>
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </li>
        ))}
      </LinksWrapper>
    )
  }
}

export default NavbarLinks
