import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeaderSection } from "../utils"

export default () => (
  <Layout>
    <HeaderSection>
      <SEO title="Thank You" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Thanks!</h1>
      <p>I'll get back to you as soon as possible!</p>
      <Link
        to="/portfolio"
        style={{
          cursor: "pointer",
          color: "#eac100",
          borderBottom: "2px solid #eac100",
        }}
      >
        Go back to my page
      </Link>
    </HeaderSection>
  </Layout>
)
