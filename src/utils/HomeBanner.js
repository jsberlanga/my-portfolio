import React from "react"
import { Link } from "gatsby"
import { HomeButton } from "./HomeButton"

const HomeBanner = ({ bannerTitle }) => {
  return (
    <div
      style={{
        fontStyle: "italic",
        transform: "skew(10deg)",
        letterSpacing: "-1px",
      }}
    >
      <h4 style={{ marginBottom: "0.4rem", fontSize: "1.5em" }}>
        {bannerTitle}
      </h4>
      <Link to="/portfolio">
        <HomeButton buttonTitle="visit my portfolio" />
      </Link>
    </div>
  )
}

export default HomeBanner
