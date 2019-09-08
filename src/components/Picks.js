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
            <Box sx={{ width: [`50%`, `50%`, `33%`], px: 2, my: 2 }}>
              <Img
                fluid={story.featuredImage.imageFile.childImageSharp.fluid}
                alt={story.altText}
                sx={{ cursor: `pointer` }}
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
            </Box>
          ))}
      </Flex>
    </>
  )
}

export default Picks
