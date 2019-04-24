import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactModal from "react-modal"
import Img from "gatsby-image"
import styled from "styled-components"

import { FaGithub, FaRegWindowRestore, FaRegLaughBeam } from "react-icons/fa"

import { Button, HeaderSection, styles } from "../../../../utils"
import { CloseButton, customStyles, imageStyles } from "../../Gallery"

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

const Icons = styled.div`
  font-size: 4rem;
  * {
    cursor: pointer;
    margin: 0 1rem;
    :hover {
      color: ${styles.colors.yellow};
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
          <Img style={imageStyles} fluid={data.main.childImageSharp.fluid} />
          <div>
            <h3>Live website - Duda Transport</h3>
            <div>
              <h5 style={{ fontStyle: "italic", margin: "0.4rem 0" }}>
                The tech behind:
              </h5>
              <p>
                Reactjs, Gatsby, Styled Components, Netlify, among others...
              </p>
            </div>
            <div onClick={handleOpenModal}>
              <Button
                width="20rem"
                buttonTitle="know more"
                className="fromLeft"
              />
            </div>

            <ReactModal
              isOpen={showModal}
              contentLabel="Example Modal"
              onRequestClose={handleCloseModal}
              style={customStyles}
            >
              <CloseButton onClick={handleCloseModal}>X</CloseButton>
              <HeaderSection>
                <h5 style={{ fontStyle: "italic" }}>
                  Go ahead and check the code & the website
                </h5>
                <Icons>
                  <a
                    href="https://github.com/jsberlanga/gatsby-dudatransport"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="http://www.dudatransport.com/"
                    rel="noopener noreferrer"
                  >
                    <FaRegWindowRestore />
                  </a>
                </Icons>
                <h1>Duda Transport</h1>
                <div>
                  For creating this website I used the following technology:
                </div>
                <ul style={{ fontStyle: "italic" }}>
                  <li>
                    <span style={{ fontWeight: "700" }}>React</span>, simply
                    because I love it. <FaRegLaughBeam />
                  </li>
                  <li>
                    <span style={{ fontWeight: "700" }}>Gatsby</span> as the
                    static site generator
                  </li>
                  <li>
                    <span style={{ fontWeight: "700" }}>Styled components</span>{" "}
                    for styling React components
                  </li>
                  <li>
                    <span style={{ fontWeight: "700" }}>Graphql</span> barely
                    for grabing image data
                  </li>
                  <li>
                    <span style={{ fontWeight: "700" }}>Netlify</span> for
                    deploying and management{" "}
                  </li>
                </ul>
              </HeaderSection>
              <HeaderSection>
                <h5 style={{ fontStyle: "italic" }}>
                  You can find below some screenshots of the website:
                </h5>
              </HeaderSection>

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
            </ReactModal>
          </div>
        </>
      )
    }}
  />
)

export default DudaTransportProject
