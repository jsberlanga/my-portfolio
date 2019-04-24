import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactModal from "react-modal"
import Img from "gatsby-image"
import styled from "styled-components"

import { FaGithub, FaRegWindowRestore } from "react-icons/fa"

import { Button, HeaderSection, styles } from "../../../../utils"
import { CloseButton, customStyles, imageStyles } from "../../Gallery"

const GET_IMAGES = graphql`
  {
    landing: file(
      relativePath: { eq: "portfolio/sourdoughbakers/landing.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    shop: file(relativePath: { eq: "portfolio/sourdoughbakers/shop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    profile: file(
      relativePath: { eq: "portfolio/sourdoughbakers/profile.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    cart: file(relativePath: { eq: "portfolio/sourdoughbakers/cart.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    order: file(relativePath: { eq: "portfolio/sourdoughbakers/order.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    signup: file(relativePath: { eq: "portfolio/sourdoughbakers/signup.png" }) {
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

const b = styled.span`
  font-weight: 700;
`

const TextWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(65, 79, 93, 0.5)"

const SourdoughBakersProject = ({
  showModal,
  handleCloseModal,
  handleOpenModal,
}) => (
  <StaticQuery
    query={GET_IMAGES}
    render={data => {
      return (
        <>
          <Img style={imageStyles} fluid={data.landing.childImageSharp.fluid} />
          <div>
            <h3>Project site - Sourdough Bakers</h3>
            <div>
              <h5 style={{ fontStyle: "italic", margin: "0.4rem 0" }}>
                The tech behind:
              </h5>
              <p>
                Reactjs, Nextjs, Apollo Client, Yoga Server, Prisma, Stripe,
                among others...
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
                    href="https://github.com/jsberlanga/sourdough-bakers"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://sourdough-bakers.herokuapp.com/"
                    rel="noopener noreferrer"
                  >
                    <FaRegWindowRestore />
                  </a>
                </Icons>
                <TextWrapper>
                  <h1>Sourdough Bakers</h1>
                  <div>
                    For creating this website I used the following technology:
                  </div>
                  <br />
                  <ul style={{ fontStyle: "italic" }}>
                    <li>
                      <p>
                        For the Frontend I used<b> Reactjs</b> for building the
                        interface together with
                        <b> Nextjs</b> for the server side rendering and
                        routing. For Data Management I used <b>Apollo Client</b>{" "}
                        for performing the GraphQL Mutations and Queries. And
                        last but not least <b> Styled components</b> for styling
                        React components
                      </p>
                      <p>
                        For the Backend I used a <b>Yoga Server</b> for the
                        Mutation and Query Resolvers and <b>Prisma,</b> the glue
                        between the database and the GraphQL server.
                      </p>
                      <p>
                        And finally <b>Heroku</b> for deploying both the backend
                        and the frontend of the app.
                      </p>
                    </li>
                  </ul>
                </TextWrapper>
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
                fluid={data.shop.childImageSharp.fluid}
              />
              <Img
                style={imageStyles}
                fluid={data.profile.childImageSharp.fluid}
              />
              <Img
                style={imageStyles}
                fluid={data.cart.childImageSharp.fluid}
              />
              <Img
                style={imageStyles}
                fluid={data.order.childImageSharp.fluid}
              />
              <Img
                style={imageStyles}
                fluid={data.signup.childImageSharp.fluid}
              />
            </ReactModal>
          </div>
        </>
      )
    }}
  />
)

export default SourdoughBakersProject
