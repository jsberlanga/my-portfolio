import React from "react"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import Layout from "./layout"

expect.extend(toHaveNoViolations)

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
