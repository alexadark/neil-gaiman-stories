/** @jsx jsx */
import React from "react"
import { jsx, Styled, Flex, Box } from "theme-ui"
import { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Search from "../components/Search"

import Layout from "../components/layout"

import SEO from "../components/seo"

const flatString = text => text.toLowerCase().replace(/\s/g, "")

const IndexPage = ({ data }) => {
  const { stories } = data.wpgraphql
  const [results, setStories] = useState(stories.nodes)

  const findStories = (query, stories) => {
    const flatQuery = flatString(query)
    const results = stories.nodes.filter(story =>
      flatString(story.title).includes(flatQuery)
    )

    return setStories(results)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Search onSearchStories={findStories} stories={stories} />
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
            <Box sx={{ width: [`50%`, `50%`, `25%`], px: 2, my: 2 }}>
              <article
                key={story.id}
                data-category={story.categories.nodes[0].slug}
              >
                <Img
                  fluid={story.featuredImage.imageFile.childImageSharp.fluid}
                  alt={story.altText}
                />
                <Styled.h5 sx={{ texAlign: `center` }}>{story.title}</Styled.h5>
              </article>
            </Box>
          ))}
      </Flex>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AllStories {
    wpgraphql {
      stories(first: 1000) {
        nodes {
          id
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
            originalBookName
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
