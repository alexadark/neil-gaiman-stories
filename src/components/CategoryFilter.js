/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState, useEffect, useRef, creatRef } from "react"

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

  const ref = useRef()

  const assignActiveClass = (e, cat) => {
    const classes = e.target.classList
    cat.slug === activeCat ? classes.add("active") : classes.remove("active")
  }

  // const catsArray = Array.of(document.querySelectorAll(".cat"))
  // catsArray.map(catItem => console.log("classes", catItem.className))
  // // console.log(catsArray)

  // useEffect(cat => setActiveCat(cat), [])
  console.log(activeCat)
  console.log(ref.current)
  // console.log(document.querySelectorAll(".cat"))
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
        ref={ref}
        className="cat"
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
          ref={ref}
          className="cat"
          onClick={e => {
            filterCategories(e, stories, setActiveCat)
            setActiveCat(cat.slug)
            // assignActiveClass(e, cat)
            // console.log(cat.slug, activeCat)
            e.target.classList.add("active")
          }}
        >
          <Styled.h5 data-category={cat.slug}>{cat.name}</Styled.h5>
        </Box>
      ))}
    </Flex>
  )
}

export default CategoryFilter
