import React from "react"
import { Link } from "gatsby"
import { HomeButton } from "./HomeButton"

const HomeBanner = ({ bannerTitle }) => {
  return (
    <div
      style={{ letterSpacing: "1.7px", fontWeight: 700, fontStyle: "italic" }}
    >
      <h4 style={{ marginBottom: "0.4rem" }}>{bannerTitle}</h4>
      <Link to="/portfolio">
        <HomeButton buttonTitle="visit my portfolio" />
      </Link>
    </div>
  )
}

export default HomeBanner
