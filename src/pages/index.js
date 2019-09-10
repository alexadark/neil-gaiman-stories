/** @jsx jsx */
import React, { createContext } from "react"
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Search from "../components/Search"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VoteForm from "../components/VoteForm"

import CategoryFilter from "../components/CategoryFilter"

import StoriesGrid from "../components/StoriesGrid"
import Picks from "../components/Picks"
import Overlay from "../components/Overlay"
import { flatString } from "../utils"

export const VoteContext = createContext()

const IndexPage = ({ data }) => {
  const { stories, categories } = data.wpgraphql

  // https://github.com/gatsbyjs/gatsby/issues/309
  const windowGlobal = typeof window !== "undefined" && window
  const ls = windowGlobal.localStorage

  //Initial storiesgrid = all the stories
  const [results, setStories] = useState(stories.nodes)

  //Initial picks: taking them from localstorage
  // const [picks, setPicks] = useState(() => JSON.parse(ls.getItem("picks")))
  const [picks, setPicks] = useState([])

  const [vote, setVote] = useState({
    clientMutationId: "submitVote",
    emailInput: "",
    messageInput: "",
    votesInput: [],
  })

  const [arePicksOpen, togglePicks] = useState(false)

  //setVotesInput and add picks to localStorage whenever picks are changing
  useEffect(() => {
    //getting the votesInput from the picks storyId
    setVote({ ...vote, votesInput: picks.map(pick => pick.storyId) })
    // ls.setItem("picks", JSON.stringify(picks))
  }, [picks])

  //Filter stories grid on real time from title
  const findStories = (query, stories) => {
    const flatQuery = flatString(query)
    //keep only stories where the title includes the query after converting to a flat string without spaces
    const results = stories.nodes.filter(story =>
      flatString(story.title).includes(flatQuery)
    )

    setStories(results)
  }

  //add the clicked story from the grid to the picks
  const addPick = story =>
    //maximun 3 votes
    picks.length < 3
      ? (setPicks(picks.concat([story])), togglePicks(true))
      : alert("You cannot have more than 3 votes")

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
      <Overlay arePicksOpen={arePicksOpen} />
      <Layout>
        <Container>
          <SEO title="Home" />
          <Search onSearchStories={findStories} stories={stories} />
          <CategoryFilter
            stories={stories}
            setStories={setStories}
            filterCategories={filterCategories}
            categories={categories}
          />
          {/* TODO:  add active class */}

          <StoriesGrid results={results} addPick={addPick} picks={picks} />
        </Container>
        <Picks
          picks={picks}
          setPicks={setPicks}
          arePicksOpen={arePicksOpen}
          togglePicks={togglePicks}
        />
        <VoteForm setVote={setVote} />
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
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          StoriesFields {
            originalBookLink
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
