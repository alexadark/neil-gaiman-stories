/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import Img from "gatsby-image"

import PickPlaceHolder from "./PickPlaceHolder"
import Pick from "./Pick"
import PicksBar from "./PicksBar"

const Picks = ({ picks, setPicks, arePicksOpen, togglePicks }) => {
  const picksStyle = arePicksOpen && {
    transform: `translateY(-400px)`,
    transition: `all .4s ease-in-out`,
    zIndex: 200,
    bg: `black`,
    position: `relative`,
  }

  return (
    <Box sx={picksStyle} css={{ transition: `all .4s ease-in-out` }}>
      <PicksBar
        arePicksOpen={arePicksOpen}
        togglePicks={togglePicks}
        picks={picks}
      />
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
