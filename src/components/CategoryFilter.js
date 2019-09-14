/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState, useEffect } from "react"

const CategoryFilter = ({
  stories,
  setStories,
  filterCategories,
  categories,
}) => {
  const [activeCat, setActiveCat] = useState("all")

  const [cats, setCats] = useState(["all"])

  useEffect(
    () => setCats(cats.concat(categories.nodes.map(cat => cat.slug))),
    []
  )

  const catsStyles = {
    color: `primary`,
    transition: `all .4s ease-in-out`,
    cursor: `pointer`,
    mt: 0,
    mb: 20,

    ":hover, &.active": { color: `white` },
  }

  return (
    <Flex
      sx={{
        flexWrap: `wrap`,
        mt: [30, 50],
        div: {
          pr: 25,
          pl: 2,
          fontSize: 2,
          cursor: `pointer`,
        },
      }}
    >
      <Box
        key="all"
        className="cat"
        onClick={e => {
          setStories(stories.nodes)
          setActiveCat("all")
        }}
      >
        <Styled.h5
          sx={catsStyles}
          data-category="all"
          className={"all" === activeCat ? "active" : ""}
        >
          All
        </Styled.h5>
      </Box>
      {categories.nodes.map(cat => (
        <Box
          key={cat.slug}
          className="cat"
          onClick={e => {
            filterCategories(e, stories, setActiveCat)
            setActiveCat(cat.slug)
          }}
        >
          <Styled.h5
            sx={catsStyles}
            data-category={cat.slug}
            className={cat.slug === activeCat ? "active" : ""}
          >
            {cat.name}
          </Styled.h5>
        </Box>
      ))}
    </Flex>
  )
}

export default CategoryFilter
