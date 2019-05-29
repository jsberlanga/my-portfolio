import React from "react"
import styled from "styled-components"
import { withPrefix, Link } from "gatsby"

import { styles, StyledButton, HeaderSection } from "../../utils"

import {
  js_icon,
  html5_icon,
  sass_icon,
  reactjs_icon,
  apollo_icon,
  graphql_icon,
  prisma_icon,
  nodejs_icon,
  github_icon,
  firebase_icon,
  illustrator_icon,
  photoshop_icon,
} from "../../images/icons"

import { FiDownload } from "react-icons/fi"
import { FaRegFilePdf } from "react-icons/fa"
import { DiResponsive, DiMongodb } from "react-icons/di"

const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  max-width: 80rem;
  h2,
  h3 {
    font-style: italic;
    margin-bottom: 1rem;
    transform: skew(15deg);
    letter-spacing: -2px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

const AboutMeSection = styled.section`
  padding: 2rem 3em;
  background: #eeeeee;
  a {
    text-decoration: underline;
    color: ${styles.colors.yellow};
    cursor: pointer;
  }
  @media (max-width: 420px) {
    padding: 1rem 1.5rem;
  }
`

const TechnologiesSection = styled.section`
  filter: grayscale(20%);
  padding: 2rem 3rem;
  display: grid;
  h3 {
    margin-left: 1rem;
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 2.4rem;
    margin-left: 1.5rem;
    span {
      font-size: 1.7rem;
      margin: 0 1rem 0 0;
    }
    p {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
    img {
      width: 1.7rem;
      margin: 0 1rem 0 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* text-align: center; */
    li {
      /* justify-content: center; */
    }
    * {
      margin-top: 0.4rem;
    }
  }
  @media (max-width: 420px) {
    padding: 1rem 1.5rem;

    li {
      height: auto;
    }
  }
`

const MoreAboutMeSection = styled.section`
  padding: 2rem 3rem;
  margin: 2rem 0;
  background: #eeeeee;
  h2 {
    margin-bottom: 1rem;
  }
  h5 {
    margin-top: 2rem;
    font-style: italic;
  }
  p {
    margin-left: 1rem;
  }
  .date {
    font-style: italic;
    font-size: 1.1rem;
    margin-left: 0;
  }
  @media (max-width: 420px) {
    padding: 1rem 1.5rem;
  }
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
          <p>
            Hi, my name is Julio. First of all, thank you for being here! I am a
            Spaniard from Granada but I've lived in Krakow for the past years. I
            love living here.
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
        <h2>technologies I've got experience with:</h2>
        <div>
          <h3>on the front-end</h3>
          <ul>
            <li>
              <img src={js_icon} alt="js" />
              <p>ES6 Javascript</p>
            </li>
            <li>
              <img src={html5_icon} alt="html5" />
              <p>HTML5 / CSS3</p>
            </li>
            <li>
              <img src={sass_icon} alt="sass" />
              <p>SASS</p>
            </li>
            <li>
              <img src={reactjs_icon} alt="react" />
              <p>React / Redux / Gatsby / Nextjs</p>
            </li>
            <li>
              <img src={apollo_icon} alt="apollo" />
              <p>Apollo</p>
            </li>
            <li>
              <span>
                <DiResponsive />
              </span>
              <p>Responsive Layout and Design</p>
            </li>
            <li>
              <img src={illustrator_icon} alt="illustrator" />
              <img src={photoshop_icon} alt="photoshop" />
              <p>Adobe Illustrator / Photoshop</p>
            </li>
            <li>
              <img src={github_icon} alt="github" />
              <p>Version Control (GIT) / GitHub</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>on the back-end</h3>
          <ul>
            <li>
              <img src={graphql_icon} alt="graphql" />
              <p>GraphQL</p>
            </li>
            <li>
              <img src={prisma_icon} alt="prisma" />
              <p>Prisma</p>
            </li>
            <li>
              <img src={nodejs_icon} alt="nodejs" />
              <p>Node.js / Express</p>
            </li>
            <li>
              <span>
                <DiMongodb />
              </span>
              <p>MongoDB</p>
            </li>
            <li>
              <img src={firebase_icon} alt="firebase" />
              <p>Firebase</p>
            </li>
            <div className="border" />
          </ul>
        </div>
      </TechnologiesSection>
    </MainSection>
    <MoreAboutMeSection>
      <h2>work experience</h2>
      <h5>Cloud Engineer / Capgemini Polska</h5>
      <p className="date">Kraków Nov 2018 - Present</p>
      <p>
        As part of the Office 365 FastTrack Team I am responsible for the
        preparation and migration of clients’ data to the Microsoft cloud. From
        the onboarding process to the actual data migration and postmigration
        reporting.{" "}
      </p>
      <h5>IT Operations Analyst (2nd level) / Stanley Black & Decker</h5>
      <p className="date">Warsaw Jun 2017 – Oct 2017</p>
      <p>
        Part of the ITSM Change Management team and responsible for the later
        deployment and implementation of the technologies VMWARE AirWatch
        support for Android and Apple devices, Avecto Access Management and
        Zscaler Cloud Security. Responsible for administering PowerShell
        scripting for AD User Management and Exchange Online.
      </p>
      <h5>IT Operations Analyst / Stanley Black & Decker</h5>
      <p className="date">Warsaw Nov 2016 – Jun 2017</p>
      <p>
        Responsible for providing remote and onsite IT support for our internal
        employees. Managing over 40.000 Network and Non-Standard Accounts in
        Active Directory, SAP and over 100 different applications.{" "}
      </p>
      <h5>IT Specialist / HCL Poland</h5>
      <p className="date">Kraków Oct 2013 – Oct 2016</p>
      <p>
        Responsible for diagnosing and resolving end-user network, hardware and
        software problems, MS Office, Internet, dial-in, TCP/IP and local-area
        network access problems via telephone / email including remote access. 
        Software deployment. Installing applications and drivers, coordinating
        all hardware and software upgrades and performing backups.
      </p>
      <h5>Finance and Accounting Process Analyst / Capgemini Polska</h5>
      <p className="date">Kraków Jul 2012 – Sep 2013</p>
      <p>
        Operating SAP I was responsible for performing the day to day processing
        of financial transactions to ensure the correct and timely processing of
        data.
      </p>
    </MoreAboutMeSection>
  </>
)

export default About
