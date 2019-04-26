import React from "react"
import styled from "styled-components"
import { FiArrowRightCircle } from "react-icons/fi"

import { styles } from "../utils"

const StyledButton = styled.div`
  margin: 2rem auto 0;
  width: ${props => props.width};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background: ${styles.colors.yellow};
  border-radius: 5rem;
  cursor: pointer;

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
    transition: all 0.5s ease-in-out;
    position: absolute;
    margin-top: -10rem;
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

const Button = ({ buttonTitle, width, className }) => {
  return (
    <StyledButton width={width}>
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
