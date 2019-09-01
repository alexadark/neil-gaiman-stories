import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const GatsbyImage = ({ props }) => {
  // Otherwise display featured image.
  return (
    <Img
      fluid={props.featuredImage.imageFile.childImageSharp.fluid}
      alt={props.altText}
    />
  )
}

export default GatsbyImage

export const query = graphql`
  fragment GatsbyImageQuery on WPGraphQL_MediaItem {
    altText
    sourceUrl
    imageFile {
      childImageSharp {
        fluid(maxWidth: 920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
