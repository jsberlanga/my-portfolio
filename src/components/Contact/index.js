import React, { useReducer } from "react"
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

  input[type="submit"] {
    background: ${styles.colors.darkPink};
    color: ${styles.colors.mainLight};
    padding: 0.4rem 1rem;
    width: 7rem;
    margin: 1.2rem auto;
    cursor: pointer;
    opacity: 0.9;
    position: relative;
    transition: all 0.2s;
    text-align: center;

    &:hover {
      filter: brightness(1.1);
      border-bottom: 8px double ${styles.colors.pink};
    }
    &:hover:before {
      opacity: 0;
      transition: all 0.5s;
      transform: translate(7rem);
    }
    &:focus {
      border-bottom: 8px double ${styles.colors.pink};
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

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  error: "",
}

const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        error: "Please fill out the form.",
      }
    case "SET_FIELDS":
      const { field, value } = action
      return {
        ...state,
        error: "",
        [field]: value,
      }
    default:
      return state
  }
}

const Contact = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState)

  const { name, email, phone, message, error } = state

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    if (
      name === "" ||
      message === "" ||
      !/@/.test(email) ||
      !/[0-9]/.test(phone)
    ) {
      return dispatch({ type: "SET_ERROR" })
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        navigate(form.getAttribute("action"))
      })
      .catch(error => console.log(error))
  }

  const handleChange = e => {
    dispatch({
      type: "SET_FIELDS",
      field: e.target.name,
      value: e.target.value,
    })
  }

  return (
    <>
      <HeaderSection>
        <h5 style={{ fontStyle: "italic" }}>Go ahead and say hi!</h5>
        <h1>Contact me</h1>
      </HeaderSection>
      {error && (
        <p
          role="alert"
          data-testid="error"
          style={{
            textAlign: "center",
            color: "#e4508f",
            letterSpacing: "1px",
            fontWeight: 700,
          }}
        >
          {error}
        </p>
      )}
      <StyledForm
        data-testid="form"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          autoFocus
          aria-label="name-input"
          className="form-input-name"
          name="name"
          placeholder="Name"
          type="text"
          onChange={handleChange}
        />
        <input
          aria-label="email-input"
          className="form-input-email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <input
          aria-label="phone-input"
          className="form-input-phone"
          name="phone"
          placeholder="Phone Number"
          type="text"
          onChange={handleChange}
        />
        <textarea
          aria-label="message-input"
          className="form-input-message"
          name="message"
          placeholder="Message"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="form-button"
          data-testid="submit"
          value="Send"
        />
      </StyledForm>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </>
  )
}

export default Contact
