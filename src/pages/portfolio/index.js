import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Portfolio from "../../components/Portfolio"

import { HeaderSection } from "../../utils"

export default () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <HeaderSection>
      <h5 style={{ fontStyle: "italic" }}>
        These are some projects I've created
      </h5>
      <h1>Check out my work</h1>
    </HeaderSection>
    <Portfolio />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)
