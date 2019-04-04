import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import SEO from "../components/seo"
import { StyledButton, HeaderSection } from "../utils"

import apollo from "../images/icons/apollo.svg"
import graphql from "../images/icons/graphql.svg"

import { FiDownload } from "react-icons/fi"
import { FaVuejs } from "react-icons/fa"
import {
  DiCss3,
  DiFirebase,
  DiGithubBadge,
  DiIllustrator,
  DiJsBadge,
  DiNodejsSmall,
  DiPhotoshop,
  DiReact,
  DiResponsive,
  DiSass,
  DiMongodb,
} from "react-icons/di"

const TechnologiesSection = styled.section`
  display: grid;
  grid-template-columns: 30% 35% 35%;
  li {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 3rem;
    span {
      font-size: 2rem;
      margin: 0 1rem 0 0;
    }
    p {
      margin-bottom: 0;
    }
    img {
      width: 2rem;
      margin: 0 1rem 0 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    li {
      justify-content: center;
    }
    * {
      margin-top: 0.4rem;
    }
  }
`

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <HeaderSection>
      <h5 style={{ fontStyle: "italic" }}>
        Check what I've done over the years
      </h5>
      <h1>Dig a little deeper</h1>
      <StyledButton
        width="7rem"
        style={{ height: "7rem", justifyContent: "center", marginTop: 0 }}
      >
        <h5>resume</h5>
        <FiDownload className="fromTop" />
      </StyledButton>
    </HeaderSection>
    <TechnologiesSection>
      <h4>TECHNOLOGIES</h4>
      <div>
        <h5>DAY-TO-DAY COMFORT</h5>
        <ul>
          <li>
            <span>
              <DiReact />
            </span>
            <p>React / Redux</p>
          </li>
          <li>
            <span>
              <DiJsBadge />
            </span>
            <p>ES6 Javascript</p>
          </li>
          <li>
            <span>
              <DiCss3 />
            </span>
            <p>HTML5 / CSS3</p>
          </li>
          <li>
            <span>
              <DiSass />
            </span>
            <p>SASS</p>
          </li>
          <li>
            <span>
              <DiReact />
            </span>
            <p>React / Redux</p>
          </li>
          <li>
            <span>
              <DiNodejsSmall />
            </span>
            <p>Node.js / Express</p>
          </li>
          <li>
            <span>
              <DiMongodb />
            </span>
            <p>MongoDB</p>
          </li>
          <li>
            <span>
              <DiFirebase />
            </span>
            <p>Firebase</p>
          </li>
          <li>
            <span>
              <DiGithubBadge />
            </span>
            <p>Version Control (GIT) / GitHub</p>
          </li>
          <li>
            <span>
              <DiResponsive />
            </span>
            <p>Responsive Layout and Design</p>
          </li>
          <li />
        </ul>
      </div>
      <div>
        <h5>EXPERIENCE WITH</h5>
        <ul>
          <li>
            <span>
              <FaVuejs />
            </span>
            <p>Vue.js / Vuex</p>
          </li>
          <li>
            <img src={graphql} alt="graphql" />
            <p>GraphQL</p>
          </li>
          <li>
            <img src={apollo} alt="apollo" />
            <p>Apollo</p>
          </li>
          <li>
            <span>
              <DiIllustrator />
            </span>
            <p>Adobe Illustrator</p>
          </li>
          <li>
            <span>
              <DiPhotoshop />
            </span>
            <p>Adobe Photoshop</p>
          </li>
        </ul>
      </div>
    </TechnologiesSection>
  </Layout>
)

export default About
