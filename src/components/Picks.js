/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box } from "theme-ui"
import Img from "gatsby-image"

const Picks = ({ picks, setPicks }) => {
  return (
    <>
      <Styled.h3 sx={{ textAlign: `center` }}>Your Picks</Styled.h3>
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
