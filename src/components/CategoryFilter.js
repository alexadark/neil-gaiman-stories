/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState, useEffect, useRef } from "react"

const CategoryFilter = ({
  stories,
  setStories,
  filterCategories,
  categories,
}) => {
  const [activeCat, setActiveCat] = useState("all")

  const ref = useRef()

  const assignActiveClass = (e, cat) => {
    const classes = e.target.classList
    cat.slug === activeCat ? classes.add("active") : classes.remove("active")
    console.log(cat.slug, activeCat)
  }

  // useEffect(cat => setActiveCat(cat), [])

  return (
    <Flex
      ref={ref}
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
          setActiveCat("all")
        }}
      >
        <Styled.h5 data-category="all">All</Styled.h5>
      </Box>
      {categories.nodes.map(cat => (
        <Box
          key={cat.slug}
          onClick={e => {
            filterCategories(e, stories, setActiveCat)
            setActiveCat(cat.slug)
            assignActiveClass(e, cat)
            console.log(cat.slug, activeCat)
          }}
        >
          <Styled.h5 data-category={cat.slug}>{cat.name}</Styled.h5>
        </Box>
      ))}
    </Flex>
  )
}

export default CategoryFilter
