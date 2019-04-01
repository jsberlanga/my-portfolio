export const colors = {
  gray: "#dee1ec",
  darkBlue: "#10316b",
  green: "#0b8457",
  yellow: "#eac100",
  mainDark: "#364f6b",
  mainLight: "#f5f5f5",
}

export const transitionDefault = "transition: all 0.2s ease-in-out"

export const transitionFunction = (
  property = "all",
  time = "0.2s",
  type = "linear"
) => {
  return `transition: ${property} ${time} ${type}`
}

export const transitionObject = ({
  property = "all",
  time = "0.2s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = `${colors.offWhite}`,
}) => {
  return `border: ${width} ${type} ${color}`
}
