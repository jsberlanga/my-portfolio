import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import SEO from "../components/seo"
// import { BannerButton } from "../utils"

const Header = styled.header`
  min-height: 80vh;
`

const TechnologiesSection = styled.section`
  display: grid;
  grid-template-columns: 30% 35% 35%;
  border: 2px solid black;
  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    h4 {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      margin: 0 auto;
    }
  }
`

const Button = styled.div`
  background: red;
  padding: 0.4rem 0.8rem;
  width: 12rem;
  border-radius: 0.2rem;
  margin-top: 0.4rem;
  cursor: pointer;
`

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Header>
      <section>
        <h5 style={{ fontStyle: "italic" }}>
          Check what I've done over the years
        </h5>
        <h1>Dig a little deeper</h1>
        <Button>Download resume</Button>
      </section>
      <TechnologiesSection>
        <h4>TECHNOLOGIES</h4>
        <div>
          <h5>DAY-TO-DAY</h5>
          <ul>
            <li>Sass / LESS</li>
            <li>HTML5 / CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h5>SOME EXPERIENCE WITH</h5>
          <ul>
            <li>Vue.js</li>
            <li>Version Control (GIT)</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </TechnologiesSection>
    </Header>
  </Layout>
)

export default About
