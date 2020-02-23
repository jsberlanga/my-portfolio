import React from "react"
import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import { axe } from "jest-axe"
import Contact from "../Contact"

global.fetch = require("jest-fetch-mock")
global.___navigate = jest.fn()

describe("<Contact />", () => {
  test("renders correctly", () => {
    const { container } = render(<Contact />)
    expect(container).toMatchSnapshot()
  })

  test("shows error message if form is incomplete", () => {
    const { debug, getByTestId, getByRole } = render(<Contact />)

    user.click(getByTestId(/submit/))
    expect(getByRole(/alert/)).toBeInTheDocument()
  })

  test("submits forms correctly", async () => {
    const { getByLabelText, getByTestId, getByRole, queryByRole } = render(
      <Contact />
    )

    user.type(getByLabelText(/name-input/i), "name")
    user.type(getByLabelText(/message-input/i), "message")
    user.type(getByLabelText(/email-input/i), "invalid email")
    user.type(getByLabelText(/phone-input/i), "invalid phone")

    user.click(getByTestId(/submit/))
    expect(getByRole(/alert/)).toBeInTheDocument()

    user.type(getByLabelText(/email-input/i), "example@email.com")
    user.type(getByLabelText(/phone-input/i), "123456789")

    user.click(getByTestId(/submit/))
    expect(queryByRole(/alert/)).not.toBeInTheDocument()

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(queryByRole(/alert/)).not.toBeInTheDocument()
  })

  test("does not have violations", async () => {
    const { container } = render(<Contact />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
