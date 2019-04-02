import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../components/HomePage/HomeHeader"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
