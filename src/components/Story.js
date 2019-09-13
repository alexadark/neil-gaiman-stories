/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui"
import Img from "gatsby-image"

const Story = ({ story, onClickPicture, className }) => {
  return (
    <Flex
      className="story"
      sx={{
        width: [`50%`, `33%`, `20%`],
        mb: [40, 50, 60],
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
          sx={{
            color: `black`,
            fontFamily: `heading`,
            fontSize: `1.8rem`,
            fontWeight: `bold`,
            display: [`none`, `block`],
            zIndex: 10,
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
          from
          <span sx={{ display: `block`, fontWeight: 900 }}>
            <Styled.a
              href={story.StoriesFields.originalBookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {story.StoriesFields.originalBookTitle}
            </Styled.a>
          </span>
        </Box>

        <button
          onClick={() => onClickPicture(story)}
          sx={{ display: [`block`, `none`] }}
        >
          Vote For Me!
        </button>
      </Flex>
    </Flex>
  )
}

export default Story
