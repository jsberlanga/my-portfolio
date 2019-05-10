import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { HeaderSection } from "../../../utils"

export default () => (
  <Layout>
    <HeaderSection>
      <SEO
        title="Skinny Alfredo Project"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h5>A food recipe website</h5>
      <h1>Skinny Alfredo Project</h1>
    </HeaderSection>
  </Layout>
)
