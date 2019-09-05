import React from "react"
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState } from "react"

const CategoryFilter = ({ stories }) => {
  return (
    <Flex
      sx={{
        flexWrap: `wrap`,
        mt: 2,
        div: {
          pr: 5,
          pl: 2,
          fontSize: 2,
          cursor: `pointer`,
        },
      }}
    >
      <Box key="all" onClick={() => setStories(stories.nodes)}>
        <Styled.h5 data-category="all">All</Styled.h5>
      </Box>
      {data.wpgraphql.categories.nodes.map(cat => (
        <Box
          key={cat.slug}
          onClick={e => {
            const results = stories.nodes.filter(
              story =>
                story.categories.nodes[0].slug === e.target.dataset.category
            )
            setStories(results)
          }}
        >
          <Styled.h5 data-category={cat.slug}>{cat.name}</Styled.h5>
        </Box>
      ))}
    </Flex>
  )
}

export default CategoryFilter
