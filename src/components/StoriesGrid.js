/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

import Story from "./Story"

const StoriesGrid = ({ results, addPick, picks }) => {
  // TODO: make disable work after reload from localStorage

  return (
    <Flex className="gridContainer" sx={{ flexWrap: `wrap`, mt: 40, mb: 60 }}>
      {results !== [] &&
        results.map(story => {
          //if the story is includes in pick, add a disabled class and  disable the add Pick function on click

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
              key={story.storyId}
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
