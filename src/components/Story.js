/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui"
import Img from "gatsby-image"

const Story = ({ story, onClickPicture, className }) => {
  return (
    <Flex
      className="story"
      sx={{
        width: [`50%`, `33%`, `20%`],
        mb: [10, 20, 30],
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
          justifyContent: `center`,
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
          dangerouslySetInnerHTML={{ __html: story.title }}
          sx={{
            position: `absolute`,
            top: 25,
            left: 20,
            right: 20,
            cursor: `pointer`,
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
            sx={{ fontWeight: 900, mt: `5px`, height: 75 }}
            dangerouslySetInnerHTML={{ __html: story.title }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Story
