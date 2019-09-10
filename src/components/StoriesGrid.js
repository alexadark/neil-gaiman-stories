/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

import Story from "./Story"

const StoriesGrid = ({ results, addPick, picks }) => {
  // TODO: make disable work after reload from localStorage
  return (
    <Flex sx={{ flexWrap: `wrap` }}>
      {results !== [] &&
        results.map(story => {
          console.log("picks", picks, "story", story)
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
