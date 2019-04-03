import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gallery from "../components/Portfolio/Gallery"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{ textAlign: "center" }}>Projects I've worked on</h1>
    <Gallery />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default Portfolio
