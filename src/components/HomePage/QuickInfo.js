import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Section = styled.section``

const QuickInfo = () => {
  return (
    <Section>
      <Link to="/about">About</Link>
    </Section>
  )
}

export default QuickInfo
