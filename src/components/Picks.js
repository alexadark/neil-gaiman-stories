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

    position: `relative`,
  }

  return (
    <Box
      sx={{
        ...picksStyle,
        bg: `black`,
        transition: `all .4s ease-in-out`,
        height: `500px`,
      }}
    >
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
                <Flex sx={{ alignItems: `center` }}>
                  <Box sx={{ mr: `10px` }}>
                    {picks[i] ? (
                      <Pick
                        story={picks[i]}
                        setPicks={setPicks}
                        picks={picks}
                        i={i}
                      />
                    ) : (
                      <PickPlaceHolder i={i} />
                    )}
                  </Box>
                </Flex>
              </Box>
            )
          })}
        </Flex>
      </Container>
    </Box>
  )
}

export default Picks
