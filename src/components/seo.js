/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.png"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={` ${site.siteMetadata.title}`}
      link={[
        { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` },
      ]}
      meta={[
        {
          name: `description`,
          content: `Calling all Neil Gaiman fans...

        Next year, William Morrow will publish the ultimate collection of Neil Gaiman stories—a must-have for longtime fans and new readers alike. Your vote will help Neil choose the stories to include.

        Vote for your top three favorite stories by clicking on them below. If you have a moment, please share with us why you love your #1 choice.

        Cast your votes no later than October 31st, 2019. The winning stories will be announced on or before April 27th, 2020.`,
        },
        {
          property: `og:title`,
          content: `The Neil Gaiman Reader: Fiction`,
        },
        {
          property: `og:description`,
          content: `Calling all Neil Gaiman fans...

        Next year, William Morrow will publish the ultimate collection of Neil Gaiman stories—a must-have for longtime fans and new readers alike. Your vote will help Neil choose the stories to include.

        Vote for your top three favorite stories by clicking on them below. If you have a moment, please share with us why you love your #1 choice.

        Cast your votes no later than October 31st, 2019. The winning stories will be announced on or before April 27th, 2020.`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://www.gaimanfavorites.com`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `The Neil Gaiman Reader: Fiction`,
        },
        {
          name: `twitter:description`,
          content: `Calling all Neil Gaiman fans...

        Next year, William Morrow will publish the ultimate collection of Neil Gaiman stories—a must-have for longtime fans and new readers alike. Your vote will help Neil choose the stories to include.

        Vote for your top three favorite stories by clicking on them below. If you have a moment, please share with us why you love your #1 choice.

        Cast your votes no later than October 31st, 2019. The winning stories will be announced on or before April 27th, 2020.`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
