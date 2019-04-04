import React from "react"
import styled from "styled-components"
import { navigateTo } from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { styles, HeaderSection } from "../utils"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const StyledForm = styled.form`
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
    border-radius: 5rem;
    background: ${styles.colors.yellow};
    color: ${styles.colors.mainLight};
    padding: 1.7rem;
    width: 7rem;
    margin: 1.2rem auto;
    cursor: pointer;
    opacity: 0.9;
    position: relative;
    transition: all 0.3s;
    box-shadow: 1px 1px 6px -2px gray;
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
      transform: translate(5.7rem);
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
      transform: translate(5.7rem);
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
`

class Contact extends React.Component {
  state = {}
  handleSubmit = e => {
    console.log(e)
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Layout>
        <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
        <HeaderSection>
          <Center>
            <h5 style={{ fontStyle: "italic" }}>Go ahead and say hi!</h5>
            <h1>Contact me</h1>

            <StyledForm
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                className="form-input-name"
                name="name"
                placeholder="Name"
                type="text"
                onChange={this.handleChange}
              />
              <input
                className="form-input-email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={this.handleChange}
              />
              <input
                className="form-input-phone"
                name="phone"
                placeholder="Phone Number"
                type="text"
                onChange={this.handleChange}
              />
              <textarea
                className="form-input-message"
                name="message"
                placeholder="Message"
                onChange={this.handleChange}
              />
              <button type="submit" className="form-button" />
            </StyledForm>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
          </Center>
        </HeaderSection>
      </Layout>
    )
  }
}

export default Contact
