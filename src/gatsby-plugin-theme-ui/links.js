const commonStyles = {
  cursor: `pointer`,
  position: `relative`,
  fontSize: 0,
  transition: `all .4s ease-in-out`,
}
export default {
  underlined: {
    ...commonStyles,

    fontWeight: 300,
    color: `primary`,
    textDecoration: `underline`,

    ":hover": {
      color: `white`,
    },
  },
  button: {
    ...commonStyles,
    bg: `secondary`,
    p: `5px`,
    color: `white`,
    textAlign: `center`,
    borderRadius: `5px`,
    // fontWeight: `bold`,
    ":hover": {
      bg: `primary`,
    },
  },
}
