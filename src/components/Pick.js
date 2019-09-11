/** @jsx jsx */
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import Img from "gatsby-image"
import PickNumber from "./PickNumber"

const Pick = ({ story, setPicks, picks, i }) => {
  return (
    <Flex
      sx={{
        justifyContent: `space-between`,
      }}
    >
      <Box
        className="pick"
        sx={{
          position: `relative`,
          // width: [`100%`, `50%`, `33%`],
          mb: [`40px`, `40px`, 0],
        }}
      >
        <Flex
          sx={{
            alignItems: `center`,
          }}
        >
          {story.featuredImage && (
            <Img
              fixed={story.featuredImage.imageFile.childImageSharp.fixed}
              alt={story.altText}
              sx={{ cursor: `pointer` }}
              sx={{
                cursor: `pointer`,
                borderRadius: `20px`,
                m: `0 auto`,
                width: `102px !important`,
                height: `151px !important`,
              }}
            />
          )}

          <Styled.h5
            dangerouslySetInnerHTML={{ __html: story.title }}
            sx={{
              position: `absolute`,
              top: 0,
              left: `20px`,
              fontSize: [`1.7rem`, `1.7rem`],
              maxWidth: `70px`,
              lineHeight: `21px`,
            }}
          />

          <PickNumber i={i} />

          <Box>
            <Box
              className="pickTitle"
              sx={{ fontSize: 1, lineHeight: `18px`, maxWidth: `115px` }}
            >
              <div dangerouslySetInnerHTML={{ __html: story.title }} />
              from
              <Styled.a href={story.StoriesFields.originalBookLink}>
                <div
                  sx={{ fontWeight: 700 }}
                  dangerouslySetInnerHTML={{
                    __html: story.StoriesFields.originalBookTitle,
                  }}
                />
              </Styled.a>
            </Box>
            <div
              className="removePick"
              sx={{
                variant: `links.underlined`,
                top: `30px`,
              }}
              onClick={() => setPicks(picks.filter(pick => pick !== story))}
            >
              Remove
            </div>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Pick
