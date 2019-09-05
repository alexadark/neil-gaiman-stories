/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import Img from "gatsby-image"
import Tooltip from "rc-tooltip"
import "rc-tooltip/assets/bootstrap.css"

const Story = ({ story, onClickPicture }) => {
  return (
    <Box sx={{ width: [`50%`, `50%`, `25%`], px: 2, my: 2 }}>
      <article
        key={story.storyId}
        data-category={story.categories.nodes[0].slug}
      >
        <Tooltip overlay="Vote For me" placement="top">
          <Box onClick={() => onClickPicture(story)}>
            <Img
              fluid={story.featuredImage.imageFile.childImageSharp.fluid}
              alt={story.altText}
              sx={{ cursor: `pointer` }}
            />
          </Box>
        </Tooltip>

        <Styled.h5 sx={{ texAlign: `center` }}>{story.title}</Styled.h5>
        <button
          onClick={() => onClickPicture(story)}
          sx={{ display: [`block`, `none`] }}
        >
          Vote For Me!
        </button>
      </article>
    </Box>
  )
}

export default Story
