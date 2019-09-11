const sharedButtonStyles = {
  border: `none`,
  color: `primary`,
  borderRadius: `5px`,
  cursor: `pointer`,
  fontFamily: `heading`,
  fontSize: 2,
  fontWeight: `700`,
  textAlign: `center`,
  transition: `all 0.4s ease-in-out`,
}

export default {
  voteActive: {
    ...sharedButtonStyles,
    borderRadius: `5px`,
    border: `8px solid #90a890`,
    color: `primary`,
    bg: `secondary`,
    width: `260px`,
    fontSize: 2,
    px: `5px`,
    py: 1,
    textTransform: `uppercase`,
    ":hover": {
      color: `white`,
      borderColor: `white`,
    },
  },
  voteDisabled: {
    ...sharedButtonStyles,
    borderRadius: `5px`,
    border: `8px solid #141914`,
    color: `#1a261a`,
    bg: `#0a160a`,
    width: `260px`,
    fontSize: 2,
    textTransform: `uppercase`,
    cursor: `auto`,
    px: `5px`,
    py: 1,
  },
}
