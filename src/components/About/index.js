import React from "react"
import styled from "styled-components"
import { withPrefix, Link } from "gatsby"

import { styles, StyledButton, HeaderSection } from "../../utils"

import apollo from "../../images/icons/apollo.svg"
import graphql from "../../images/icons/graphql.svg"
import prisma from "../../images/icons/prisma.svg"

import { FiDownload } from "react-icons/fi"
import { FaVuejs, FaRegLaughBeam, FaRegFilePdf } from "react-icons/fa"
import {
  DiCss3,
  DiFirebase,
  DiGithubBadge,
  DiIllustrator,
  DiJsBadge,
  DiNodejsSmall,
  DiPhotoshop,
  DiReact,
  DiResponsive,
  DiSass,
  DiMongodb,
} from "react-icons/di"

import image from "../../images/about/1.jpg"

const MainSection = styled.section`
  max-width: 80rem;
  /* background: rgba(54, 79, 107, 0.1); */
  h2,
  h3 {
    font-style: italic;
    margin-bottom: 1rem;
  }
`

const AboutMeSection = styled.section`
  text-align: center;
  padding: 2rem 3em;
  background: #eeeeee;
  a {
    text-decoration: underline;
    color: ${styles.colors.yellow};
    cursor: pointer;
  }
`

const TechnologiesSection = styled.section`
  padding: 2rem 3rem;
  margin: 2rem 0;
  /* background: #eeeeee; */
  display: grid;
  grid-template-columns: 30% 35% 35%;
  li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 3rem;
    span {
      font-size: 2rem;
      margin: 0 1rem 0 0;
    }
    p {
      margin-bottom: 0;
    }
    img {
      width: 2rem;
      margin: 0 1rem 0 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    li {
      justify-content: center;
    }
    * {
      margin-top: 0.4rem;
    }
  }
`

const MoreAboutMeSection = styled.section`
  padding: 2rem 3rem;
  margin: 2rem 0;
  background: #eeeeee;
`

const About = () => (
  <>
    <HeaderSection>
      <h5>Check what I've done over the years</h5>
      <h1>Dig a little deeper</h1>
      <div style={{ width: "6rem", margin: " 0 auto" }}>
        <a
          rel="noopener noreferrer"
          href={withPrefix("Julio Soto Resume.pdf")}
          target="_blank"
        >
          <StyledButton
            style={{
              height: "7rem",
              justifyContent: "center",
              marginTop: "0",
              boxShadow: `1px 1px 7px -3px ${styles.colors.darkGray}`,
            }}
          >
            <div>
              <h5 style={{ fontWeight: 600, fontStyle: "italic" }}>
                resume
                <FaRegFilePdf
                  style={{ fontSize: "2.5rem", marginTop: "0.3rem" }}
                />
              </h5>
            </div>

            <FiDownload className="fromTop" />
          </StyledButton>
        </a>
      </div>
    </HeaderSection>
    <MainSection>
      <AboutMeSection>
        <h2>a little about me</h2>
        <div>
          <img src={image} width="300" alt="me-and-wilson" />
          <p>
            Hi, my name is Julio. I am a Spaniard from Granada but I've lived in
            Krakow for the past years. I love living here.
          </p>
          <p>
            First of all, thank you for being here! Just to make sure: I am the
            one on the back of the picture. <FaRegLaughBeam />
          </p>
          <p>
            A couple of words about my professional life: I started my way into
            IT, some years ago when I got hired by{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.hcltech.com/geo-presence/poland"
            >
              HCL Poland
            </a>{" "}
            as an IT Specialist. From there I then went to{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.sbdinc.pl"
            >
              Stanley Black and Decker Polska
            </a>{" "}
            as an IT Operations Analyst for the 2nd level of support. Although I
            enjoyed every minute of my time there, the job was based in Warsaw
            and for personal reasons I needed to move back to Krakow. And here I
            am, working as a Cloud Engineer for{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.capgemini.com/pl-pl/"
            >
              Capgemini Polska.
            </a>{" "}
          </p>
          <p>
            Since late 2018 I've grown a love for web development. It started
            all of a sudden and since then, I know that there is no turning back
            from here. I feel addicted to coding. I love it, every part of it,
            because it's challenging and fun and sometimes I get mad at it but I
            always find my way back to it, because I cannot stop thinking about
            it, day or night. Definitely, I want it to be a full-time job. I am
            open for any opportunities in this field, particularly as a
            Front-End or Full Stack Developer, so feel free to{" "}
            <Link to="/contact">say hi</Link> and find out how to work with me.
          </p>
        </div>
      </AboutMeSection>
      <TechnologiesSection>
        <h2>technologies</h2>
        <div>
          <h2>day-to-day comfort</h2>
          <ul>
            <li>
              <span>
                <DiJsBadge />
              </span>
              <p>ES6 Javascript</p>
            </li>
            <li>
              <span>
                <DiCss3 />
              </span>
              <p>HTML5 / CSS3</p>
            </li>
            <li>
              <span>
                <DiSass />
              </span>
              <p>SASS</p>
            </li>
            <li>
              <span>
                <DiReact />
              </span>
              <p>React / Redux</p>
            </li>
            <li>
              <img src={graphql} alt="graphql" />
              <p>GraphQL</p>
            </li>
            <li>
              <img src={apollo} alt="apollo" />
              <p>Apollo</p>
            </li>
            <li>
              <img src={prisma} alt="prisma" />
              <p>Prisma</p>
            </li>
            <li>
              <span>
                <DiNodejsSmall />
              </span>
              <p>Node.js / Express</p>
            </li>
            <li>
              <span>
                <DiGithubBadge />
              </span>
              <p>Version Control (GIT) / GitHub</p>
            </li>
            <li>
              <span>
                <DiResponsive />
              </span>
              <p>Responsive Layout and Design</p>
            </li>
            <li />
          </ul>
        </div>
        <div>
          <h2>experience with</h2>
          <ul>
            <li>
              <span>
                <FaVuejs />
              </span>
              <p>Vue.js / Vuex</p>
            </li>

            <li>
              <span>
                <DiMongodb />
              </span>
              <p>MongoDB</p>
            </li>
            <li>
              <span>
                <DiFirebase />
              </span>
              <p>Firebase</p>
            </li>
            <li>
              <span>
                <DiIllustrator />
              </span>
              <p>Adobe Illustrator</p>
            </li>
            <li>
              <span>
                <DiPhotoshop />
              </span>
              <p>Adobe Photoshop</p>
            </li>
          </ul>
        </div>
      </TechnologiesSection>
      <MoreAboutMeSection>
        <h2>some more about me</h2>
        <div>
          <p>
            Even though lately I haven't done a lot more other than programming,
            in my spare time, there are other things I treasure too. I am an
            avid reader. Some of my favorite works are:
          </p>
        </div>
      </MoreAboutMeSection>
    </MainSection>
  </>
)

export default About
