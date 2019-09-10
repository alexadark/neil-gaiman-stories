/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

import Story from "./Story"

const StoriesGrid = ({ results, addPick, picks }) => {
  return (
    <Flex sx={{ flexWrap: `wrap` }}>
      {results !== [] &&
        results.map(story => {
          const className =
            picks.length > 0 ? (picks.includes(story) ? "disabled" : "") : ""
          const onClickPicture =
            picks.length > 0
              ? picks.includes(story)
                ? () => ""
                : addPick
              : addPick

          return (
            <Story
              story={story}
              location="stories"
              className={className}
              onClickPicture={onClickPicture}
            />
          )
        })}
    </Flex>
  )
}

export default StoriesGrid
