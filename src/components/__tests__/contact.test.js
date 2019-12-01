import React from "react"
import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import { axe, toHaveNoViolations } from "jest-axe"
import Contact from "../Contact"

expect.extend(toHaveNoViolations)
global.fetch = require("jest-fetch-mock")
global.___navigate = jest.fn()

describe("<Contact />", () => {
  test("renders correctly", () => {
    const { container } = render(<Contact />)
    expect(container).toMatchSnapshot()
  })

  test("shows error message if form is incomplete", () => {
    const { getByTestId, getByRole } = render(<Contact />)

    user.click(getByTestId(/submit/))
    expect(getByRole(/alert/)).toBeInTheDocument()
  })

  test("submits forms correctly", async () => {
    const { getByLabelText, getByTestId, getByRole, queryByRole } = render(
      <Contact />
    )

    const emailInput = getByLabelText(/email-input/i)
    const otherInputs = ["name-input", "phone-input", "message-input"]

    otherInputs.forEach(input => {
      let inputDOM = getByLabelText(input)
      user.type(inputDOM, "qwerty")
      expect(inputDOM.value).toBe("qwerty")
    })

    // fireEvent.change(emailInput, { target: { value: "test.com" } })
    user.type(emailInput, "notAnEmail.com")

    user.click(getByTestId(/submit/))
    expect(getByRole(/alert/)).toBeInTheDocument()

    user.type(emailInput, "test@test.com")

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
