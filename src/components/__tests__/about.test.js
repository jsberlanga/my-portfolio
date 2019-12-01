import React from "react"
import { render } from "@testing-library/react"

import About from "../About"

describe("<About />", () => {
  test("should render", () => {
    const { getByTestId, container } = render(<About />)

    expect(container.querySelectorAll("section").length).toBe(4)

    const sections = [
      { name: "aboutme-section", title: "a little about me" },
      {
        name: "technologies-section",
        title: "technologies I've got experience with:",
      },
      { name: "moreaboutme-section", title: "work experience" },
    ]
    sections.forEach(section => {
      const { name, title } = section
      expect(getByTestId(name).firstChild.textContent).toBe(title)
    })
  })
})
