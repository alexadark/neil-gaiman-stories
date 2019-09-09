/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import Img from "gatsby-image"
import OpenIcon from "../images/open-icon.png"
import AddIcon from "../images/add-icon.png"

const Picks = ({ picks, setPicks }) => {
  return (
    <>
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
              <img src={OpenIcon} alt="" />
            </Box>
          </Flex>
        </Container>
      </div>

      <Flex>
        {picks.length > 0 &&
          picks.map(story => (
            <Flex
              sx={{
                width: [`50%`, `50%`, `33%`],
                px: 2,
                my: 2,
                justifyContent: `center`,
              }}
            >
              <Img
                fixed={story.featuredImage.imageFile.childImageSharp.fixed}
                alt={story.altText}
                sx={{ cursor: `pointer` }}
                sx={{
                  cursor: `pointer`,
                  width: `145px`,
                  height: `217px`,
                  borderRadius: `20px`,
                  m: `0 auto`,
                }}
              />
              <Box sx={{ textAlign: `center` }}>
                <Styled.h5 sx={{ texAlign: `center` }}>{story.title}</Styled.h5>
                <div
                  sx={{ cursor: `pointer` }}
                  onClick={() => setPicks(picks.filter(pick => pick !== story))}
                >
                  Remove
                </div>
              </Box>
            </Flex>
          ))}
      </Flex>
    </>
  )
}

export default Picks
