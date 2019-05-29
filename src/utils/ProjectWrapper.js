import styled from "styled-components"
import { colors } from "./styles"

const ProjectWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
  .text {
    text-align: left;
    h5 {
      font-style: italic;
      margin: 1rem 0 1rem;
    }
    display: grid;
    grid-template-columns: 3.3fr 1fr;
    grid-gap: 2rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
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
  .images {
    display: grid;
    grid-gap: 2rem;
  }
  .icons {
    text-align: center;
    background: ${colors.mainDark};
    color: ${colors.mainLight};
    padding: 2rem 0 0rem;
    max-width: 44rem;
    margin: 0 auto;
    a {
      font-size: 4rem;
      cursor: pointer;
      margin: 0 1rem;
      :hover {
        transition: all 0.4s;
        color: #e4508f;
      }
    }
  }
  @media (max-width: 420px) {
    max-width: 95vw;
  }
`
export { ProjectWrapper }
