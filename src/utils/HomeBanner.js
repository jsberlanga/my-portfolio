import React from "react"
import { HomeButton } from "./HomeButton"

const HomeBanner = ({ bannerTitle }) => {
  return (
    <div
      style={{ letterSpacing: "1.7px", fontWeight: 700, fontStyle: "italic" }}
    >
      <h4 style={{ marginBottom: "0.4rem" }}>{bannerTitle}</h4>
      <HomeButton buttonTitle="visit my portfolio" />
    </div>
  )
}

export default HomeBanner
