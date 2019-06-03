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
    padding: 2rem 0 1rem;
    max-width: 44rem;
    margin: 0 auto;
    transition: all 0.4s;

    h5 {
      margin-bottom: 1rem;
    }
    a {
      font-size: 5rem;
      cursor: pointer;
      margin: 1.4rem;
      line-height: 1;
      /* :hover { */
        /* transition: all 0.2s; */
        /* color: ${colors.gray}; */
        /* filter: drop-shadow(25px 2px 0px ${colors.yellow}); */
      /* } */
    }

    svg {
      :hover {
        transition: all 0.2s ease;
        /* filter: invert(0.5) sepia(1) hue-rotate(366deg) saturate(4)
          brightness(1); */
        transform: scale(1.05);
        color: ${colors.gray};
      }
    }
  }
  @media (max-width: 420px) {
    max-width: 95vw;
  }
`
export { ProjectWrapper }
