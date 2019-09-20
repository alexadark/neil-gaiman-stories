/** @jsx jsx */
import { jsx, Box, Layout as StyledLayout } from "theme-ui"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import Footer from "./Footer"

import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"
import "../styles/scss/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteTitle
          title
          description
        }
      }
      wpgraphql {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  const { siteTitle, description } = data.site.siteMetadata

  return (
    <StyledLayout>
      <Global styles={GlobalStyles} />
      <Header siteTitle={siteTitle} description={description} />

      <Box>{children}</Box>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
