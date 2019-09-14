/** @jsx jsx */
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import OpenIcon from "../images/open-icon.png"

const PicksBar = ({ arePicksOpen, togglePicks, picks }) => {
  const openIconStyle = arePicksOpen && {
    transform: `rotate(540deg)`,
  }
  return (
    <div
      sx={{
        bg: `primary`,
        py: `15px`,
      }}
    >
      <Container>
        <Flex sx={{ justifyContent: `space-between`, alignItems: `center` }}>
          <Box>
            <Styled.h3
              sx={{
                fontSize: [2, 2],
                m: 0,
                textTransform: `capitalize`,
                fontWeight: 700,
              }}
            >
              Your personal Picks
            </Styled.h3>
            <div sx={{ color: `black`, fontSize: 1, mt: `5px` }}>
              {picks.length} out of 3 selected
            </div>
          </Box>
          <Box>
            <img
              src={OpenIcon}
              sx={{
                ...openIconStyle,
                cursor: `pointer`,
                transition: `all .4s ease-in-out`,
              }}
              alt="open icon"
              onClick={() => {
                togglePicks(!arePicksOpen)
              }}
            />
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default PicksBar
