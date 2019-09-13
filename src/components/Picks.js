/** @jsx jsx */
import React, { useState, useRef, useEffect } from "react"

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
  const picksRef = useRef()

  const picksStyle = arePicksOpen && {
    transition: `all .4s ease-in-out`,
    position: [`absolute`, `absolute`, `fixed`],
    height: [`100%`, `100%`, 500],
    bottom: [`auto`, `auto`, 0],
    top: [0, 300, `auto`],
  }

  // useEffect(() => picksRef.current.scrollIntoViewIfNeeded(), [arePicksOpen])

  return (
    <Box
      className="picksContainer"
      ref={picksRef}
      sx={{
        bg: `black`,
        transition: `all .4s ease-in-out`,
        position: [`fixed`, `fixed`, `fixed`],

        bottom: [-755, -575, -427],
        height: [`auto`, `auto`, 500],
        left: 0,
        width: `100%`,
        zIndex: 100,
        ...picksStyle,
      }}
    >
      <PicksBar
        arePicksOpen={arePicksOpen}
        togglePicks={togglePicks}
        picks={picks}
      />
      <Container sx={{ maxWidth: 860 }} ref={picksRef}>
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
