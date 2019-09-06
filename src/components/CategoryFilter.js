/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"

const CategoryFilter = ({
  stories,
  handleSetStories,
  handleFilterCategories,
  categories,
}) => {
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
      <Box key="all" onClick={() => handleSetStories(stories.nodes)}>
        <Styled.h5 data-category="all">All</Styled.h5>
      </Box>
      {categories.nodes.map(cat => (
        <Box key={cat.slug} onClick={e => handleFilterCategories(e, stories)}>
          <Styled.h5 data-category={cat.slug}>{cat.name}</Styled.h5>
        </Box>
      ))}
    </Flex>
  )
}

export default CategoryFilter
