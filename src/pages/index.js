/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { stories } = data.wpgraphql
  return (
    <Layout>
      <SEO title="Home" />
      <Flex sx={{ flexWrap: `wrap` }}>
        {stories.nodes.map(story => (
          <Box sx={{ width: [`50%`, `50%`, `25%`], px: `20px`, my: `20px` }}>
            <article key={story.id}>
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
          title
          featuredImage {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_tracedSVG
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
            }
          }
        }
      }
    }
  }
`
