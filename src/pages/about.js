import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../utils"
import img from "../images/reactjs.jpg"

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ width: "90vw", margin: "0 auto" }}>
      <h1>About</h1>
      <img src={img} style={{ width: "90vw" }} alt="about" />
      <div style={{ transform: "rotate(4deg)" }}>
        <Button buttonTitle="about" />
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </div>
  </Layout>
)

export default About
