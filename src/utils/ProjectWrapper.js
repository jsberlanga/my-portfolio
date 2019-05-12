import styled from "styled-components"
import { colors } from "./styles"

const ProjectWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
  .text {
    h5 {
      font-style: italic;
      margin-top: 2rem;
    }
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
        color: ${colors.yellow};
        transition: all 0.3s;
      }
    }
  }
`
export { ProjectWrapper }
