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
    imageOne: file(relativePath: { eq: "portfolio/coffeeglot/imageOne.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    imageTwo: file(relativePath: { eq: "portfolio/coffeeglot/imageTwo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageThree: file(
      relativePath: { eq: "portfolio/coffeeglot/imageThree.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageFour: file(
      relativePath: { eq: "portfolio/coffeeglot/imageFour.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageFive: file(
      relativePath: { eq: "portfolio/coffeeglot/imageFive.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageSix: file(relativePath: { eq: "portfolio/coffeeglot/imageSix.png" }) {
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
        title="Sourdough Bakers Project"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h5>A webapp for organizing language courses</h5>
      <h1>Coffeeglot Project</h1>
    </HeaderSection>

    <ProjectWrapper>
      <div className="icons">
        <h5>Go ahead and check the code & the website:</h5>
        <a
          href="https://github.com/jsberlanga/coffeeglot"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://coffeeglot.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IoIosGlobe />
        </a>
      </div>
      <div className="text">
        <div className="text__technology">
          <h5>For creating this website I used the following technology:</h5>
          <p>
            For the Frontend I used<b> Reactjs</b> for building the interface
            together with
            <b> Nextjs</b> for the server side rendering and routing. For Data
            Management I used <b>Apollo Client</b> for performing the GraphQL
            Mutations and Queries. And last but not least{" "}
            <b> Styled components</b> for styling React components.
          </p>
          <p>
            For the Backend I used a <b>Yoga Server</b> for the Mutation and
            Query Resolvers and <b>Prisma,</b> the glue between the database and
            the GraphQL server.
          </p>
          <p>
            And finally <b>Heroku</b> for deploying both the backend and the
            frontend of the app.
          </p>
        </div>
        <div className="text__functionality">
          <h5>Functionality:</h5>
          <p>
            I created this website as an idea from a Cafe owner point of view
            where they could offer their spot to teachers and students. This
            website is intended for those teachers and students to promote their
            courses and join them.
          </p>
        </div>
      </div>
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
              <Img
                style={imageStyles}
                fluid={data.imageFive.childImageSharp.fluid}
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
