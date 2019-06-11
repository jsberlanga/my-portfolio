import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { IoLogoGithub, IoIosGlobe } from "react-icons/io"

import { HeaderSection, ProjectWrapper } from "../../../utils"
import { imageStyles } from "../../../components/Portfolio"

const GET_IMAGES = graphql`
  {
    imageOne: file(
      relativePath: { eq: "portfolio/dudatransport/imageOne.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageTwo: file(
      relativePath: { eq: "portfolio/dudatransport/imageTwo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageThree: file(
      relativePath: { eq: "portfolio/dudatransport/imageThree.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageFour: file(
      relativePath: { eq: "portfolio/dudatransport/imageFour.png" }
    ) {
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
        <a
          href="https://github.com/jsberlanga/gatsby-dudatransport"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://www.dudatransport.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoIosGlobe />
        </a>
        <h5>Go ahead and check the code & the website:</h5>
      </div>
      <div className="content">
        <div className="left">
          <div className="text">
            <div className="text__technology">
              <h5>
                For creating this website I used the following technology:
              </h5>
              <p>
                For the Frontend I used<b> React</b> for building the interface
                together with
                <b> Gatsby</b> as a static site generator.
              </p>
              <p>
                <b> Adobe Illustrator</b> for the design of the logo and the
                icons.
              </p>
              <p>
                For deploying this website I got the use of <b>Netlify</b>.
              </p>
            </div>
            <div className="text__functionality">
              <h5>Functionality:</h5>
              <p>
                I created this website for an acquaintance's truck transport
                business. They just wanted something simple but polished.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <StaticQuery
            query={GET_IMAGES}
            render={data => {
              return (
                <div className="images">
                  <Img
                    style={imageStyles}
                    fluid={data.imageOne.childImageSharp.fluid}
                  />
                  <Img
                    style={imageStyles}
                    fluid={data.imageTwo.childImageSharp.fluid}
                  />
                  <Img
                    style={imageStyles}
                    fluid={data.imageThree.childImageSharp.fluid}
                  />
                  <Img
                    style={imageStyles}
                    fluid={data.imageFour.childImageSharp.fluid}
                  />
                </div>
              )
            }}
          />
        </div>
      </div>
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
    </ProjectWrapper>
  </Layout>
)
