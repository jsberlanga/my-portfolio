import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { Button } from "../../utils"

import {
  apollo_icon,
  gatsby_icon,
  reactjs_icon,
  netlify_icon,
  nextjs_icon,
  graphql_icon,
  prisma_icon,
  heroku_icon,
  js_icon,
} from "../../images/icons"

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
    coffeeglotImage: file(
      relativePath: { eq: "portfolio/coffeeglot/imageOne.jpg" }
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
  filter: " grayscale(30%)",
}

const GalleryContainer = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  grid-row-gap: 2rem;

  .card {
    background: #eeeeee;
    box-shadow: 7px 7px 10px -10px #414f5d;
  }
  .tech-icon {
    margin: 0.4rem;
    width: 3rem;
    height: 3rem;
    filter: grayscale(20%);
  }
  li {
    margin-left: 1rem;
  }
  h2 {
    font-size: 3.2rem;
    letter-spacing: -2px;
    transform: skew(15deg);
    font-style: italic;
    margin-top: -1rem;
  }
  h4 {
    font-style: italic;
    margin: 0.4rem 0;
    letter-spacing: -0.3px;
  }
  p {
    font-style: italic;
    font-size: 1.1rem;
  }
  .text-more {
    margin: 2rem 0;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
  }
  button {
    filter: grayscale(0%);
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
              fluid={data.coffeeglotImage.childImageSharp.fluid}
            />
            <h2>Coffeeglot Project</h2>
            <div className="text-more">
              <div>
                <h4>The technology behind this website:</h4>
                <img className="tech-icon" src={reactjs_icon} alt="react" />
                <img className="tech-icon" src={nextjs_icon} alt="nextjs" />
                <img className="tech-icon" src={apollo_icon} alt="apollo" />
                <img className="tech-icon" src={graphql_icon} alt="graphql" />
                <img className="tech-icon" src={prisma_icon} alt="prisma" />
                <img className="tech-icon" src={heroku_icon} alt="heroku" />
                <p>
                  Reactjs, Nextjs, Apollo Client, GraphQL, Prisma, among
                  others...
                </p>
              </div>
              <div>
                <Link to="/portfolio/coffeeglot">
                  <Button
                    width="20rem"
                    buttonTitle="know more"
                    className="fromLeft"
                    color="light"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <Img
              style={imageStyles}
              fluid={data.skinnyalfredoImage.childImageSharp.fluid}
            />
            <h2>Skinny Alfredo Project</h2>
            <div className="text-more">
              <div>
                <h4>The technology behind this website:</h4>
                <img className="tech-icon" src={js_icon} alt="js" />
                <img className="tech-icon" src={netlify_icon} alt="netlify" />

                <p>Webpack app with ES6 Javascript</p>
              </div>
              <div>
                <Link to="/portfolio/skinnyalfredo">
                  <Button
                    border
                    width="20rem"
                    buttonTitle="know more"
                    className="fromLeft"
                    color="light"
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
            <h2>Sourdough Bakers Project</h2>
            <div className="text-more">
              <div>
                <h4>The technology behind this website:</h4>
                <img className="tech-icon" src={reactjs_icon} alt="react" />
                <img className="tech-icon" src={nextjs_icon} alt="nextjs" />
                <img className="tech-icon" src={apollo_icon} alt="apollo" />
                <img className="tech-icon" src={graphql_icon} alt="graphql" />
                <img className="tech-icon" src={prisma_icon} alt="prisma" />
                <img className="tech-icon" src={heroku_icon} alt="heroku" />
                <p>
                  Reactjs, Nextjs, Apollo Client, GraphQL, Prisma, among
                  others...
                </p>
              </div>
              <div>
                <Link to="/portfolio/sourdoughbakers">
                  <Button
                    width="20rem"
                    buttonTitle="know more"
                    className="fromLeft"
                    color="light"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <Img
              style={imageStyles}
              fluid={data.dudatransportImage.childImageSharp.fluid}
            />
            <h2>Duda Transport Website</h2>
            <div className="text-more">
              <div>
                <h4>The technology behind this website:</h4>
                <img className="tech-icon" src={reactjs_icon} alt="react" />
                <img className="tech-icon" src={gatsby_icon} alt="gatsby" />
                <img className="tech-icon" src={netlify_icon} alt="netlify" />
                <p>React, Gatbsyjs, Netlify, among others...</p>
              </div>
              <div>
                <Link to="/portfolio/dudatransport">
                  <Button
                    width="20rem"
                    buttonTitle="know more"
                    className="fromLeft"
                    color="light"
                  />
                </Link>
              </div>
            </div>
          </div>
        </GalleryContainer>
      )
    }}
  />
)

export { Portfolio as default, imageStyles }
