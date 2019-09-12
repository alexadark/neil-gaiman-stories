/** @jsx jsx */
import React, { useState } from "react"

import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import Img from "gatsby-image"

import PickPlaceHolder from "./PickPlaceHolder"
import Pick from "./Pick"
import PicksBar from "./PicksBar"
import VoteButton from "./VoteButton"
import VoteForm from "./VoteForm"

import Modal from "react-responsive-modal"
import modalStyles from "../styles/styles.module.scss"

const Picks = ({ picks, setPicks, arePicksOpen, togglePicks, setVote }) => {
  const [isModalOpen, openModal] = useState(false)
  const picksStyle = arePicksOpen && {
    transform: `translateY(-400px)`,
    transition: `all .4s ease-in-out`,
    zIndex: 200,

    position: `relative`,
  }

  const className = picks.length === 3 ? "active" : ""
  const bg = {
    overlay: {
      background: "rgba(0,0,0,.3)",
    },
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
      <Container sx={{ maxWidth: 860 }}>
        <Flex
          sx={{
            justifyContent: `space-around`,
            mt: 20,
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
      <VoteButton picks={picks} handleClick={openModal} />

      <Modal
        open={isModalOpen}
        onClose={() => openModal(false)}
        classNames={{
          modal: modalStyles.modal,
          closeButton: modalStyles.closeButton,
          closeIcon: modalStyles.closeIcon,
        }}
      >
        <VoteForm setVote={setVote} />
      </Modal>
    </Box>
  )
}

export default Picks
