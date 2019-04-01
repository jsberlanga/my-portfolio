import React, { useState } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const defaultIcons = [
  {
    id: 0,
    icon: <FaGithub className="icon github-icon" />,
    path: "https://github.com/jsberlanga",
  },
  {
    id: 1,
    icon: <FaLinkedin className="icon linkedin-icon" />,
    path: "https://www.linkedin.com/in/jsberlanga/",
  },
  {
    id: 2,
    icon: <FaEnvelope className="icon envelope-icon" />,
    path: "mailto:jsberlanga@gmail.com",
  },
]

const IconsWrapper = styled.div`
  display: none;
  .icon {
    font-size: 1.5rem;
    margin: 0 1rem;
    ${styles.transitionDefault};
  }
  .icon:hover {
    color: ${styles.colors.yellow};
    transform: scale(1.2);
  }
  @media (min-width: 768px) {
    display: flex;
  }
`

const NavbarIcons = () => {
  const [icons] = useState(defaultIcons)
  return (
    <IconsWrapper>
      {icons.map(icon => (
        <a
          href={icon.path}
          key={icon.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.icon}
        </a>
      ))}
    </IconsWrapper>
  )
}

export default NavbarIcons
