/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Search from "../components/Search"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VoteForm from "../components/VoteForm"
import Story from "../components/Story"
import Img from "gatsby-image"
import CategoryFilter from "../components/CategoryFilter"
import { Mutation } from "react-apollo"
import { gql } from "apollo-boost"
import StoriesGrid from "../components/StoriesGrid"
// import Picks from "../components/Picks"

const SUBMIT_VOTE_MUTATION = gql`
  mutation voteMutation($input: VoteMutationInput!) {
    voteMutation(input: $input) {
      voteSubmitted
    }
  }
`

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

      {/* <Picks picks={picks} setPicks={setPicks} /> */}

      <div>
        <>
          <Styled.h3 sx={{ textAlign: `center` }}>Your Picks</Styled.h3>
          <Flex>
            {picks.length > 0 &&
              picks.map(story => (
                <Box sx={{ width: [`50%`, `50%`, `33%`], px: 2, my: 2 }}>
                  <Img
                    fluid={story.featuredImage.imageFile.childImageSharp.fluid}
                    alt={story.altText}
                    sx={{ cursor: `pointer` }}
                  />
                  <Box sx={{ textAlign: `center` }}>
                    <Styled.h5 sx={{ texAlign: `center` }}>
                      {story.title}
                    </Styled.h5>
                    <div
                      sx={{ cursor: `pointer` }}
                      onClick={() =>
                        setPicks(picks.filter(pick => pick !== story))
                      }
                    >
                      Remove
                    </div>
                  </Box>
                </Box>
              ))}
          </Flex>
          <button sx={{ cursor: `pointer` }}>Vote Now</button>
        </>
      </div>
      <Mutation mutation={SUBMIT_VOTE_MUTATION}>
        {(voteMutation, { data, error, loading }) => (
          <form
            onSubmit={e => {
              e.preventDefault()
              voteMutation({
                variables: {
                  input: vote,
                },
              })
            }}
          >
            <Styled.h3>
              Make it official
              <br />
              <span>Lock in your vote</span>
            </Styled.h3>
            <input
              type="text"
              placeholder="e-mail address*"
              value={vote.emailInput}
              onChange={e => setVote({ ...vote, emailInput: e.target.value })}
            />
            <Styled.p>Tell us the reason for your #1 Pick:</Styled.p>
            <textarea
              cols="30"
              rows="10"
              placeholder="enter your answer"
              value={vote.messageInput}
              onChange={e => setVote({ ...vote, messageInput: e.target.value })}
            />
            <input type="submit" value="submit" />
          </form>
        )}
      </Mutation>
    </Layout>
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
