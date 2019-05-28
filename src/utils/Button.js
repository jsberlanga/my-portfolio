import React from "react"
import styled from "styled-components"
import { FiArrowRightCircle } from "react-icons/fi"

import { styles } from "../utils"

const StyledButton = styled.div`
  margin: 2rem auto;
  width: ${props => props.width};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background: ${styles.colors.yellow};
  cursor: pointer;
  position: relative;
  font-style: italic;
  color: ${props => props.color === "light" && `${styles.colors.mainLight}`};
  :before {
    content: "";
    border-top: ${props =>
      props.border ? `3px solid ${styles.colors.yellow}` : ""};
    border-left: ${props =>
      props.border ? `3px solid ${styles.colors.yellow}` : ""};
    width: 5%;
    height: 30%;
    position: absolute;
    bottom: 76%;
    right: 95.75%;
  }
  :after {
    content: "";
    border-bottom: ${props =>
      props.border ? `3px solid ${styles.colors.yellow}` : ""};
    border-right: ${props =>
      props.border ? `3px solid ${styles.colors.yellow}` : ""};
    width: 5%;
    height: 30%;
    position: absolute;
    top: 76%;
    left: 95.9%;
  }
  .fromLeft {
    transition: all 0.5s ease-in-out;
    position: absolute;
    margin-left: -10rem;
    opacity: 0;
  }
  &:hover {
    h5 {
      opacity: 0;
      transition: all 0.4s ease-in-out;
    }
    .fromLeft {
      display: block;
      margin-left: 0rem;
      font-size: 1.4rem;
      opacity: 1;
      transform: scale(1.4);
    }
  }
  .fromTop {
    transition: all 0.3s ease-in-out;
    position: absolute;
    margin-top: -4rem;
    opacity: 0;
  }
  &:hover {
    h5 {
      opacity: 0;
      transition: all 0.4s ease-in-out;
    }
    .fromTop {
      display: block;
      margin-top: 0rem;
      font-size: 1.4rem;
      opacity: 1;
      transform: scale(1.4);
    }
  }
`

const Button = ({ buttonTitle, width, className, border, color }) => {
  return (
    <StyledButton width={width} border color={color}>
      <FiArrowRightCircle className={className} />
      <h5>{buttonTitle}</h5>
    </StyledButton>
  )
}

const CloseButton = styled.button`
  background: #eac100;
  color: #10316b;
  padding: 1rem;
  border-radius: 0.1rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: #10316b;
    color: #eac100;
  }
`

export { Button, StyledButton, CloseButton }
