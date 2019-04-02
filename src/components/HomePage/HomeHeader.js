import React from "react"
import styled, { keyframes } from "styled-components"
import img from "../../images/reactjs.jpg"
import { styles } from "../../utils"
import HomeBanner from "../../utils/HomeBanner"

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
`

const ImageWrapper = styled.div`
  animation: ${opacity} 1.5s ease;

  letter-spacing: 1.5px;
  text-align: center;
  min-height: calc(100vh - 10rem);
  background: linear-gradient(
      to bottom,
      rgba(54, 79, 107, 0.2) 0%,
      rgba(54, 79, 107, 0.4) 50%,
      rgba(54, 79, 107, 0.8) 100%
    ),
    url(${img});
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
  background-size: cover;
  opacity: 0.9;
  color: ${styles.colors.mainLight};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`

const Section = styled.div`
  transform: rotate(-2deg);
  margin: 2rem;
  @media (max-width: 768px) {
    transform: rotate(-4deg);
    .home-greeting {
      display: none;
    }
  }
`

const HomeHeader = () => (
  <div>
    <ImageWrapper>
      <Section>
        <h1>Hi, I'm Julio</h1>
        <h3>
          <span className="home-greeting">I'm happy you're here!</span> Welcome
          to my website.
        </h3>
      </Section>
      <Section>
        <HomeBanner bannerTitle="Check what I've been doing" />
      </Section>
    </ImageWrapper>
  </div>
)

export default HomeHeader
