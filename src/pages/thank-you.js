/** @jsx jsx */
import { jsx, Styled, Flex, Box, Container } from "theme-ui"
import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PicksContext } from "../pages"

const ThankYou = () => {
  const picks = useContext(PicksContext)
  return (
    <Layout>
      <SEO title="Thank You" />
      <Container sx={{ textAlign: `center` }}>
        <Styled.h1 sx={{ textTransform: `uppercase` }}>
          Thank you for your vote
        </Styled.h1>
        <Box>
          Follow Neil Gaiman on Facebook to find out which stories make it
        </Box>
        <Box>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://www.gaimanfavorites.com/&quote=This is my vote for #NeilAnthology #1:${picks &&
              picks[0].title}`}
            target="_blank"
          >
            fb
          </a>
        </Box>
      </Container>
    </Layout>
  )
}

export default ThankYou
