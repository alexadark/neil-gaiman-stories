/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import Search from "../components/Search"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VoteForm from "../components/VoteForm"
import Story from "../components/Story"
import Img from "gatsby-image"

const flatString = text => text.toLowerCase().replace(/\s/g, "")

const IndexPage = ({ data }) => {
  const { stories } = data.wpgraphql
  const [results, setStories] = useState(stories.nodes)
  const [picks, setPicks] = useState([])

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

  return (
    <Layout>
      <SEO title="Home" />
      <Search onSearchStories={findStories} stories={stories} />
      {/* TODO: separate in component, add active class */}
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
      <Flex sx={{ flexWrap: `wrap` }}>
        {results !== [] &&
          results.map(story => (
            <Story story={story} location="stories" onClickPicture={addPick} />
          ))}
      </Flex>
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
        </>
      </div>
      <VoteForm />
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
