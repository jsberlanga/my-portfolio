import React from "react"
import { Link } from "gatsby"
import { HomeButton } from "./HomeButton"

const HomeBanner = ({ bannerTitle }) => {
  const windowGlobal = typeof window !== "undefined" && window
  return (
    <div
      style={{
        fontStyle: "italic",
        letterSpacing: "-1px",
      }}
    >
      {windowGlobal.innerWidth > 768 && (
        <h4
          style={{
            marginBottom: "0.4rem",
            fontSize: "1.4em",
            transform: "skew(10deg)",
          }}
        >
          {bannerTitle}
        </h4>
      )}
      <Link to="/portfolio">
        <HomeButton buttonTitle="visit my portfolio" />
      </Link>
    </div>
  )
}

export default HomeBanner
