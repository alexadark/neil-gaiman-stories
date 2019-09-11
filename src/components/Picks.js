/** @jsx jsx */
import React, { useState } from "react"

import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import Img from "gatsby-image"

import PickPlaceHolder from "./PickPlaceHolder"
import Pick from "./Pick"
import PicksBar from "./PicksBar"
import VoteButton from "./VoteButton"
import VoteForm from "./VoteForm"
import ReactDOM from "react-dom"
// import useModal from "react-hooks-use-modal"
import Modal from "react-responsive-modal"

const Picks = ({ picks, setPicks, arePicksOpen, togglePicks, setVote }) => {
  // const [Modal, open, close] = useModal()

  const [isModalOpen, openModal] = useState(false)
  const picksStyle = arePicksOpen && {
    transform: `translateY(-400px)`,
    transition: `all .4s ease-in-out`,
    zIndex: 200,

    position: `relative`,
  }

  const className = picks.length === 3 ? "active" : ""

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
            flexWrap: `wrap`,
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
                      <PickPlaceHolder i={i} togglePicks={togglePicks} />
                    )}
                  </Box>
                </Flex>
              </Box>
            )
          })}
        </Flex>
      </Container>
      {/* <VoteButton picks={picks} /> */}

      <div className={className} onClick={() => openModal(true)}>
        Vote Now
      </div>
      <Modal open={isModalOpen} onClose={() => openModal(false)}>
        <VoteForm setVote={setVote} />
      </Modal>
    </Box>
  )
}

export default Picks
