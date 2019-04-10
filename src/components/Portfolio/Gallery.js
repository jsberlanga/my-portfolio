import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactModal from "react-modal"
import styled from "styled-components"

import DudaTransportProject from "./projects/dudatransport"

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
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  align-content: center;
  grid-gap: 1.4rem;
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    margin-left: 1rem;
  }
  img {
    width: 2rem;
  }
  text-align: center;
`

const CloseButton = styled.button`
  background: #eac100;
  color: #10316b;
  padding: 1rem;
  border-radius: 0.1rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: #10316b;
    color: #eac100;
  }
`

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "-30%",
    bottom: "-40%",
    marginRight: "1rem",
    transform: "translate(-50%, -50%)",
    background: "#f5f5f5",
    borderRadius: "1rem",
  },
}

const imageStyles = {
  borderRadius: "1rem",
  boxShadow: "1px 1px 10px -5px black",
  marginBottom: "2rem",
}

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(65, 79, 93, 0.5)"

class Gallery extends Component {
  state = {
    showModal: false,
  }
  handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <StaticQuery
        query={GET_IMAGES}
        render={data => {
          return (
            <ImageContainer>
              <DudaTransportProject
                showModal={this.state.showModal}
                handleOpenModal={this.handleOpenModal}
                handleCloseModal={this.handleCloseModal}
              />
              <DudaTransportProject />
            </ImageContainer>
          )
        }}
      />
    )
  }
}

export { Gallery as default, CloseButton, customStyles, imageStyles }
