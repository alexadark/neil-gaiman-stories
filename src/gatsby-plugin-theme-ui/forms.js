const sharedFormStyles = {
  bg: `white`,
  borderRadius: `5px`,
  border: `none`,
  color: `#999`,
  fontSize: `1.6rem`,
  p: `15px 18px`,
  mt: `10px`,
}

export default {
  input: {
    ...sharedFormStyles,
    textTransform: `capitalize`,
  },
  textarea: {
    ...sharedFormStyles,
    height: `176px`,
  },
}
