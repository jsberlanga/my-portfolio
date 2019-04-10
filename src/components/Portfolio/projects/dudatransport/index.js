import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactModal from "react-modal"
import Img from "gatsby-image"

import { Button } from "../../../../utils"
import { CloseButton, customStyles, imageStyles } from "../../Gallery"

const GET_IMAGES = graphql`
  {
    imageOne: file(relativePath: { eq: "portfolio/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imageTwo: file(relativePath: { eq: "portfolio/2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(65, 79, 93, 0.5)"

const DudaTransportProject = ({
  showModal,
  handleCloseModal,
  handleOpenModal,
}) => (
  <StaticQuery
    query={GET_IMAGES}
    render={data => {
      return (
        <>
          <Img
            style={imageStyles}
            fluid={data.imageOne.childImageSharp.fluid}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              modi quod distinctio non ullam officiis, ratione eos illo veniam
              odio eaque quos quis ipsa doloribus, voluptatem exercitationem,
              delectus accusamus repellendus?
            </p>
            <div onClick={handleOpenModal}>
              <Button buttonTitle="...more" className="fromLeft" />
            </div>
            <ReactModal
              isOpen={showModal}
              contentLabel="Example Modal"
              onRequestClose={handleCloseModal}
              style={customStyles}
            >
              <CloseButton onClick={handleCloseModal}>X</CloseButton>
              <h1>Duda Transport - Project</h1>
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
                fluid={data.imageOne.childImageSharp.fluid}
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur illo rem iure molestiae, corporis deleniti aliquam
                debitis quo animi deserunt autem laudantium delectus magni vel
                at dolores! Quod, velit nulla.
              </p>
            </ReactModal>
          </div>
        </>
      )
    }}
  />
)

export default DudaTransportProject
