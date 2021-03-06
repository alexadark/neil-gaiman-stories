/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import Img from "gatsby-image"
import PickNumber from "./PickNumber"
import move from "lodash-move"
import { truncateString } from "../utils"
import { CaretNext, CaretPrevious } from "grommet-icons"

const Pick = ({ story, setPicks, picks, i }) => {
  const { pickChar } = story.StoriesFields
  const charLimit = pickChar ? pickChar : 40
  const title = truncateString(story.title, charLimit)
  const removePick = () => setPicks(picks.filter(pick => pick !== story))
  const setPosition = operator => {
    const storyIndex = picks
      .map((pick, index) => pick === story && index)
      .filter(index => index)
      .join()
    return setPicks(
      move(
        picks,
        storyIndex ? parseInt(storyIndex) : 0,
        operator ? i - 1 : i + 1
      )
    )
  }

  return (
    <Flex>
      <Box
        className="pick"
        sx={{
          mb: [50, 60, 0],
        }}
      >
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Box sx={{ position: `relative` }}>
            {story.featuredImage && (
              <Img
                fixed={story.featuredImage.imageFile.childImageSharp.fixed}
                alt={story.altText}
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
              dangerouslySetInnerHTML={{ __html: title }}
              sx={{
                position: `absolute`,
                top: `-10px`,
                left: `15px`,
                fontSize: [`1.5rem`, `1.5rem`],
                maxWidth: `70px`,
                lineHeight: `21px`,
              }}
            />
          </Box>

          <PickNumber i={i} />
          <Flex
            sx={{ height: 200, alignItems: `center`, justifyContent: `center` }}
          >
            <Box>
              <Box
                className="pickTitle"
                sx={{
                  fontSize: 1,
                  lineHeight: `18px`,
                  width: 115,
                  mt: `15px`,
                }}
              >
                <Box dangerouslySetInnerHTML={{ __html: story.title }} />
              </Box>
              <Box
                className="removePick"
                sx={{
                  variant: `links.underlined`,
                  top: `30px`,
                }}
                onClick={removePick}
              >
                remove
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Flex
          sx={{ alignItems: `center`, flexDirection: `column`, width: 100 }}
        >
          <Flex sx={{ justifyContent: `center` }}>
            {i > 0 && (
              <Box className="plus" onClick={() => setPosition(true)}>
                <CaretPrevious
                  color="#90a890"
                  sx={{ cursor: `pointer`, color: `primary` }}
                />
              </Box>
            )}
            {i < 2 && (
              <Box className="less" onClick={() => setPosition(false)}>
                <CaretNext
                  color="#90a890"
                  sx={{ cursor: `pointer`, ml: `15px` }}
                />
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Pick
