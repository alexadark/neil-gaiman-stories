/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import Img from "gatsby-image"
import OpenIcon from "../images/open-icon.png"
import PickPlaceHolder from "./PickPlaceHolder"
import Pick from "./Pick"

const Picks = ({ picks, setPicks, arePicksOpen, togglePicks }) => {
  const picksStyle = arePicksOpen && {
    transform: `translateY(-400px)`,
    transition: `all .4s ease-in-out`,
    zIndex: 200,
    bg: `black`,
    position: `relative`,
  }

  const openIconStyle = arePicksOpen && {
    transform: `rotate(540deg)`,
  }

  return (
    <Box sx={picksStyle} css={{ transition: `all .4s ease-in-out` }}>
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
                css={{ cursor: `pointer`, transition: `all .4s ease-in-out` }}
                sx={openIconStyle}
                onClick={() => togglePicks(!arePicksOpen)}
              />
            </Box>
          </Flex>
        </Container>
      </div>
      <Container>
        <Flex
          sx={{
            justifyContent: `space-around`,
            mt: 5,
          }}
        >
          {/* mapping around an array of length 3, and depending on if the pick exist on the interation index having the pick or the placeholder */}
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <Box>
                {picks[i] ? (
                  <Pick story={picks[i]} setPicks={setPicks} picks={picks} />
                ) : (
                  <PickPlaceHolder />
                )}
                <h3>{i + 1}</h3>
              </Box>
            )
          })}
        </Flex>
      </Container>
    </Box>
  )
}

export default Picks
