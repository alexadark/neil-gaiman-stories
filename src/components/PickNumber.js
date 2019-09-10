/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const PickNumber = ({ i }) => {
  return (
    <Box
      sx={{
        fontSize: 3,
        fontFamily: `heading`,
        textShadow: `0 0 17px rgba(255, 255, 255,1)`,
        px: `15px`,
      }}
    >
      #{i + 1}
    </Box>
  )
}

export default PickNumber
