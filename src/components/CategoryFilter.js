/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"

const CategoryFilter = ({
  stories,
  setStories,
  filterCategories,
  categories,
  setActiveCat,
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
      <Box
        key="all"
        onClick={e => {
          setStories(stories.nodes)
          setActiveCat(e.target.dataset.category)
        }}
      >
        <Styled.h5 data-category="all">All</Styled.h5>
      </Box>
      {categories.nodes.map(cat => (
        <Box
          key={cat.slug}
          onClick={e => {
            filterCategories(e, stories, setActiveCat)
            setActiveCat(e.target.dataset.category)
          }}
        >
          <Styled.h5 data-category={cat.slug}>{cat.name}</Styled.h5>
        </Box>
      ))}
    </Flex>
  )
}

export default CategoryFilter
