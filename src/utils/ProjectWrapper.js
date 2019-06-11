import styled from "styled-components"
import { colors } from "./styles"

const ProjectWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;

  .content {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    grid-gap: 1.8rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    .right {
      height: 80vh;
      overflow: scroll;
    }
  }

  .text {
    text-align: left;

    h5 {
      font-style: italic;
      margin: 1rem 0 1rem;
    }
  }

  .text__functionality {
    padding: 1rem;
    p {
      font-style: italic;
    }
  }

  .text__technology {
    background: #eeeeee;
    padding: 1rem;
  }

  .icons {
    text-align: center;
    background: ${colors.darkGray};
    color: ${colors.mainLight};
    padding: 1.2rem 0 0.4rem;
    max-width: 40rem;
    margin: 0 auto;
    transition: all 0.4s;

    h5 {
      margin-bottom: 1rem;
      font-style: italic;
      transform: skew(15deg);
      font-weight: 400;
    }
    a {
      font-size: 5rem;
      cursor: pointer;
      margin: 1.4rem;
      line-height: 1;
    }

    svg {
      :hover {
        transition: all 0.2s ease;
        transform: scale(1.05);
        color: ${colors.gray};
      }
    }
  }
  @media (max-width: 1200px) {
    max-width: 85vw;
  }
  @media (max-width: 420px) {
    max-width: 95vw;
  }
`
export { ProjectWrapper }
