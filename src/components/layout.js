/** @jsx jsx */
import { jsx, Styled, Flex, Box, Main, Layout as StyledLayout } from "theme-ui"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"
import "../styles/scss/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const { title, description } = data.site.siteMetadata

  return (
    <StyledLayout>
      <Global styles={GlobalStyles} />
      <Header siteTitle={title} description={description} />
      <Box>{children}</Box>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
