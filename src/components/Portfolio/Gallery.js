import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { Button } from "../../utils"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  align-content: center;
  grid-gap: 1.4rem;
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Gallery = () => (
  <StaticQuery
    query={GET_IMAGES}
    render={data => {
      const images = data.getImages.edges
      return (
        <ImageContainer>
          {images.map(({ node }, index) => {
            return (
              <div>
                <ImageContainer>
                  <Img
                    style={{
                      borderRadius: "1rem",
                      boxShadow: "1px 1px 10px -5px black",
                    }}
                    key={index}
                    fluid={node.childImageSharp.fluid}
                  />
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae modi quod distinctio non ullam officiis, ratione
                      eos illo veniam odio eaque quos quis ipsa doloribus,
                      voluptatem exercitationem, delectus accusamus repellendus?
                    </p>
                    <Button buttonTitle="...more" className="fromLeft" />
                  </div>
                </ImageContainer>
              </div>
            )
          })}
        </ImageContainer>
      )
    }}
  />
)

export default Gallery
