/** @jsx jsx */
import React, { createContext } from "react"
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Search from "../components/Search"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VoteForm from "../components/VoteForm"

import CategoryFilter from "../components/CategoryFilter"

import StoriesGrid from "../components/StoriesGrid"
import Picks from "../components/Picks"

export const VoteContext = createContext()

const flatString = text => text.toLowerCase().replace(/\s/g, "")

const IndexPage = ({ data }) => {
  const { stories } = data.wpgraphql
  const [results, setStories] = useState(stories.nodes)
  const [picks, setPicks] = useState([])
  const [vote, setVote] = useState({
    clientMutationId: "submitVote",
    emailInput: "",
    messageInput: "",
    votesInput: [],
  })

  useEffect(
    () => setVote({ ...vote, votesInput: picks.map(pick => pick.storyId) }),
    [picks]
  )

  const findStories = (query, stories) => {
    const flatQuery = flatString(query)
    const results = stories.nodes.filter(story =>
      flatString(story.title).includes(flatQuery)
    )

    return setStories(results)
  }

  const addPick = story =>
    picks.length < 3
      ? setPicks(picks.concat([story]))
      : alert("You cannot have more than 3 votes")

  const filterCategories = (e, stories) =>
    setStories(
      stories.nodes.filter(
        story => story.categories.nodes[0].slug === e.target.dataset.category
      )
    )

  return (
    <VoteContext.Provider value={vote}>
      <Layout>
        <SEO title="Home" />
        <Search onSearchStories={findStories} stories={stories} />
        <CategoryFilter
          stories={stories}
          handleSetStories={setStories}
          handleFilterCategories={filterCategories}
          categories={data.wpgraphql.categories}
        />
        {/* TODO:  add active class */}

        <StoriesGrid results={results} addPick={addPick} />
        <Picks picks={picks} setPicks={setPicks} />
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
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
