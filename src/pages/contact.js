import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { styles } from "../utils"

const Form = styled.form`
  * {
    all: unset;
  }
  font-size: 1.4rem;
  font-weight: 700;
  justify-content: center;
  display: grid;
  grid-template-columns: 15vw 15vw 20vw;
  grid-template-rows: 7vh 7vh 21vh;
  grid-template-areas:
    "name name name"
    "email email phone"
    "message message message"
    "button button button";
  margin: 2rem;
  grid-gap: 0.1rem 1.4rem;
  input,
  textarea {
    border-bottom: 1px solid rgba(16, 49, 107, 0.5);
    font-style: italic;
    color: ${styles.colors.darkGray};
    padding: 0.7rem;

    ::placeholder {
      opacity: 0.7;
      color: ${styles.colors.darkBlue};
    }
    :focus {
      border-bottom: 1px solid rgba(16, 49, 107, 0.9);
      background: #e8e8e8;
      ::placeholder {
        color: rgba(16, 49, 107, 0.2);
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 7vh 7vh 7vh 21vh;
    grid-template-areas:
      "name"
      "email"
      "phone"
      "message"
      "button";
  }

  button {
    border-radius: 0rem;
    background: ${styles.colors.yellow};
    color: ${styles.colors.mainLight};
    padding: 1.7rem;
    width: 7rem;
    margin: 1.2rem auto;
    cursor: pointer;
    opacity: 0.9;
    position: relative;
    transition: all 0.3s;
    box-shadow: 1px 1px 4px -3px black;
    &:hover {
      background-color: ${styles.colors.green};
    }
    &:before {
      transition: all 1s;
      content: "Send";
      position: absolute;
      top: 17%;
      left: 35%;
    }
    &:hover:before {
      opacity: 0;
      transition: all 1s;
      transform: translate(7rem);
    }
    &:after {
      content: ">>>";
      position: absolute;
      top: 17%;
      left: -15%;
      transition: all 1s;
      opacity: 0;
      letter-spacing: 2px;
    }
    &:hover:after {
      opacity: 1;
      transform: translate(7rem);
    }
  }
  .form-input-name {
    grid-area: name;
  }
  .form-input-email {
    grid-area: email;
  }
  .form-input-phone {
    grid-area: phone;
  }
  .form-input-message {
    grid-area: message;
  }
  .form-button {
    grid-area: button;
  }
`

const Center = styled.div`
  text-align: center;
  min-height: 76vh;
  position: relative;
`

const Contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Center>
      <h1>Contact</h1>
      <h4 style={{ fontStyle: "italic" }}>Go ahead and say hi!</h4>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          className="form-input-name"
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          className="form-input-email"
          name="email"
          placeholder="Email"
          type="email"
        />
        <input
          className="form-input-phone"
          name="phone"
          placeholder="Phone Number"
          type="text"
        />
        <textarea
          className="form-input-message"
          name="message"
          placeholder="Message"
        />
        <button className="form-button" />
      </Form>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </Center>
  </Layout>
)

export default Contact
