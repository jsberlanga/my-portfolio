import React from "react"
import styled from "styled-components"
import { FiArrowRightCircle } from "react-icons/fi"
import { styles } from "./index"

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background: linear-gradient(
    to right,
    rgba(245, 245, 245, 0) 0%,
    rgba(245, 245, 245, 0.2) 60%,
    rgba(245, 245, 245, 0.4) 100%
  );
  text-align: right;
  max-width: 20rem;
  margin: 0 auto;
  border-radius: 5rem;
  cursor: pointer;
  h5 {
    color: ${styles.colors.mainLight};
  }
  h4 {
    font-size: 1.2rem;
  }
  .icon {
    transition: all 0.5s ease-in-out;
    position: absolute;
    margin-left: -15rem;
    opacity: 0;
  }
  &:hover {
    border-radius: 2rem;

    h5 {
      opacity: 0;
      transition: all 0.4s ease-in-out;
    }
    .icon {
      display: block;
      margin-left: 0rem;
      font-size: 1.4rem;
      opacity: 1;
      transform: scale(1.4);
    }
  }
`

const HomeButton = ({ buttonTitle }) => {
  return (
    <StyledButton>
      <FiArrowRightCircle className="icon" />
      <h5 style={{ fontSize: "1.7rem", transform: "skew(10deg)" }}>
        {buttonTitle}
      </h5>
    </StyledButton>
  )
}

export { HomeButton }
