/** @jsx jsx */
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import Img from "gatsby-image"

const Pick = ({ story, setPicks, picks }) => {
  return (
    <Flex
      sx={{
        justifyContent: `space-between`,
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
  )
}

export default Pick
