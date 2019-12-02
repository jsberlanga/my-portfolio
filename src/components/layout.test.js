import React from "react"
import { render } from "@testing-library/react"
import { axe } from "jest-axe"
import Layout from "./layout"

describe("<Layout />", () => {
  const { container } = render(<Layout />)

  test("renders correctly", () => {
    expect(container).toMatchSnapshot()
  })

  test("does not have violations", async () => {
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
