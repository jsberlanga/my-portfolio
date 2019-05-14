import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { HeaderSection } from "../../../utils"

export default () => (
  <Layout>
    <HeaderSection>
      <SEO
        title="Coffeeglot Project"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h5>
        A webapp for those who prefer to learn with a coffee on their hands
      </h5>
      <h1>Coffeglot Project</h1>
      <br />
      <hr />
      <br />
      <h1 style={{ color: "#0b8457", fontStyle: "italic" }}>
        ...currently in development...
      </h1>
    </HeaderSection>
  </Layout>
)
