import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gallery from "../components/Portfolio/Gallery"

import { HeaderSection } from "../utils"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <HeaderSection>
      <h5 style={{ fontStyle: "italic" }}>
        Check out some projects I've worked on
      </h5>
      <h1>My work</h1>
    </HeaderSection>
    <Gallery />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default Portfolio
