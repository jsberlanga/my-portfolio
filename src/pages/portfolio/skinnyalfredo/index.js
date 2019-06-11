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
    imageTwo: file(
      relativePath: { eq: "portfolio/skinnyalfredo/imageTwo.png" }
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
        title="Skinny Alfredo Project"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h5>A food recipe webapp</h5>
      <h1>Skinny Alfredo Project</h1>
    </HeaderSection>

    <ProjectWrapper>
      <div className="icons">
        <a
          href="https://github.com/jsberlanga/skinny-alfredo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://skinny-alfredo.netlify.com/"
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
                A pure and simple Webpack app with <b>ES6 Javascript</b>,
                following the Model-View-Controller (MVC) Design Pattern in
                JavaScript.
              </p>
              <p>
                For deploying this website I got the use of <b>Netlify</b>.
              </p>
            </div>
            <div className="text__functionality">
              <h5>Functionality:</h5>
              <p>
                This website is for the cooking enthusiasts out there. You can
                look for recipes, update the servings and of course if you like
                it, you can add it to your favourites.
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
                    fluid={data.imageTwo.childImageSharp.fluid}
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
