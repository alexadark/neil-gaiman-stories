/** @jsx jsx */
import { createContext } from "react"
import { jsx, Container, Box } from "theme-ui"
import { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Search from "../components/Search"
import Layout from "../components/layout"
import SEO from "../components/seo"

import CategoryFilter from "../components/CategoryFilter"

import StoriesGrid from "../components/StoriesGrid"
import Picks from "../components/Picks"
import Overlay from "../components/Overlay"
import { flatString } from "../utils"

export const VoteContext = createContext()

const IndexPage = ({ data }) => {
  const { stories, categories } = data.wpgraphql

  const alphaStories = stories.nodes.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })

  //Initial storiesgrid = all the stories
  const [results, setStories] = useState(alphaStories)

  //Initial picks: taking them from localstorage

  const [picks, setPicks] = useState([])

  const [vote, setVote] = useState({
    clientMutationId: "submitVote",
    emailInput: "",
    messageInput: "",
    votesInput: [],
  })

  const [arePicksOpen, togglePicks] = useState(false)

  let [rehydrated, setRehydrated] = useState(false)

  useEffect(() => {
    // Check if the code is running in a browser, and if so load the saved state.
    if (!rehydrated && window) {
      console.log(rehydrated)
      let ls = window.localStorage
      let data = ls.getItem("picks")
      if (data) setPicks(JSON.parse(data))
      setRehydrated(true) //Make sure this only loads once.
    }
  })

  useEffect(() => {
    // This function serializes picks to localStorage when they change.
    // If the page successfully rehydrated there is definitely localStorge.
    if (rehydrated) {
      let ls = window.localStorage
      ls.setItem("picks", JSON.stringify(picks))
      let lsPicks = JSON.parse(ls.getItem("picks"))
      setVote({ ...vote, votesInput: lsPicks.map(pick => pick.storyId) })
    }
  }, [picks])

  //Filter stories grid on real time from title
  const findStories = (query, stories) => {
    //keep only stories where the title includes the query after converting to a flat string without spaces
    const results = stories.nodes.filter(story => {
      const flatStoryArray = Array.from(flatString(story.title))
      const flatQueryArray = Array.from(flatString(query))

      //we only keep the stories where all the letters from the query are included
      return flatQueryArray.every(letter => flatStoryArray.indexOf(letter) >= 0)
    })

    setStories(results)
  }

  //add the clicked story from the grid to the picks
  const addPick = story =>
    //maximun 3 votes
    picks.length < 3
      ? (setPicks(picks.concat([story])), togglePicks(true))
      : alert(
          "You can vote for up to 3 picks. Remove a pick to choose another."
        )

  //filter grid stories by category
  const filterCategories = (e, stories) => {
    setStories(
      //keeping only the categories where the slug = the data-category from the clicked category
      stories.nodes.filter(
        story => story.categories.nodes[0].slug === e.target.dataset.category
      )
    )
  }

  return (
    <VoteContext.Provider value={vote}>
      <Overlay arePicksOpen={arePicksOpen} togglePicks={togglePicks} />
      <Layout>
        <Container>
          <SEO title="home" />
          <Search onSearchStories={findStories} stories={stories} />
          <CategoryFilter
            stories={stories}
            setStories={setStories}
            filterCategories={filterCategories}
            categories={categories}
          />

          <StoriesGrid results={results} addPick={addPick} picks={picks} />
        </Container>
        <Picks
          picks={picks}
          setPicks={setPicks}
          arePicksOpen={arePicksOpen}
          togglePicks={togglePicks}
          setVote={setVote}
        />
      </Layout>
    </VoteContext.Provider>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AllStories {
    wpgraphql {
      stories(first: 1000) {
        nodes {
          storyId
          title
          featuredImage {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                fixed(width: 145, quality: 100) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
          StoriesFields {
            pickChar
            storyChar
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`
