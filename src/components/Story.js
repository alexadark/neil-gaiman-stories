/** @jsx jsx */
import { jsx, Styled, Box, Flex } from "theme-ui"
import Img from "gatsby-image"

const Story = ({ story, onClickPicture }) => {
  return (
    <Box sx={{ width: [`50%`, `33%`, `20%`], my: 5 }}>
      <Flex
        as="article"
        onClick={() => onClickPicture(story)}
        key={story.storyId}
        data-category={story.categories.nodes[0].slug}
        sx={{
          justifyContent: `center`,
          flexDirection: `column`,
          alignItems: `center`,
          width: `145px`,

          position: `relative`,

          ":hover": {
            ".gatsby-image-wrapper": {
              boxShadow: ` 0 0 70px rgba(255, 255, 255, 0.55)`,
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
            my: `5px`,
            zIndex: 10,
          }}
        >
          Choose me
        </div>
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
        <Styled.h4
          dangerouslySetInnerHTML={{ __html: story.title }}
          sx={{ position: `absolute`, top: 3, left: `20px`, right: `20px` }}
        />

        <button
          onClick={() => onClickPicture(story)}
          sx={{ display: [`block`, `none`] }}
        >
          Vote For Me!
        </button>
      </Flex>
    </Box>
  )
}

export default Story
