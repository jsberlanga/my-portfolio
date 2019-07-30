import React from "react"
import { render, fireEvent, wait } from "@testing-library/react"

import Contact from "../Contact"

global.fetch = require("jest-fetch-mock")
global.___navigate = jest.fn()

describe("<Contact />", () => {
  test("renders", async () => {
    const { debug, getByLabelText, getByTestId, queryByTestId } = render(
      <Contact />
    )

    fireEvent.click(getByTestId("submit"))
    expect(getByTestId("error")).toBeVisible()
    const inputs = ["name-input", "phone-input", "message-input"]

    inputs.forEach(input => {
      let inputDOM = getByLabelText(input)
      fireEvent.change(inputDOM, { target: { value: "qwerty" } })
      expect(inputDOM.value).toBe("qwerty")
    })

    fireEvent.change(getByLabelText("email-input"), {
      target: { value: "test.com" },
    })

    fireEvent.click(getByTestId("submit"))
    expect(getByTestId("error")).toBeVisible()

    fireEvent.change(getByLabelText("email-input"), {
      target: { value: "test@test.com" },
    })
    fireEvent.click(getByTestId("submit"))
    expect(queryByTestId("error")).toBeFalsy()

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(queryByTestId("error")).toBeFalsy()
  })
})
