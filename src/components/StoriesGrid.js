/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

import Story from "./Story"

const StoriesGrid = ({
  results,
  addPick,
  picks,
  arePicksOpen,
  togglePicks,
}) => {
  return (
    <Flex className="gridContainer" sx={{ flexWrap: `wrap`, mt: 40 }}>
      {results !== [] &&
        results.map(story => {
          //if the story is includes in pick, add a disabled class and  disable the add Pick function on click

          const className =
            picks.length > 0
              ? picks.map(pick => pick.title).includes(story.title)
                ? "disabled"
                : ""
              : ""
          const onClickPicture =
            picks.length > 0
              ? picks.map(pick => pick.title).includes(story.title)
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
