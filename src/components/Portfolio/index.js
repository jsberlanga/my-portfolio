import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { Button } from "../../utils"

const GET_IMAGES = graphql`
  {
    dudatransportImage: file(
      relativePath: { eq: "portfolio/dudatransport/main.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sourdoughbakersImage: file(
      relativePath: { eq: "portfolio/sourdoughbakers/imageOne.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    skinnyalfredoImage: file(
      relativePath: { eq: "portfolio/skinnyalfredo/imageOne.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const imageStyles = {
  boxShadow: "1px 1px 10px -5px lightgrey",
  marginBottom: "2rem",
}

const GalleryContainer = styled.div`
  .card {
    background: #eeeeee;
    box-shadow: 7px 7px 10px -10px #414f5d;
  }
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  grid-row-gap: 2rem;
  li {
    margin-left: 1rem;
  }
  h4 {
    font-style: italic;
    margin: 0.4rem 0;
  }
  .text-more {
    margin-bottom: 3rem;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
  }
`

const Portfolio = () => (
  <StaticQuery
    query={GET_IMAGES}
    render={data => {
      return (
        <GalleryContainer>
          <div className="card">
            <Img
              style={imageStyles}
              fluid={data.dudatransportImage.childImageSharp.fluid}
            />
            <div className="text-more">
              <h2>Live website - Duda Transport</h2>
              <div>
                <h4>The tech behind:</h4>
                <p>
                  Reactjs, Gatsby, Styled Components, Netlify, among others...
                </p>
              </div>
              <div>
                <Link to="/portfolio/dudatransport">
                  <Button
                    width="20rem"
                    buttonTitle="know more"
                    className="fromLeft"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <Img
              style={imageStyles}
              fluid={data.sourdoughbakersImage.childImageSharp.fluid}
            />
            <div className="text-more">
              <h2>Project site - Sourdough Bakers</h2>
              <div>
                <h4>The tech behind:</h4>
                <p>
                  Reactjs, Nextjs, Apollo Client, Yoga Server, Prisma, Stripe,
                  among others...
                </p>
              </div>
              <Link to="/portfolio/sourdoughbakers">
                <Button
                  width="20rem"
                  buttonTitle="know more"
                  className="fromLeft"
                />
              </Link>
            </div>
          </div>
          <div className="card">
            <Img
              style={imageStyles}
              fluid={data.skinnyalfredoImage.childImageSharp.fluid}
            />
            <div className="text-more">
              <h2>Coming soon - Skinny Alfredo</h2>
              <div>
                <h4>The tech behind:</h4>
                <p>Pure and simple ES6 Javascript</p>
              </div>
              <Link to="/portfolio/skinnyalfredo">
                <Button
                  width="20rem"
                  buttonTitle="know more"
                  className="fromLeft"
                />
              </Link>
            </div>
          </div>
        </GalleryContainer>
      )
    }}
  />
)

export { Portfolio as default, imageStyles }
