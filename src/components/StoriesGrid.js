/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box } from "theme-ui"
import Story from "./Story"

const StoriesGrid = (results, addPick) => {
  return (
    <Flex sx={{ flexWrap: `wrap` }}>
      {results !== [] &&
        results.map(story => (
          <Story story={story} location="stories" onClickPicture={addPick} />
        ))}
    </Flex>
  )
}

export default StoriesGrid
