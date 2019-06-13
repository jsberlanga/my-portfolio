import React from "react"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Contact />
  </Layout>
)

export default ContactPage
