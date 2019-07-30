import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby-link"

import { styles, HeaderSection } from "../../utils"

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
    border-bottom: 1px solid rgba(16, 49, 107, 0.1);
    /* font-style: italic; */
    font-weight: 400;
    color: ${styles.colors.darkGray};
    padding: 0.7rem;

    ::placeholder {
      opacity: 0.7;
      color: ${styles.colors.darkGray};
    }
    :focus {
      border-bottom: 1px solid rgba(16, 49, 107, 0.9);
      background: #eeeeee;
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
    background: ${styles.colors.yellow};
    color: ${styles.colors.mainLight};
    padding: 1.4rem;
    width: 7rem;
    margin: 1.2rem auto;
    cursor: pointer;
    opacity: 0.9;
    position: relative;
    transition: all 0.2s;
    box-shadow: 1px 1px 6px -2px gray;
    &:hover {
      background-color: ${styles.colors.mainDark};
    }
    &:before {
      transition: all 0.5s;
      content: "Send";
      position: absolute;
      top: 15%;
      left: 35%;
    }
    &:hover:before {
      opacity: 0;
      transition: all 0.5s;
      transform: translate(7rem);
    }
    &:after {
      content: "⇨";
      position: absolute;
      top: -15%;
      left: -25%;
      transition: all 0.5s;
      opacity: 0;
      letter-spacing: 2px;
      font-size: 2.5rem;
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

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    error: "",
  }
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.message === ""
    )
      return this.setState({ error: "Please fill out the form." })
    else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(() => {
          navigate(form.getAttribute("action"))
        })
        .catch(error => alert(error))
    }
  }
  handleChange = e => {
    this.setState({ error: "" })
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <>
        <HeaderSection>
          <h5 style={{ fontStyle: "italic" }}>Go ahead and say hi!</h5>
          <h1>Contact me</h1>
        </HeaderSection>
        {this.state.error && (
          <p
            style={{
              textAlign: "center",
              color: "#e4508f",
              letterSpacing: "1px",
              fontWeight: 700,
            }}
          >
            {this.state.error}
          </p>
        )}
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
            autoFocus
            autoCapitalize
            autoComplete
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
      </>
    )
  }
}

export default Contact
