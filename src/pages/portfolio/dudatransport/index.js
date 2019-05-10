import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FaGithub, FaRegWindowRestore } from "react-icons/fa"

import { HeaderSection, ProjectWrapper } from "../../../utils"
import { imageStyles } from "../../../components/Portfolio"

const GET_IMAGES = graphql`
  {
    main: file(relativePath: { eq: "portfolio/dudatransport/main.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    landing: file(relativePath: { eq: "portfolio/dudatransport/landing.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    contact: file(relativePath: { eq: "portfolio/dudatransport/contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    thanks: file(relativePath: { eq: "portfolio/dudatransport/thanks.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const b = styled.span`
  font-weight: 700;
`

export default () => (
  <Layout>
    <HeaderSection>
      <SEO
        title="Duda Transport Project"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h5>A transport family business website</h5>
      <h1>Duda Transport Project</h1>
    </HeaderSection>

    <ProjectWrapper>
      <div className="icons">
        <h5>Go ahead and check the code & the website</h5>
        <a
          href="https://github.com/jsberlanga/gatsby-dudatransport"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="http://www.dudatransport.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaRegWindowRestore />
        </a>
      </div>
      <div className="text">
        <h5>For creating this website I used the following technology:</h5>
        <p>
          For the Frontend I used<b> React</b> for building the interface
          together with
          <b> Gatsby</b> as a static site generator.
        </p>
        <p>
          <b> Adobe Illustrator</b> for the design of the logo and the icons.
        </p>
        <p>
          And, for deploying this website I got the use of <b>Netlify</b>.
        </p>
      </div>
      <StaticQuery
        query={GET_IMAGES}
        render={data => {
          return (
            <div className="images">
              <Img
                style={imageStyles}
                fluid={data.landing.childImageSharp.fluid}
              />
              <Img
                style={imageStyles}
                fluid={data.contact.childImageSharp.fluid}
              />
              <Img
                style={imageStyles}
                fluid={data.thanks.childImageSharp.fluid}
              />
              <p>
                <Link to="/portfolio">
                  Go back to my{" "}
                  <span
                    style={{
                      color: "#eac100",
                      borderBottom: "2px solid #eac100",
                      cursor: "pointer",
                    }}
                  >
                    portfolio
                  </span>
                </Link>
              </p>
            </div>
          )
        }}
      />
    </ProjectWrapper>
  </Layout>
)
