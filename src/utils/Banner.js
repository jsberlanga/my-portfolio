import React from "react"
import Button from "./Button"

const Banner = ({ bannerTitle }) => {
  return (
    <div
      style={{ letterSpacing: "1.7px", fontWeight: 700, fontStyle: "italic" }}
    >
      <h4>{bannerTitle}</h4>
      <Button buttonTitle="visit my portfolio" />
    </div>
  )
}

export default Banner
