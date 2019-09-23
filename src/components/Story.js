/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui"
import Img from "gatsby-image"
import { truncateString } from "../utils"

const Story = ({ story, onClickPicture, className }) => {
  const title = truncateString(story.title, 70)

  return (
    <Flex
      className="story"
      sx={{
        width: [`50%`, `33%`, `20%`],
        // mb: 30,
        justifyContent: [`center`, `center`, `start`],
      }}
    >
      <Flex
        as="article"
        onClick={() => onClickPicture(story)}
        key={story.storyId}
        data-category={story.categories.nodes[0].slug}
        className={className}
        sx={{
          justifyContent: `end`,
          flexDirection: `column`,
          alignItems: `center`,
          width: `145px`,
          position: `relative`,

          ":hover": {
            ".gatsby-image-wrapper": {
              boxShadow: ` 0 0 55px rgba(255, 255, 255, 0.55)`,
            },
            ".chooseMe": {
              color: `white`,
            },
          },
          "&.disabled": {
            opacity: 0.4,
            ".gatsby-image-wrapper": {
              cursor: `auto`,
            },

            ":hover": {
              ".gatsby-image-wrapper": {
                boxShadow: `none`,
              },
            },
          },
        }}
      >
        <div
          className="chooseMe"
          sx={{
            color: `black`,
            fontFamily: `heading`,
            fontSize: `1.8rem`,
            fontWeight: `bold`,
            zIndex: 10,
            transition: `color .4s ease-in-out`,
          }}
        >
          Choose me
        </div>
        {story.featuredImage && (
          <Img
            fixed={story.featuredImage.imageFile.childImageSharp.fixed}
            alt={story.altText}
            sx={{
              cursor: `pointer`,
              transition: `all .4s ease-in-out`,
              borderRadius: `20px`,
              m: `0 auto`,
            }}
          />
        )}
        <Styled.h4
          dangerouslySetInnerHTML={{ __html: title }}
          sx={{
            position: `absolute`,
            top: 25,
            left: 20,
            right: 20,
            cursor: `pointer`,
            fontSize: [`1.8rem`, `1.8rem`],
          }}
        />
        <Box
          sx={{
            textAlign: `center`,
            fontSize: 1,
            maxWidth: `125px`,
            mt: `10px`,
            lineHeight: `18px`,
          }}
        >
          <Box
            sx={{ fontWeight: 900, mt: `5px`, mb: `20px` }}
            dangerouslySetInnerHTML={{ __html: story.title }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Story
