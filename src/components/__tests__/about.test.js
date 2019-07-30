import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import About from "../About"

describe("<About />", () => {
  test("should render", () => {
    const { debug } = render(<About />)
    debug()
  })
})
